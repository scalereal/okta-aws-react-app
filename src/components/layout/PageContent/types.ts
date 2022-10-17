import { WithThemeProp } from '@utils';
import { FC, ReactElement } from 'react';
import { AnyStyledComponent } from 'styled-components';

export interface Props extends WithThemeProp {
    pageTitle?: string | ReactElement<any>;
    labelTag?: FC;
    activeMenu?: string;
    subActiveMenu?: string;
    breadCrumbs?: string[];
    pageAction?: FC;
    isLoading?: boolean;
    isAdminLandingScreen?: boolean;
    subHeaderSection?: FC;
    hideBreadCrumbs?: boolean;
    withoutPadding?: boolean;
    withoutBgColor?: boolean;
}

export interface HeaderStaticProps {
    LeftSide: AnyStyledComponent;
    RightSide: AnyStyledComponent;
}

export interface PageContentStaticProps {
    Header: AnyStyledComponent & HeaderStaticProps;
    Footer: AnyStyledComponent;
}
