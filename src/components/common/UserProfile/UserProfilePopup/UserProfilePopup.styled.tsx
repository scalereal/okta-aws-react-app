import { Avatar, Popover, Text } from '@medly-components/core';
import { styled } from '@utils';

export const StyledAvatar = styled(Avatar)<{ leftMargin?: string; showSeparator?: boolean }>`
    z-index: 12;
    position: relative;
    cursor: pointer;
    transition: all 100ms ease-out;
    overflow: visible;
`;

export const UserTitle = styled(Text)`
    display: flex;
    flex-direction: column;
    text-align: left;
    color: ${({ theme }) => theme.colors.grey[900]};
    white-space: nowrap;
`;

export const Popup = styled(Popover.Popup)`
    width: fit-content;
    min-width: 23.2rem;
    top: 5.2rem;
    right: 0;
    background: #fff;
    box-shadow: 0 0.4rem 3.2rem rgba(96, 120, 144, 0.35);
    transform: none;
    left: auto;
    border-radius: 0.8rem;
    z-index: 12;
`;

export const PopupContent = styled('div')<{ active?: boolean }>`
    display: flex;
    flex-direction: column;

    & > * {
        cursor: pointer;
        padding: 2rem;
    }

    & > *:not(:last-child) {
        position: relative;
        &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            width: 100%;
            height: 0.1rem;
            background: #dfe4e9;
            margin: auto;
            bottom: 0;
        }
    }

    & > *:not(:first-child) {
        &:hover {
            background-color: ${({ theme, active }) => !active && theme.colors.grey[50]};
        }

        &:active {
            background-color: ${({ theme, active }) => !active && theme.colors.grey[100]};
        }
    }

    & > :last-child {
        &:hover {
            border-radius: 0 0 0.8rem 0.8rem;
        }
    }
`;

export const UserInfo = styled('div')`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    padding-top: 2.4rem;
    & > ${StyledAvatar.Style} {
        margin-right: 1.2rem;
    }
`;

export const Overlay = styled('div')`
    transform: rotate(180deg);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    z-index: 11;
`;

export const Container = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
