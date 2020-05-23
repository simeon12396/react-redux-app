import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from '../../layouts/MainLayout/MainLayout';

const Login = lazy(() => import('../../auth/Login/Login'));
const Homepage = lazy(() => import('../../../pages/Homepage'));
const SignUp = lazy(() => import('../../auth/SignUp/SignUp'));

const Routing = () => {
    return(
        <Router>
            <MainLayout>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Homepage} />

                        <Route exact path="/login" component={Login} />

                        <Route exact path="/sign-up" component={SignUp} />
                    </Switch>
                </Suspense>
            </MainLayout>
        </Router>
    );
};

export default Routing;