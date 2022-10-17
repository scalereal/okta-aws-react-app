import { defaultTheme, LoaderTheme } from '@medly-components/theme';
import colors from './core/colors';

const loader: LoaderTheme = {
    ...defaultTheme.loader,
    defaultColor: colors.purple[500]
};

export default loader;
