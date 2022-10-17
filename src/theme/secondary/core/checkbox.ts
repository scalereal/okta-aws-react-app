import { CheckboxTheme, defaultTheme } from '@medly-components/theme';
import colors from '../../primary/core/colors';

const checkbox: CheckboxTheme = {
    ...defaultTheme.checkbox,
    borderRadius: '11.1%',
    borderColor: {
        default: colors.black,
        error: colors.red[600],
        active: colors.blue[500],
        pressed: colors.blue[500],
        disabled: colors.grey[300]
    },
    bgColor: {
        disabled: colors.grey[200],
        active: colors.blue[500],
        error: colors.red[600],
        pressed: {
            active: colors.blue[400],
            error: colors.red[500]
        },
        hovered: {
            active: colors.blue[400],
            error: colors.red[500]
        }
    }
};

export default checkbox;
