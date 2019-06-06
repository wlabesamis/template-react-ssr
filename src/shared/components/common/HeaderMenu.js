import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import { FormClose, Add } from "grommet-icons";
import { Box, Grid, Layer, Button, Text } from 'grommet';



export default class HeaderMenu extends Component {
    state = {}
    onOpen = () => this.setState({open: true});
    onClose = () => this.setState({open: undefined});

    render() {
        const {open} = this.state;

        return (
            <Grid
                columns={{
                    count: 3,
                    size: "auto"
                }}
            >
                <Button
                    icon={<Add color="brand"/>}
                    label={
                        <Text size="xsmall">
                            Hair Care
                        </Text>
                    }
                    onClick={this.onOpen}
                />
                <Button
                    icon={<Add color="brand"/>}
                    label={
                        <Text size="xsmall">
                            Skin Care
                        </Text>
                    }
                    onClick={this.onOpen}
                />
                <Button
                    icon={<Add color="brand"/>}
                    label={
                        <Text size="xsmall">
                            Household Products
                        </Text>
                    }
                    onClick={this.onOpen}
                />
                {open && (
                    <Layer
                        modal={false}
                        onEsc={this.onClose}
                        onClickOutside={this.onClose}
                    >
                        <Button icon={<FormClose/>} onClick={this.onClose} plain/>
                        <Box height="small" overflow="auto" onClick={this.onClose}>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/posts">Posts</NavLink>
                            <NavLink to="/todos">Todos</NavLink>
                        </Box>
                    </Layer>
                )}
            </Grid>
        )
    }
}
