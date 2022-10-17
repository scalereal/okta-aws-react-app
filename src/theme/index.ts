import { Theme as MedlyTheme } from '@medly-components/theme';
import { ColorPallet } from './primary/core/colors/types';
import { secondaryTheme } from './secondary';
export * from '@medly-components/theme';
export * from './primary';
export * from './secondary';

export const defaultTheme = {
    ...secondaryTheme
};
export interface Theme extends MedlyTheme {
    colors: ColorPallet;
}
