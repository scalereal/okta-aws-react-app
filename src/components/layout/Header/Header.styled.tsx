import { styled } from '@utils';

export const Header = styled('header')`
    box-sizing: border-box;
    height: 72px;
    background-color: ${({ theme }) => theme.colors.white};
    border-top-left-radius: 0.8rem;
    padding: 0 4rem 0 2.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey[200]}`};
`;

export const LeftSide = styled('div')`
    display: flex;
    align-items: center;
    border-bottom: 1px solid transparent;
    & > * {
        margin-right: ${({ theme }) => theme.spacing.S2};
    }
`;

export const RightSide = styled('div')`
    display: flex;
    align-items: center;
    & > * {
        margin-right: 0;
        margin-left: ${({ theme }) => theme.spacing.S2};
    }
`;
