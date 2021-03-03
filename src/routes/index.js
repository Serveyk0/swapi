import React from 'react';
import { Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { Films } from '../pages/Films';
import history from '../functions/history';
import { AllPagesData } from '../pages/AllPagesData';
const Routers = () => {
    const href = window.location.href.split("/")[3] === 'swapi' ? '/swapi' : '';
    console.log(href);
    return (
        <Router history={history}>
            <NavLink className="margin-0-auto text-center title" to={href + '/films'}>star wars</NavLink>
            <Switch>
                <Route path={href + '/:path/:id'} component={AllPagesData} exact />
                <Route path={href + '/films'} component={Films} exact />
                <Route path="*" render={() => <Redirect to={href + "/films"} />} />
            </Switch>
        </Router>
    )
}


export default Routers;