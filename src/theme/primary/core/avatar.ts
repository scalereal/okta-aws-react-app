import { AvatarTheme, defaultTheme } from '@medly-components/theme';
import colors from './colors';
const avatar: AvatarTheme = {
    ...defaultTheme.avatar,
    defaults: {
        ...defaultTheme.avatar.defaults,
        size: 'M',
        textColor: colors.purple[500],
        bgColor: colors.purple[100],
        fontWeight: 'Regular',
        fontFamily: 'Poppins',
        borderColor: colors.grey[200],
        borderRadius: '0.4rem',
        hover: {
            textShadowColor: 'rgba(110, 20, 255, 0.5)',
            imgShadowColor: 'rgba(96, 120, 144, 0.5)',
            textColor: colors.white,
            bgColor: colors.purple[400]
        }
    }
};

export default avatar;
