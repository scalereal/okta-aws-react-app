import { HeadObjectCommand, ListObjectsV2Command, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Space } from '@components/common/SharedStyle';
import { Header } from '@components/layout';
import { useS3Client } from '@effects/useS3Client';
import { addToast } from '@medly-components/core';
import { fetch, getDateFromDate, getUserInfo } from '@utils';
import { FC, FormEvent, memo, useCallback, useEffect, useState } from 'react';
import { StyledPageContent } from './DataUpload.styled';
import FileUploadHistoryTable from './FileUploadHistoryTable';
import Form from './Form';
import PageTitle from './PageTitle';
import { FileListType } from './types';

const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME as string;

export const DataUpload: FC = memo(() => {
    const [isLoading, setIsLoading] = useState<boolean>(false),
        { name, email } = getUserInfo(),
        [fileList, setFileList] = useState<FileListType>([]),
        [isFileListLoading, setIsFileListLoading] = useState(true),
        s3Client = useS3Client(process.env.AWS_REGION || '', process.env.AWS_ROLE_ARN || ''),
        getFileList = useCallback(async () => {
            setIsFileListLoading(true);
            const listObjects = new ListObjectsV2Command({
                Bucket: AWS_S3_BUCKET_NAME
            });
            try {
                if (s3Client) {
                    const { Contents } = await s3Client.send(listObjects);
                    if (Contents) {
                        const data = Contents?.map(async files => {
                            const getMetadata = new HeadObjectCommand({
                                Bucket: AWS_S3_BUCKET_NAME,
                                Key: files.Key
                            });
                            const fileName =
                                (files.Key &&
                                    files.Key.split('/')
                                        .find(file => file && file.includes('.csv'))
                                        ?.split('_')
                                        .slice(1)
                                        .join('_')) ||
                                '';
                            let response;
                            try {
                                if (fileName) response = await s3Client.send(getMetadata);
                            } catch (error) {
                                return;
                            }
                            return {
                                key: files.Key,
                                fileName,
                                ...response?.Metadata
                            };
                        });
                        if (data?.length) {
                            Promise.all(data)
                                .then((files: any[]) => {
                                    setIsFileListLoading(false);
                                    const filteredFiles = files
                                        .filter(
                                            fileItem =>
                                                fileItem.fileName &&
                                                new Date(fileItem['uploaded-timestamp']) >= getDateFromDate(new Date(), -6)
                                        )
                                        .sort(function (a, b): any {
                                            return (
                                                new Date(b['uploaded-timestamp']).getTime() - new Date(a['uploaded-timestamp']).getTime()
                                            );
                                        });
                                    return setFileList(filteredFiles);
                                })
                                .finally(() => setIsFileListLoading(false))
                                .catch(() => null);
                        } else {
                            setIsFileListLoading(false);
                        }
                    } else {
                        setIsFileListLoading(false);
                    }
                }
            } catch (error) {
                setIsFileListLoading(false);
            }
        }, [s3Client]),
        handleFileUpload = async (event: FormEvent) => {
            event.preventDefault();
            setIsLoading(true);
            const formData = new FormData(event.currentTarget as HTMLFormElement);
            const description = formData.get('description') as string,
                file = formData.get('data-file') as File,
                Metadata = {
                    description,
                    'uploaded-by-user-name': name,
                    'uploaded-user-email': email,
                    'uploaded-timestamp': new Date().toString()
                },
                fileName = file.name.replace(/[^\w.]+/g, '_'),
                uploadParams = {
                    Bucket: 'sample-okta',
                    Key: `${new Date().getTime()}_${fileName}`,
                    Body: file,
                    Metadata
                },
                awsFileObjectCommand = new PutObjectCommand(uploadParams);

            s3Client &&
                s3Client
                    .send(awsFileObjectCommand)
                    .then(() => {
                        // success message
                        return addToast({
                            variant: 'success',
                            message: 'File uploaded successfully'
                        });
                    })
                    .finally(() => setIsLoading(false))
                    .catch(err => {
                        console.log({ err });
                        // failure message
                        addToast({
                            variant: 'error',
                            message: 'Upload failed: Try uploading the file again'
                        });
                    });
        },
        handleFileUploadTroughSignedUrl = async (event: FormEvent) => {
            event.preventDefault();
            setIsLoading(true);
            const formData = new FormData(event.currentTarget as HTMLFormElement);
            const description = formData.get('description') as string,
                file = formData.get('data-file') as File,
                Metadata = {
                    description,
                    'uploaded-by-user-name': name,
                    'uploaded-user-email': email,
                    'uploaded-timestamp': new Date().toString()
                },
                fileName = file.name.replace(/[^\w.]+/g, '_'),
                uploadParams = {
                    Bucket: 'sample-okta',
                    Key: `${new Date().getTime()}_${fileName}`,
                    Body: file,
                    Metadata
                },
                awsFileObjectCommand = new PutObjectCommand(uploadParams),
                signedUploadUrl = s3Client && (await getSignedUrl(s3Client, awsFileObjectCommand, { expiresIn: 3600 }));

            const { response, error } = await fetch({
                url: signedUploadUrl || '',
                method: 'PUT',
                data: uploadParams.Body,
                headers: {
                    'Content-Type': file.type,
                    'content-disposition': `attachment; filename=${fileName}`
                }
            });
            if (response) {
                addToast({
                    variant: 'success',
                    message: 'FIle uploaded successfully'
                });
                setIsLoading(false);
            }
            if (error) {
                console.log({ error });
                addToast({
                    variant: 'error',
                    message: 'file upload failed'
                });
                setIsLoading(false);
            }
        };

    useEffect(() => {
        getFileList();
    }, [getFileList]);

    return (
        <>
            <Header />
            <StyledPageContent pageTitle={<PageTitle showHelperText />}>
                <Form uploadHandler={handleFileUpload} isLoading={isLoading} />
                <Space val="3rem" />
                <FileUploadHistoryTable isLoading={isFileListLoading} fileList={fileList} />
            </StyledPageContent>
        </>
    );
});

DataUpload.displayName = 'DataUpload';
