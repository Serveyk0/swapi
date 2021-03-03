import React from 'react';
import { Route, Switch, Redirect, NavLink, HashRouter } from 'react-router-dom';
import { Films } from '../pages/Films';
import history from '../functions/history';
import { BrowserRouter as Router } from 'react-router-dom'
import { AllPagesData } from '../pages/AllPagesData';
const Routers = () => {
    const href = window.location.href.split("/")[3] === "#";
    console.log(href);
    return (
        <HashRouter history={history}>
            <NavLink className="margin-0-auto text-center title" to={(href ? '/swapi' : "") + '/films'}>star wars</NavLink>
            <Switch>
                <Route path={(href ? '/swapi' : "") + '/:path/:id'} component={AllPagesData} exact />
                <Route path={(href ? '/swapi' : "") + '/films'} component={Films} exact />
                <Route path="*" render={() => <Redirect to={(href ? '/swapi' : "") + "/films"} />} />
            </Switch>
        </HashRouter>
    )
}


export default Routers;