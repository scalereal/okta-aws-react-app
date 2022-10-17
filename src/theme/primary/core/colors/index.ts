import { defaultTheme } from '@medly-components/theme';
import blue from './blue';
import coral from './coral';
import forest from './forest';
import lime from './lime';
import purple from './purple';
import red from './red';
import { ColorPallet } from './types';
import yellow from './yellow';

const colors: ColorPallet = {
    ...defaultTheme.colors,
    blue,
    yellow,
    red,
    purple,
    coral,
    lime,
    forest
};

export default colors;
