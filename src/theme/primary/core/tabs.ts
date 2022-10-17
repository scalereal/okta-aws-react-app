import { defaultTheme, TabsTheme } from '@medly-components/theme';
import colors from './colors';

const tabs: TabsTheme = {
    ...defaultTheme.tabs,
    labelColor: {
        active: colors.grey[900],
        default: colors.grey[600],
        hovered: colors.grey[800],
        disabled: colors.grey[400]
    },
    borderColor: {
        ...defaultTheme.tabs.borderColor,
        active: colors.purple[500],
        hovered: colors.grey[800]
    },
    countBgColor: {
        active: colors.purple[500],
        default: colors.grey[600],
        hovered: colors.grey[800],
        disabled: colors.grey[400]
    }
};

export default tabs;
