import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from 'views/NoMatch';

const Home = lazy(() => import('views/Home'));
const Results = lazy(() => import('views/Results'));

const Main = () => (
    <Suspense fallback={null}>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/results" component={Results} />
            <Route component={NoMatch} />
        </Switch>
    </Suspense>
);

export default Main;
