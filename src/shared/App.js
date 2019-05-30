import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Helmet from 'react-helmet';
import './app.styl';


//In-house compoentn
import NoMatch from './components/NoMatch';
import Home from './components/Home';
import Todos from './components/Todos';
import Posts from './components/Posts';


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
            <div>
                <Helmet>
                    <title>App Component | React Universal</title>
                </Helmet>

                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/todos">Todos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts">Posts</NavLink>
                    </li>
                </ul>

                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => <Home name="Alligator.io" {...props} />}
                    />
                    <Route path="/todos" component={Todos} />
                    <Route path="/posts" component={Posts} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        );
    }
}
