import React, {useState} from 'react';
import {Link} from  "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MobilRight from '@material-ui/core/Drawer';
import {
    AppBar,
    ListItem,
    Toolbar,
    IconButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    
} from "@material-ui/core";
import Footer from './Footer';

import avatar from "../images/Avatar.jpeg";

import {
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import TocIcon from '@material-ui/icons/Toc';

//CSS styles

const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: "100%",
        height: "100%",
        background: "#f07b3f",
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    ListItemText: {
        color: "#ffd460",
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Projects",
        listPath: "/projects"
    },
    {
        listIcon: <ContactMail />,
        listText: "About Me",
        listPath: "/about"
    },
    
]
const Navbar = () => {
    const [state, setState] = useState({
        left: false
    });

    const toggleSlider = ((slider, open) => () => {
        setState({...state, [slider]: open });
    });

    const classes = useStyles();

    const sideList = slider => (
        <Box onClick={toggleSlider("left", false)} className = {classes.menuSliderContainer} component = "div">
            <Avatar className = {classes.avatar} src={avatar} alt="Zeeshan" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key = {key} component={Link} to= {lsItem.listPath}>
                        <ListItemIcon className = {classes.ListItemText}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className = {classes.ListItemText}>
                            <Typography variant="h5">
                                {lsItem.listText}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <Box component="nav">
            <AppBar position = "static" style={{background: "#212121"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("left", true)}>
                        <TocIcon style={{ color: "#f07b3f"}} />                   
                    </IconButton>
                    <Typography variant="h5" style={{color: "#ffd460"}}>
                        Portfolio
                    </Typography>
                    <MobilRight
                        open={state.left}
                        anchor="left"
                        >
                        {sideList("left")}
                        <Footer />
                    </MobilRight> 
                </Toolbar>
            </AppBar>
            
        </Box>
    )
                
}

export default Navbar;
