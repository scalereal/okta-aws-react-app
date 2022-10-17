import { Container } from '@components/common/SharedStyle';
import { Text } from '@medly-components/core';
import { isValidStringOrNumber, WithStyle } from '@medly-components/utils';
import { primaryTheme } from '@theme';
import { FC, ReactElement, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getNavItemTitle } from '../SideNav/config';
import * as Styled from './PageContent.styled';
import { PageContentContext } from './PageContentContext';
import { PageContentStaticProps, Props } from './types';

export const PageContent: FC<Props> & PageContentStaticProps & WithStyle = props => {
    const {
        subHeaderSection: SubHeaderSection,
        pageTitle,
        activeMenu,
        subActiveMenu,
        breadCrumbs,
        pageAction: PageAction,
        labelTag: LabelTag,
        hideBreadCrumbs,
        withoutBgColor,
        withoutPadding,
        ...restProps
    } = props;
    const { pathname } = useLocation(),
        pageContentRef = useRef(null),
        activeSideNav = useMemo(() => getNavItemTitle(pathname), [pathname]),
        breadCrumbsEls = useMemo(() => {
            let crumbs;
            if (activeMenu && !hideBreadCrumbs) {
                if (activeSideNav) crumbs = subActiveMenu ? [activeSideNav, activeMenu, subActiveMenu] : [activeSideNav, activeMenu];
                else crumbs = subActiveMenu ? [activeMenu, subActiveMenu] : [activeMenu];
            } else crumbs = breadCrumbs || [];

            const els = crumbs.reduce(
                (acc, crumb, index) =>
                    acc.concat(
                        <Styled.BreadCrumbText
                            key={crumb}
                            textVariant="h5"
                            textWeight="Regular"
                            textColor={primaryTheme.colors.grey[600]}
                            uppercase
                            id={crumb}
                        >
                            {crumb}
                        </Styled.BreadCrumbText>,
                        <Styled.Slash key={crumb + index}>/</Styled.Slash>
                    ),
                [] as ReactElement[]
            );
            els.pop();
            return els;
        }, [activeMenu, activeSideNav, breadCrumbs, hideBreadCrumbs, subActiveMenu]),
        isHeaderVisible = useMemo(() => breadCrumbsEls.length || pageTitle, [breadCrumbsEls.length, pageTitle]);
    return (
        <Styled.PageContent ref={pageContentRef} {...restProps}>
            <PageContentContext.Provider value={{ pageContentRef }}>
                {isHeaderVisible && (
                    <Styled.PageHeaderContentWrapper>
                        <>{breadCrumbsEls.length ? breadCrumbsEls : null}</>
                        {pageTitle && isValidStringOrNumber(pageTitle) ? (
                            <Container px={0} py={0} justifyContent="space-between" alignItems="center">
                                <Container px={0} py={0} alignItems="center" flex="0 0 auto">
                                    <Text textVariant="h2" id="page-title">
                                        {pageTitle}
                                    </Text>
                                    {LabelTag && <LabelTag />}
                                </Container>
                                {PageAction && <PageAction />}
                            </Container>
                        ) : (
                            pageTitle
                        )}
                        {SubHeaderSection && <SubHeaderSection />}
                    </Styled.PageHeaderContentWrapper>
                )}
                {restProps.children && (
                    <Styled.ChildrenContentWrapper {...{ withoutBgColor, withoutPadding }}>
                        {restProps.children}
                    </Styled.ChildrenContentWrapper>
                )}
            </PageContentContext.Provider>
        </Styled.PageContent>
    );
};
PageContent.Header = Styled.Header;
PageContent.Footer = Styled.Footer;
PageContent.displayName = 'PageContent';
PageContent.Style = Styled.PageContent;

export default PageContent;
