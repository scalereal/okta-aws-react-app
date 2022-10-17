import { fetch } from '@utils';
import { FC, lazy, memo, Suspense, useEffect } from 'react';

const Routes = lazy(() => import(/* webpackChunkName: "Routes" */ /* webpackPrefetch: true */ './routes'));

const App: FC = memo(() => {
    useEffect(() => {
        (async function () {
            const { response } = await fetch({
                url: '/appConfig.json',
                method: 'get'
            });
            if (response && response.data) {
                localStorage.setItem('env', response.data.ENV || 'dev');
            }
        })();
    }, []);

    return (
        <Suspense fallback={<span>Signing in ...</span>}>
            <Routes />
        </Suspense>
    );
});

App.displayName = 'App';

export default App;
