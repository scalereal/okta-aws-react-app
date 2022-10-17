import { FC, memo } from 'react';
import * as Styled from './Auth.styled';
import Login from './Login';

export const Auth: FC = memo(() => {
    return (
        <Styled.Container>
            <Styled.FormWrapper>
                <Login />
            </Styled.FormWrapper>
        </Styled.Container>
    );
});

Auth.displayName = 'Auth';
