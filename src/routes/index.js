import React from 'react';
import { Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { Films } from '../pages/Films';
import history from '../functions/history';
import { AllPagesData } from '../pages/AllPagesData';
const Routers = () => {
    return (
        <Router history={history}>
            <NavLink className="margin-0-auto text-center title" to='/films'>star wars</NavLink>
            <Switch>
                <Route path='/:path/:id' component={AllPagesData} exact />
                <Route path='/films' component={Films} exact />
                <Route path="*" render={() => <Redirect to="/films" />} />
            </Switch>
        </Router>
    )
}


export default Routers;