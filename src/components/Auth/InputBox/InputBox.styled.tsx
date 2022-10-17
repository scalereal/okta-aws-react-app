import { Text } from '@medly-components/core';
import { HTMLProps } from '@medly-components/utils';
import { primaryTheme } from '@theme';
import { css, styled } from '@utils';

export const InputWrapper = styled('div')<{ fullWidth?: boolean }>`
    ${({ fullWidth }) =>
        fullWidth &&
        css`
            width: 100%;
            & {
                flex-grow: 1;
            }
        `};
`;

export const Label = styled(Text)`
    display: block;
    color: ${({ theme }) => theme.colors.white};
`;

export const InputBox = styled('input')<{ fullWidth?: boolean } & HTMLProps<HTMLInputElement>>`
    border: none;
    margin: 0.5rem 0;
    font-size: 1.4rem;
    line-height: 2rem;
    border-radius: 0.4rem;
    padding: 1.3rem 1.6rem;
    box-sizing: border-box;
    ${({ fullWidth }) =>
        fullWidth &&
        css`
            width: 100%;
        `}
    ::placeholder {
        color: ${primaryTheme.colors.grey[500]};
    }
`;
