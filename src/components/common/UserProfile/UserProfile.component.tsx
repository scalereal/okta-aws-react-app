import { useOktaAuth } from '@okta/okta-react';
import React, { useCallback, useEffect, useState } from 'react';
import { Props } from './types';
import { UserProfilePopover } from './UserProfile.styled';
import { UserProfilePopup } from './UserProfilePopup/UserProfilePopup.component';

export const UserProfile: React.FunctionComponent<Props> = React.memo(({ showSeparator = false }) => {
    const { authState, oktaAuth } = useOktaAuth(),
        [userInfo, setUserInfo] = useState<any>({}),
        handleSignOut = useCallback(() => oktaAuth.signOut?.(), [oktaAuth]);
    useEffect(() => {
        if (!authState || !authState.isAuthenticated) setUserInfo({});
        else setUserInfo(authState?.idToken?.claims || {});
    }, [authState, oktaAuth]);

    return (
        <UserProfilePopover interactionType="click" showSeparator={showSeparator}>
            <UserProfilePopup signOut={handleSignOut} userName={userInfo?.name || ''} showSeparator={showSeparator} />
        </UserProfilePopover>
    );
});
UserProfile.displayName = 'UserProfile';
UserProfile.defaultProps = {
    showSeparator: false
};
