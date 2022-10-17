import { DateRangePickerTheme, defaultTheme } from '@medly-components/theme';
import colors from './colors';

const dateRangePicker: DateRangePickerTheme = {
    ...defaultTheme.dateRangePicker,
    inputSeparatorColor: {
        ...defaultTheme.dateRangePicker.inputSeparatorColor,
        filled: {
            ...defaultTheme.dateRangePicker.inputSeparatorColor.filled,
            active: colors.purple[500]
        },
        outlined: {
            ...defaultTheme.dateRangePicker.inputSeparatorColor.outlined,
            active: colors.purple[500]
        }
    },
    date: {
        ...defaultTheme.dateRangePicker.date,
        borderColor: {
            ...defaultTheme.dateRangePicker.date.borderColor,
            selected: colors.purple[500],
            hovered: colors.purple[500]
        },
        bgColor: {
            ...defaultTheme.dateRangePicker.date.bgColor,
            selected: colors.purple[500]
        },
        fillColor: {
            ...defaultTheme.dateRangePicker.date.fillColor,
            selected: colors.purple[100]
        }
    }
};

export default dateRangePicker;
