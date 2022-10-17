import { Box, Button, Popover } from '@medly-components/core';
import { primaryTheme } from '@theme/primary';
import { getNameInitials } from '@utils';
import { FC, memo, useContext, useMemo } from 'react';
import { Props } from './types';
import { Overlay, Popup, PopupContent, StyledAvatar, UserInfo, UserTitle } from './UserProfilePopup.styled';

export const UserProfilePopup: FC<Props> = memo(({ signOut, userName }) => {
    const userNameInitials = useMemo(() => getNameInitials(userName), [userName]),
        [isPopoverVisible] = useContext(Popover.Context);

    return (
        <>
            {isPopoverVisible && <Overlay />}
            <StyledAvatar
                hoverBgColor={primaryTheme.colors.purple[400]}
                hoverTextColor={primaryTheme.colors.white}
                bgColor={isPopoverVisible ? primaryTheme.colors.purple[500] : ''}
                textColor={isPopoverVisible ? primaryTheme.colors.white : ''}
            >
                {userNameInitials}
            </StyledAvatar>
            <Popup placement="bottom" id="side-nav-popover">
                <PopupContent>
                    <UserInfo>
                        <StyledAvatar
                            leftMargin="0"
                            showSeparator={false}
                            bgColor={primaryTheme.colors.purple[500]}
                            textColor={primaryTheme.colors.white}
                            id="styledAvatar"
                        >
                            {userNameInitials}
                        </StyledAvatar>
                        <UserTitle textVariant="h5" uppercase>
                            {userName}
                        </UserTitle>
                    </UserInfo>
                    <Box>
                        <Button variant="solid" id="signOut" onClick={signOut} fullWidth>
                            Sign Out
                        </Button>
                    </Box>
                </PopupContent>
            </Popup>
        </>
    );
});

UserProfilePopup.displayName = 'UserProfilePopup';
