import { defaultTheme, SideNavTheme } from '@medly-components/theme';
import colors from '../core/colors';

const sideNav: SideNavTheme = {
    ...defaultTheme.sideNav,
    bgColor: colors.grey[50],
    navItem: {
        ...defaultTheme.sideNav.navItem,
        bgColor: {
            default: 'transparent',
            hovered: colors.grey[100],
            pressed: colors.grey[200],
            active: colors.white
        },
        icon: {
            size: 'S',
            color: {
                default: colors.grey[600],
                hovered: colors.grey[900],
                pressed: colors.black,
                active: colors.purple[500]
            }
        },
        text: {
            textVariant: 'body2',
            color: {
                default: colors.grey[800],
                hovered: colors.grey[900],
                pressed: colors.black,
                active: colors.black
            }
        }
    }
};

export default sideNav;
