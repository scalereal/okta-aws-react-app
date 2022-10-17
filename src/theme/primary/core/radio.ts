import { defaultTheme, RadioTheme } from '@medly-components/theme';
import colors from './colors';

const radio: RadioTheme = {
    ...defaultTheme.radio,
    fillColor: {
        default: colors.black,
        active: colors.purple[500],
        error: colors.red[600],
        hovered: {
            default: colors.purple[400],
            error: colors.red[500]
        },
        disabled: colors.grey[300]
    }
};

export default radio;
