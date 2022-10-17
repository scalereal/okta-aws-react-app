import { PageContent } from '@components';
import { ChildrenContentWrapper, PageHeaderContentWrapper } from '@components/layout/PageContent/PageContent.styled';
import { styled } from '@utils';

export const StyledPageContent = styled(PageContent)`
    background-color: white;
    ${PageHeaderContentWrapper} {
        margin-bottom: 0;
        border-radius: unset;
    }
    ${ChildrenContentWrapper} {
        padding: 0 4rem;
    }
`;
