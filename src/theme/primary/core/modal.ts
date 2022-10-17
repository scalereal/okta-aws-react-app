import { defaultTheme, ModalTheme } from '@medly-components/theme';
import colors from './colors';

const modal: ModalTheme = {
    ...defaultTheme.modal,
    borderRadius: '1.2rem',
    closeIcon: {
        ...defaultTheme.modal.closeIcon,
        borderRadius: '0.4rem',
        color: {
            default: colors.black,
            hovered: colors.white,
            pressed: colors.white
        },
        bgColor: {
            default: colors.grey[50],
            hovered: colors.purple[400],
            pressed: colors.purple[700]
        }
    }
};

export default modal;
