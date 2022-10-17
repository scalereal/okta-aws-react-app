import { AuthURL, URLRoot as URL } from '@constants/clientUrls';
import { matchPath } from 'react-router-dom';

const sideNavConfig = {
    [URL.dashboard]: { title: 'Dashboard' },
    [URL.dataUpload]: { title: 'Data upload' }
};

export const getNavItemTitle = (path: string) => sideNavConfig[path] && sideNavConfig[path].title;

export const pathsWhereSidebarHidden = [...Object.values(AuthURL)];

export const isSidebarVisible = (pathname: string) =>
    pathsWhereSidebarHidden.every(
        path =>
            matchPath(pathname, {
                path,
                exact: true,
                strict: false
            }) === null
    );
