import { styled } from '@utils';

export const PageContent = styled('main')`
    overflow: auto;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.colors.grey[50]};
`;

export const PageHeaderContentWrapper = styled('div')`
    padding: 4rem;
    background-color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.8rem;
    border-radius: 0.8rem;
`;

export const ChildrenContentWrapper = styled('div')`
    padding: 1rem 4rem;
    background-color: white;
    border-radius: 0.8rem;
`;
