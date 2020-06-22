import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from '../../layouts/MainLayout/MainLayout';
import LoadingIndicator from '../../common/ProgressIndicator/ProgressIndicator';

const Login = lazy(() => import('../../auth/Login/Login'));
const Homepage = lazy(() => import('../../../pages/Homepage'));
const SignUp = lazy(() => import('../../auth/SignUp/SignUp'));

const Routing = () => (
    <Router>
        <MainLayout>
            <Suspense fallback={<LoadingIndicator circleIndicator className="Progress-Indicator__circle" />}>
                <Switch>
                    <Route exact path="/" component={Homepage} />

                    <Route exact path="/login" component={Login} />

                    <Route exact path="/sign-up" component={SignUp} />
                </Switch>
            </Suspense>
        </MainLayout>
    </Router>
);

export default Routing;