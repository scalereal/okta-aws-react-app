import { WithStyle } from '@medly-components/utils';
import React from 'react';
import * as Styled from './Header.styled';
import { StaticProps } from './types';

export const Header: React.FC & WithStyle & StaticProps = props => {
    return <Styled.Header {...props} />;
};

Header.displayName = 'Header';
Header.Style = Styled.Header;
Header.LeftSide = Styled.LeftSide;
Header.RightSide = Styled.RightSide;

export default Header;
