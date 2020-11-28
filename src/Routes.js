import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPageFunction from './components/landingPage/index'
import Login from './pages/loginPage/index'
import HomeCliente from './pages/homeCliente/index'
import HomeProfissional from './pages/homeProfissional/index'
function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={LandingPageFunction} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/cliente' component={HomeCliente} />
            <Route exact path='/profissional' component={HomeProfissional} />
            <Route exact path='/login' component={Login} />
            <Redirect from='*' to='/' />
        </Switch>
    )
}

export default Routes;