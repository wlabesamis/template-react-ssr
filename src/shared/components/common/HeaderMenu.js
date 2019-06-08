import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {FormClose, Add, FormDown} from "grommet-icons";
import { Box, Grid, Layer, Button, Text } from 'grommet';



export default class HeaderMenu extends Component {
    state = {}
    onOpen = () => {
        this.setState({open: true})
    };

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
                    icon={<FormDown color="brand"/>}
                    label={
                        <Text size="xsmall">
                            Hair Care
                        </Text>
                    }
                    onClick={this.onOpen}
                />
                <Button
                    icon={<FormDown color="brand"/>}
                    label={
                        <Text size="xsmall">
                            Skin Care
                        </Text>
                    }
                    onClick={this.onOpen}
                />
                <Button
                    icon={<FormDown color="brand"/>}
                    label={
                        <Text size="xsmall">
                            Household Products
                        </Text>
                    }
                    onClick={this.onOpen}
                />
                {open && (

                    <Layer
                        responsive={false}
                        full="horizontal"
                        position="top"
                        animate={false}
                        modal={false}
                        onEsc={this.onClose}
                        onClickOutside={this.onClose}
                        margin={{
                            "top": "40px",
                            "left": "10px",
                            "right": "10px"
                        }}
                    >
                        <Box
                            border="solid"
                            background={{ color: "white", opacity: false }}
                            fill
                            ref={el => this.containerLine = el}
                        >
                            <Button icon={<FormClose/>} onClick={this.onClose} plain/>
                            <Box height="small" overflow="auto" onClick={this.onClose}>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/posts">Posts</NavLink>
                                <NavLink to="/todos">Todos</NavLink>
                            </Box>
                        </Box>
                    </Layer>
                )}
            </Grid>
        )
    }
}
