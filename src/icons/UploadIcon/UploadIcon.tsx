import { SvgIcon, SvgIconProps } from '@medly-components/icons';
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import UploadSvg from './uploadIcon.svg';

const UploadIcon: React.FunctionComponent<SvgIconProps> & WithStyle = props => (
    <SvgIcon {...props}>
        <UploadSvg {...props} width="1em" height="1em" />
    </SvgIcon>
);

UploadIcon.Style = SvgIcon;
UploadIcon.displayName = 'UploadIcon';
export default UploadIcon;
