import { WithThemeProp } from '@utils';
import { ReactElement } from 'react';

export interface Props extends WithThemeProp {
    pageTitle?: string | ReactElement<any>;
}
