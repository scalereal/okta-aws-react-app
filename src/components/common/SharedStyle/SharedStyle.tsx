import { Box } from '@medly-components/core';
import { styled } from '@utils';
import { css } from 'styled-components';

export type ContainerProps = {
    mb?: string;
    gap?: string;
    flex?: string;
    maxWidth?: string;
    minHeight?: string;
    alignSelf?: string;
    alignItems?: string;
    justifyContent?: string;
    cursorOnHover?: boolean;
    flexDirection?: 'column' | 'row';
};

export const Container = styled(Box)<ContainerProps>`
    display: flex;
    gap: ${({ gap }) => gap};
    flex: ${({ flex }) => flex};
    align-self: ${({ alignSelf }) => alignSelf};
    align-items: ${({ alignItems }) => alignItems};
    flex-direction: ${({ flexDirection }) => flexDirection};
    justify-content: ${({ justifyContent }) => justifyContent};

    ${({ maxWidth }) =>
        maxWidth &&
        css`
            max-width: ${maxWidth};
        `}

    ${({ minHeight }) =>
        minHeight &&
        css`
            min-height: ${minHeight};
        `}

    ${({ cursorOnHover }) =>
        cursorOnHover &&
        css`
            cursor: pointer;
        `}

        ${({ mb }) =>
        mb &&
        css`
            margin-bottom: ${mb};
        `}
`;

Container.defaultProps = {
    gap: '0rem',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    alignSelf: 'auto',
    flex: 'auto'
};

export const Space = styled('div')<{ val?: string }>`
    margin-bottom: ${props => props.val};
`;
