import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//import Helmet from 'react-helmet';
import './app.styl';


//In-house compoentn
import NoMatch from './components/NoMatch';
import Home from './components/Home';


//import UniversalComponent from './components/UniversalComponent';

/**
 * The `App` component is the entry point for the react app.
 * It is rendered on the client as well as on the server.
 *
 * You can start developing your react app here.
 */
export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={props => <Home {...props} />}
                />
                <Route component={NoMatch} />
            </Switch>


            /*<div>
                <Helmet>
                    <title>App Component | React Universal</title>
                </Helmet>

                <h1>Welcome to React Fiber.</h1>
                <UniversalComponent name="getting-started" />
            </div>*/
        );
    }
}
