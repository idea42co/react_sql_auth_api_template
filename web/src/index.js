import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

import LandingPage from './pages/landing';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();