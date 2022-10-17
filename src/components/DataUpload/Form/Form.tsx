import { Button, FileInput, TextField } from '@medly-components/core';
import { DeleteOutlineIcon } from '@medly-components/icons';
import { ThemeProvider, updateNestedValue } from '@utils';
import { FC, FormEvent, memo, useCallback, useEffect, useRef, useState } from 'react';
import { customTheme } from './customTheme';
import { StyledFileInputWrapper } from './Form.styled';
import { Props } from './types';

export const Form: FC<Props> = memo(({ uploadHandler, isLoading }) => {
    const [disableUpload, setDisableUpload] = useState(true),
        [file, setFile] = useState<FileList>(),
        [description, setDescription] = useState(''),
        fileInputRef = useRef<HTMLInputElement>(null),
        handleDescription = (event: FormEvent<HTMLInputElement>) => setDescription(event.currentTarget.value),
        handleFileChange = useCallback((files: FileList | null) => {
            if (files?.length) setFile(files);
            else {
                if (fileInputRef && fileInputRef.current) fileInputRef.current.value = '';
                setFile(undefined);
            }
        }, []),
        submitHandler = useCallback(
            (event: FormEvent) => {
                event.preventDefault();
                uploadHandler(event);
            },
            [uploadHandler]
        );

    useEffect(() => setDisableUpload(!(description && file)), [description, file]);

    return (
        <form name="upload-form" noValidate onSubmit={submitHandler}>
            <StyledFileInputWrapper justifyContent="start" alignItems="start" px={0} py={0}>
                <ThemeProvider
                    theme={updateNestedValue(customTheme, 'input', {
                        ...customTheme.input,
                        borderColor: 'white'
                    })}
                >
                    <FileInput
                        name="data-file"
                        placeholder="Choose a file"
                        accept="text/csv"
                        // @ts-ignore
                        files={file}
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        required
                    />
                </ThemeProvider>
                {file && file[0]?.name && <DeleteOutlineIcon onClick={() => handleFileChange(null)} />}
            </StyledFileInputWrapper>
            <TextField name="description" label="Description" placeholder="Enter Description" onChange={handleDescription} />
            <ThemeProvider
                theme={updateNestedValue(customTheme, 'button.solid', {
                    textColor: { ...customTheme.button.solid.textColor, disabled: customTheme.colors.white },
                    bgColor: { ...customTheme.button.solid.bgColor, disabled: customTheme.colors.grey[500] }
                })}
            >
                <Button size="S" type="submit" disabled={disableUpload} isLoading={isLoading}>
                    Upload
                </Button>
            </ThemeProvider>
        </form>
    );
});

Form.displayName = 'Form';
