import { Popover as DefaultPopOver, Text } from '@medly-components/core';
import { DomainIcon as DefaultDomainIcon } from '@medly-components/icons';
import { styled } from '@utils';

export const StyledText = styled(Text)`
    margin-right: 1.4rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-transform: capitalize;
`;

export const DomainIcon = styled(DefaultDomainIcon)`
    z-index: inherit;
    border: ${({ theme }) => `0.1px solid ${theme.colors.grey[300]}`};
    padding: 0.9rem;
    background-color: transparent;
    & > path {
        fill: ${({ theme }) => theme.colors.purple[500]};
    }
`;

export const SideNavHeader = styled('div')`
    width: 100%;
    z-index: 3;
    min-height: ${({ theme }) => theme.sideNav.closeSize};
    align-items: center;
    justify-items: center;
    display: grid;
    overflow: visible;
    grid-template-columns: ${({
        theme: {
            sideNav: { closeSize, openSize }
        }
    }) => `${closeSize} calc(${openSize} - ${closeSize}) `};
    color: ${({ theme }) => theme.colors.grey[800]};
    transition: all 100ms ease-out;
`;

export const Separator = styled('div')`
    border-bottom: 0.1rem solid ${({ theme }) => theme.sideNav.separatorColor};
    width: calc(100% - 4rem);
    margin: auto;
    margin-top: -0.1rem;
`;

export const Popover = styled(DefaultPopOver)`
    position: inherit;
    display: flex;
    flex-direction: column;
    width: 100%;
    ${Text.Style} {
        cursor: default;
    }

    ${DefaultPopOver.Popup.Style} {
        top: 5.5rem;
        left: 7.2rem;
        width: fit-content;
        white-space: nowrap;
    }
`;
