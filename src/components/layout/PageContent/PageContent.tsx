import { Text } from '@medly-components/core';
import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import { FC } from 'react';
import * as Styled from './PageContent.styled';
import { Props } from './types';

export const PageContent: FC<Props> & WithStyle = props => {
    const { pageTitle, children } = props;
    return (
        <Styled.PageContent>
            <Styled.PageHeaderContentWrapper>
                {pageTitle && isValidStringOrNumber(pageTitle) ? (
                    <Text textVariant="h2" id="page-title">
                        {pageTitle}
                    </Text>
                ) : (
                    pageTitle
                )}
            </Styled.PageHeaderContentWrapper>

            {children && <Styled.ChildrenContentWrapper>{children}</Styled.ChildrenContentWrapper>}
        </Styled.PageContent>
    );
};

PageContent.displayName = 'PageContent';
PageContent.Style = Styled.PageContent;

export default PageContent;
