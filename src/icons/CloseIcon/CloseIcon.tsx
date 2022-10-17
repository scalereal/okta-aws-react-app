import { SvgIcon, SvgIconProps } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import Close from './close.svg';

const CloseIcon: React.FunctionComponent<SvgIconProps> & WithStyle = props => (
    <SvgIcon {...props}>
        <Close {...props} width="0.8em" height="0.8em" />
    </SvgIcon>
);

CloseIcon.Style = SvgIcon;
CloseIcon.displayName = 'CloseIcon';
export default CloseIcon;
