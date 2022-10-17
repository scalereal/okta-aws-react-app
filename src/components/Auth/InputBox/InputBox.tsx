import { Box } from '@medly-components/core';
import { defaultTheme } from '@theme';
import { ThemeProvider, updateNestedValue } from '@utils';
import { FC, memo } from 'react';
import * as Styled from './InputBox.styled';
import { Props } from './types';

export const InputBox: FC<Props> = memo(({ name, placeholderText, onChange, value, label, type, fullWidth, errorText }) => {
    return (
        <Styled.InputWrapper fullWidth={fullWidth}>
            <ThemeProvider
                theme={updateNestedValue(defaultTheme, 'input', {
                    ...defaultTheme.input,
                    placeHolderColor: defaultTheme.colors.grey[400]
                })}
            >
                <Styled.Label textVariant="h5">{label}</Styled.Label>
                <Styled.InputBox
                    id={`${name}-id`}
                    key={name}
                    {...{ name, onChange, value, type, fullWidth }}
                    placeholder={placeholderText}
                    required
                />
                {errorText && (
                    <Box
                        my={-2}
                        py={0}
                        color={defaultTheme.colors.red[500]}
                        borderColor={defaultTheme.colors.red[500]}
                        borderRadius={2}
                        borderWidth={1}
                    >
                        {errorText}
                    </Box>
                )}
            </ThemeProvider>
        </Styled.InputWrapper>
    );
});

InputBox.displayName = 'InputBox';
export default InputBox;
