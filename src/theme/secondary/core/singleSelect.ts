import { SingleSelectTheme } from '@medly-components/theme';
import { primaryTheme } from '../../primary';
import colors from '../../primary/core/colors';

const singleSelect: SingleSelectTheme = {
    ...primaryTheme.singleSelect,
    variant: {
        ...primaryTheme.singleSelect.variant,
        flat: {
            ...primaryTheme.singleSelect.variant.flat,
            valueColor: {
                ...primaryTheme.singleSelect.variant.flat.valueColor,
                default: colors.purple[500],
                hovered: colors.purple[600],
                pressed: colors.purple[700],
                activated: colors.purple[500]
            }
        }
    },
    option: {
        ...primaryTheme.singleSelect.option,
        bgColor: {
            ...primaryTheme.singleSelect.option.bgColor,
            selected: primaryTheme.colors.purple[50]
        },
        textColor: {
            ...primaryTheme.singleSelect.option.textColor,
            selected: primaryTheme.colors.purple[500]
        }
    }
};

export default singleSelect;
