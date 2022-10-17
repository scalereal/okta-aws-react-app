import { defaultTheme, IconTheme } from '@medly-components/theme';
import colors from './core/colors';

const icon: IconTheme = {
    ...defaultTheme.icon,
    borderRadius: '0.4rem',
    colors: {
        default: { iconColor: colors.grey[600], bgColor: 'transparent' },
        disabled: { iconColor: colors.grey[300], bgColor: 'transparent' },
        hovered: { iconColor: colors.purple[400], bgColor: colors.grey[50] }
    }
};

export default icon;
