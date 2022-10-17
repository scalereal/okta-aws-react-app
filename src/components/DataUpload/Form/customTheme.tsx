import { updateNestedValue } from '@medly-components/utils';
import { primaryTheme } from '@theme';

export const customTheme = updateNestedValue(primaryTheme, 'textField', {
    ...primaryTheme.textField,
    height: {
        ...primaryTheme.textField.height,
        S: '6rem'
    },
    textVariant: { ...primaryTheme.textField.textVariant, S: 'body2' },
    outlined: {
        ...primaryTheme.textField.outlined,
        default: {
            ...primaryTheme.textField.outlined.default,
            borderColor: primaryTheme.colors.grey[600]
        }
    }
});
