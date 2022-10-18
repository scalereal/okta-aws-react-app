import { styled } from '@utils';

export const StyledHeader = styled('header')`
    box-sizing: border-box;
    height: 72px;
    background-color: #ffff;
    border-top-left-radius: 0.8rem;
    padding: 0 4rem 0 2.4rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey[200]}`};
`;
