import { defaultTheme, SingleSelectTheme } from '@medly-components/theme';
import colors from './colors';

const singleSelect: SingleSelectTheme = {
    ...defaultTheme.singleSelect,
    variant: {
        flat: {
            height: defaultTheme.singleSelect.variant.flat.height,
            bgColor: {
                default: colors.white,
                hovered: colors.grey[50],
                pressed: colors.grey[100],
                activated: colors.grey[50],
                disabled: colors.white
            },
            labelColor: {
                default: colors.grey[900],
                hovered: colors.grey[900],
                pressed: colors.black,
                activated: colors.grey[900],
                disabled: colors.grey[400],
                error: colors.black
            },
            valueColor: {
                default: colors.blue[600],
                hovered: colors.blue[500],
                pressed: colors.blue[700],
                activated: colors.blue[500],
                disabled: colors.grey[400],
                error: colors.red[600]
            }
        }
    },
    option: {
        ...defaultTheme.singleSelect.option,
        textVariant: {
            S: 'body3',
            M: 'body1'
        },
        bgColor: {
            default: colors.white,
            hovered: colors.grey[50],
            selected: colors.purple[100],
            pressed: colors.grey[100],
            error: colors.red[100]
        },
        textColor: {
            default: colors.black,
            hovered: colors.black,
            selected: colors.purple[500],
            error: colors.red[600],
            disabled: colors.grey[500]
        }
    }
};

export default singleSelect;
