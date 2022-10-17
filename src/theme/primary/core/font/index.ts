import { defaultTheme, FontTheme } from '@medly-components/theme';
import faces from './faces';
import variants from './variants';
import weights from './weights';

const font: FontTheme = {
    ...defaultTheme.font,
    faces,
    weights,
    variants,
    defaults: {
        color: defaultTheme.colors.black,
        variant: 'body2',
        fontFamily: 'Poppins, Helvetica Neue, Helvetica, Arial, sans-serif'
    }
};

export default font;
