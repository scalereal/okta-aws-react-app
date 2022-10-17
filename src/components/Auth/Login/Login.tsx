import { Container } from '@components/common/SharedStyle';
import { useTextField } from '@effects';
import { Button, Text } from '@medly-components/core';
import { withOktaAuth } from '@okta/okta-react';
import { IOktaContext } from '@okta/okta-react/bundles/types/OktaContext';
import { defaultTheme } from '@theme';
import { validateEmail } from '@utils';
import { FC, FormEvent, memo, useCallback, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { InputBox } from '../InputBox';
import * as Styled from './Login.styled';

const Component: FC<IOktaContext> = memo(({ oktaAuth }) => {
    const [email, setEmail] = useState(''),
        [password] = useTextField(''),
        [isLoading, setIsLoading] = useState(false),
        [errorSummary, setErrorSummary] = useState(''),
        [emailErrorText, setEmailErrorText] = useState(''),
        [isAuthenticated, setIsAuthenticated] = useState(false),
        onEmailChange = useCallback((event: FormEvent<HTMLInputElement>) => {
            setErrorSummary('');
            setEmailErrorText('');
            setEmail(event.currentTarget.value);
        }, []),
        handleSubmit = useCallback(
            (e: FormEvent) => {
                e.preventDefault();
                if (email && validateEmail(email)) {
                    setIsLoading(true);
                    oktaAuth
                        .signInWithCredentials?.({ username: email, password: password.value })
                        .then(transaction => {
                            oktaAuth.signInWithRedirect?.({ sessionToken: transaction.sessionToken });
                            return setIsLoading(true);
                        })
                        .catch(() => {
                            setErrorSummary('Either entered email address or password is incorrect');
                        })
                        .finally(() => setIsLoading(false));
                } else setEmailErrorText('There is an error with this content');
            },
            [oktaAuth, email, password.value]
        );
    useEffect(() => {
        (async function () {
            const authenticated = await oktaAuth.isAuthenticated().then(res => res);
            setIsAuthenticated(authenticated);
        })();
    }, [oktaAuth]);

    return !isAuthenticated ? (
        <Styled.Form onSubmit={handleSubmit} noValidate>
            <InputBox
                fullWidth
                type="email"
                name="email"
                label="EMAIL ADDRESS"
                value={email}
                onChange={onEmailChange}
                errorText={emailErrorText}
                placeholderText="Enter your email"
            />
            <InputBox type="password" name="password" label="PASSWORD" fullWidth {...password} placeholderText="Enter your password" />

            <Styled.ButtonWrapper>
                <Button
                    id="signIn"
                    type="submit"
                    isLoading={isLoading}
                    fullWidth={false}
                    disabled={!email || !password.value || !!emailErrorText}
                >
                    Sign In
                </Button>
            </Styled.ButtonWrapper>
            {errorSummary && (
                <Container
                    px={1}
                    py={0}
                    bg="white"
                    borderRadius={1}
                    borderWidth={0.4}
                    justifyContent="center"
                    color={defaultTheme.colors.red[500]}
                    borderColor={defaultTheme.colors.red[500]}
                >
                    <Text textColor={defaultTheme.colors.red[500]} textVariant="body3" textAlign="center">
                        {errorSummary}
                    </Text>
                </Container>
            )}
        </Styled.Form>
    ) : (
        <Redirect to="/" />
    );
});

Component.displayName = 'Login';

export const Login = withOktaAuth(Component);
