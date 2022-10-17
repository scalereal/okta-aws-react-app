import { ToastTheme } from '@medly-components/theme';
import colors from './colors';

const toast: ToastTheme = {
    textColor: colors.grey[900],
    boxShadow: colors.grey[400],
    bgColor: {
        success: colors.lime[100],
        info: colors.purple[100],
        warning: colors.yellow[200],
        error: colors.red[100]
    },
    fillColor: {
        success: colors.lime[600],
        info: colors.purple[500],
        warning: colors.yellow[500],
        error: colors.red[500]
    }
};

export default toast;
