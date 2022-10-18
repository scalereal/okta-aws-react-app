import { URLRoot as URL } from '@constants/clientUrls';
import { UploadIcon } from '@icons';
import { InsertChartOutlinedIcon } from '@medly-components/icons';
import { SideNav as MedlySideNav } from '@medly-components/layout';
import { WithStyle } from '@medly-components/utils';
import { FC, memo, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { isSidebarVisible } from './config';
import { getMedlySideBarNav } from './shared.component';
import { SideNavHeader } from './SidenavHeader/SideNavHeader';
import { Props, SideBarMenuConf } from './types';

const menuList: SideBarMenuConf[] = [
    {
        path: '/',
        icon: <InsertChartOutlinedIcon />
    },
    {
        path: URL.dataUpload,
        icon: <UploadIcon />
    }
];

const Component: FC<Props> = memo(props => {
    const { pathname } = useLocation(),
        sideBarVisible = isSidebarVisible(pathname),
        { defaultOpen } = props,
        history = useHistory(),
        handlePathChange = useCallback((page: string) => history.push(page), [history]);
    if (!sideBarVisible) return null;

    return (
        <MedlySideNav
            onChange={handlePathChange}
            active={pathname}
            defaultOpen={defaultOpen}
            expandedToggleText="Hide menu"
            collapsedToggleText="Open menu"
        >
            <SideNavHeader />
            <MedlySideNav.List>
                <MedlySideNav.Group title="Menu">{getMedlySideBarNav(menuList)}</MedlySideNav.Group>
            </MedlySideNav.List>
        </MedlySideNav>
    );
});

Component.displayName = 'AppSideNav';
Component.defaultProps = {
    defaultOpen: true
};
export const AppSideNav: FC<Props> & WithStyle = Object.assign(Component, {
    Style: MedlySideNav.Style
});
