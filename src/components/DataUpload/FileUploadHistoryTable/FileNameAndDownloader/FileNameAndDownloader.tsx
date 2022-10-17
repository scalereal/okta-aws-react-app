import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Container } from '@components/common/SharedStyle';
import { useS3Client } from '@effects/useS3Client';
import { TableColumnConfig, Text } from '@medly-components/core';
import { primaryTheme } from '@theme';
import { memo, useCallback } from 'react';

export const FileNameAndDownloader: Required<TableColumnConfig>['component'] = memo(({ rowData }) => {
    const s3Client = useS3Client(process.env.AWS_REGION || '', process.env.AWS_ROLE_ARN || ''),
        fileDownloader = useCallback(async () => {
            const command = new GetObjectCommand({
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: rowData?.key || ''
            });
            if (s3Client) {
                const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
                const link = document.createElement('a');
                link.href = url;
                link.download = rowData?.fileName;
                link.title = rowData?.fileName;
                link.click();
            }
        }, [rowData?.fileName, rowData?.key, s3Client]);

    return rowData?.message ? (
        <Container color={primaryTheme.colors.blue[500]} px={0} py={0} cursorOnHover onClick={fileDownloader} bg="transparent">
            {rowData?.fileName}
        </Container>
    ) : (
        <Text>{rowData?.fileName}</Text>
    );
});

FileNameAndDownloader.displayName = 'FileNameAndDownloader';
