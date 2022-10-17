import { Popover } from '@medly-components/core';
import { css, styled } from '@utils';

const avatarSeparator = css`
    &::before {
        content: '';
        position: absolute;
        left: -1.2rem;
        width: 1px;
        height: 3.2rem;
        background: ${({ theme }) => theme.colors.grey[200]};
        margin: auto;
        top: 0;
        bottom: 0;
    }
`;

export const UserProfilePopover = styled(Popover)<{ leftMargin?: string; showSeparator: boolean }>`
    && {
        margin-left: ${({ leftMargin }) => (leftMargin ? leftMargin : '2.4rem')};
    }
    ${props => props.showSeparator && avatarSeparator};
`;
