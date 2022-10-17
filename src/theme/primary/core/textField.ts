import { defaultTheme, TextFieldTheme } from '@medly-components/theme';
import colors from './colors';

const textField: TextFieldTheme = {
    ...defaultTheme.textField,
    textVariant: {
        S: 'body3',
        M: 'body1'
    },

    outlined: {
        ...defaultTheme.textField.outlined,
        active: {
            ...defaultTheme.textField.outlined.active,
            placeholderColor: colors.grey[300],
            borderColor: colors.purple[500],
            labelColor: colors.purple[500],
            shadowColor: colors.purple[500]
        },
        error: {
            ...defaultTheme.textField.outlined.error,
            caretColor: colors.red[600],
            placeholderColor: colors.grey[300],
            cursorColor: colors.red[600],
            borderColor: colors.red[600],
            labelColor: colors.red[600],
            helperTextColor: colors.red[600],
            shadowColor: colors.red[600]
        }
    },
    filled: {
        ...defaultTheme.textField.filled,
        active: {
            placeholderColor: colors.purple[200],
            bgColor: colors.purple[100],
            borderColor: colors.purple[600],
            labelColor: colors.purple[600]
        },
        error: {
            caretColor: colors.red[600],
            placeholderColor: colors.red[200],
            bgColor: colors.red[100],
            cursorColor: colors.red[600],
            borderColor: colors.red[600],
            labelColor: colors.red[600],
            helperTextColor: colors.red[600]
        }
    }
};

export default textField;
