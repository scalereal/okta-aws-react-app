import { Text } from '@medly-components/core';
import { SideNav as MedlySideNav } from '@medly-components/layout';
import { getNavItemTitle } from './config';
import { SideBarMenuConf } from './types';

export const getMedlySideBarNav = (menus: SideBarMenuConf[]) =>
    menus.map(conf => (
        <MedlySideNav.Nav key={conf.path} path={conf.path}>
            {conf.icon}
            <Text>{getNavItemTitle(conf.path)}</Text>
        </MedlySideNav.Nav>
    ));
