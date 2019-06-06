import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import { FormClose, Add } from "grommet-icons";
import { Box, Grid, Layer, Button, Text } from 'grommet';


export default class Footer extends Component {
    render(){
        return(
            <Box flex={false} background="dark-1" pad="small">
                footer
            </Box>
        )
    }
}
