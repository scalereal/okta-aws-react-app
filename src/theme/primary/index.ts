import { defaultTheme as medlyDefaultTheme } from '@medly-components/theme';
import coreDefaultTheme from './core';
import icon from './icon';
import { layoutDefaultTheme } from './layout';
import loader from './loader';

export const primaryTheme = {
    ...medlyDefaultTheme,
    ...coreDefaultTheme,
    ...layoutDefaultTheme,
    loader,
    icon
};
