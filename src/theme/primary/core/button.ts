import { ButtonTheme, defaultTheme } from '@medly-components/theme';
import colors from './colors';

const button: ButtonTheme = {
    ...defaultTheme.button,
    solid: {
        ...defaultTheme.button.solid,
        textColor: { default: colors.white, hovered: colors.white, pressed: colors.white, disabled: colors.grey[400] },
        bgColor: { default: colors.purple[500], hovered: colors.purple[400], pressed: colors.purple[700], disabled: colors.grey[200] }
    },
    outlined: {
        ...defaultTheme.button.outlined,
        textColor: { default: colors.purple[500], hovered: colors.purple[400], pressed: colors.purple[700], disabled: colors.grey[400] },
        borderColor: { default: colors.purple[400], hovered: colors.purple[400], pressed: colors.purple[700], disabled: colors.grey[500] },
        bgColor: { default: 'transparent', hovered: 'transparent', pressed: colors.purple[100], disabled: 'transparent' }
    },
    flat: {
        textColor: { default: colors.blue[500], hovered: colors.blue[400], pressed: colors.blue[700], disabled: colors.blue[500] }
    },
    borderRadius: {
        square: '0.4rem',
        rounded: '100rem',
        circle: '50%'
    }
};

export default button;
