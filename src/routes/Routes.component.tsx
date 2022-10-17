import { AppSideNav, PageLayout } from '@components';
import { AuthURL, URLRoot as URL } from '@constants/clientUrls';
import { ToastContainer } from '@medly-components/core';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';
import { history } from '@utils';
import React, { lazy, Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Fallback from './Fallback';

const oktaAuth = new OktaAuth({
    issuer: process.env.AUTH_ISSUER,
    clientId: process.env.APP_CLIENT_ID,
    redirectUri: `${window.location.origin}/login/callback`,
    postLogoutRedirectUri: `${window.location.origin}/login`
});

const Dashboard = lazy(() => import(/* webpackChunkName: "Dashboard" */ /* webpackPrefetch: true */ '@components/Dashboard'));
const DataUpload = lazy(() => import(/* webpackChunkName: "DataUpload" */ /* webpackPrefetch: true */ '@components/DataUpload'));
const Auth = lazy(() => import(/* webpackChunkName: "Auth" */ /* webpackPrefetch: true */ '@components/Auth'));

export const Routes: React.FC = React.memo(() => {
    const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
        console.log(originalUri, _oktaAuth);
        history.replace(toRelativeUrl(originalUri || '/login', window.location.origin));
    };
    return (
        <Router history={history}>
            <ToastContainer id="toast-message" position="top" />
            <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
                <PageLayout>
                    <AppSideNav />
                    <Suspense fallback={<Fallback />}>
                        <Switch>
                            <SecureRoute exact path="/" component={Dashboard} />
                            <SecureRoute path={URL.dataUpload} component={DataUpload} />
                            <Route exact path={AuthURL.login} component={Auth} />
                            <Route path="/login/callback" component={LoginCallback} />
                        </Switch>
                    </Suspense>
                </PageLayout>
            </Security>
        </Router>
    );
});

Routes.displayName = 'Routes';

export default Routes;
