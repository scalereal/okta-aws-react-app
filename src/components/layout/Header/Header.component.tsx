import UserProfile from '@components/common/UserProfile';
import { FC } from 'react';
import { StyledHeader } from './Header.styled';

export const Header: FC = () => {
    return (
        <StyledHeader>
            <UserProfile />
        </StyledHeader>
    );
};

Header.displayName = 'Header';

export default Header;
