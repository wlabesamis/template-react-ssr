import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FormClose, Add } from "grommet-icons";

import { Grommet,
    Box,
    Grid,
    FormDown, Layer, Button, Text } from 'grommet';
import { grommet } from 'grommet/themes';


import Helmet from 'react-helmet';
import './app.styl';


//In-house compoentn
import NoMatch from './components/NoMatch';
import Home from './components/Home';
import Todos from './components/Todos';
import Posts from './components/Posts';
import HeaderMenu from './components/common/HeaderMenu';
import Footer from './components/common/Footer';

const HeaderMenuStyled = styled(HeaderMenu)`
`;

const FooterStyled = styled(Footer)`
`;

//import UniversalComponent from './components/UniversalComponent';

/**
 * The `App` component is the entry point for the react app.
 * It is rendered on the client as well as on the server.
 *
 * You can start developing your react app here.
 */

export default class App extends Component {
    state = {}
    onOpen = () => this.setState({ open: true });
    onClose = () => this.setState({ open: undefined });

    render() {
        const { open } = this.state;

        return (
            <Grommet full theme={grommet}>
                <Helmet>
                    <title>App Component | React Universal</title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                </Helmet>
                <Box fill>
                    <HeaderMenuStyled />
                    <Box flex overflow="auto">
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={props => <Home name="Alligator.io" {...props} />}
                            />
                            <Route
                                exact
                                path="/todos"
                                render={props => <Todos {...props} /> }
                            />
                            <Route
                                exact
                                path="/posts"
                                render={props => <Posts {...props} /> }
                            />
                            <Route component={NoMatch} />
                        </Switch>
                    </Box>
                    <FooterStyled />
                </Box>
            </Grommet>
        );
    }
}
