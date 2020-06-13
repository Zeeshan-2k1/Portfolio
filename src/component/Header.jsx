import React from 'react';
import Typed from 'react-typed';
import {makeStyles} from '@material-ui/core/styles';

import {
    typography,
    Avatar,
    Grid,
    Box,
    Typography
} from '@material-ui/core';

import avatar from "../images/Avatar.jpeg";


const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: theme.spacing(1)
    },
    title: {
        color: "#ffd460"

    }, 
    subtitle: {
        color: "#f07b3f",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className = {classes.typedContainer}>
            <Grid container justify= "center">
                <Avatar className = {classes.avatar} src = {avatar} alt = 'Zeeshan'/>
            </Grid>
            <Typography variant = "h3">
                <Typed className = {classes.title} strings={["Zeeshan Ashraf"]} typeSpeed = {30} />
                <br></br>
                </Typography>
                <Typography variant = "h5">
                <Typed className = {classes.subtitle} strings={["B.Tech", "Student", "Coding-C++", "Web Dev", "Web Design"]}
                 typeSpeed = {40} 
                 backSpeed = {60}
                 loop />
            </Typography>
        </Box>
    )
}

export default Header;
