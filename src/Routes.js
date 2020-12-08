import { Switch, Route, Redirect } from "react-router-dom";
import LandingPageFunction from './components/landingPage/index'
import Login from './database/pages/loginPage/index'
import HomeCliente from './database/pages/homeCliente/index'
import HomeProfissional from './database/pages/homeProfissional/index'



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