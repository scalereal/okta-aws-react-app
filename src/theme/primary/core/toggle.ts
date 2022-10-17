import { defaultTheme, ToggleTheme } from '@medly-components/theme';
import colors from './colors';

const toggle: ToggleTheme = {
    ...defaultTheme.toggle,
    outlineColor: colors.purple[600],
    checkedBgColor: colors.purple[600]
};

export default toggle;
