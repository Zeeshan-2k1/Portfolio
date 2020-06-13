import React from 'react'
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import { StylesContext } from '@material-ui/styles';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from "@material-ui/icons/Twitter"
import { Instagram, GitHub } from '@material-ui/icons';

const newStyles = makeStyles(theme=> ({
    title: {
        fontSize: "3.5rem",
        textAlign: "center",
        marginBottom: "3%"
        
    },
    root: {
        margin: "10% 3% 3% 5%",
        color: "#ffd460",
        textAlign: "left",
        fontSize: "3.5rem"
    },

    icon: {
        color: "#f07b3f",
        fontSize: "4rem",
        textAlign: "center",
        display: "inline-flex"

    },
    buttons: {
        textAlign: "center"
    }
   

    }
))

const About = () => {

    const style = newStyles()
    
    return (
        <Box component="div" >
            <Navbar />
            <Grid container justify="center">
                <Box component="div" className={style.root}>
                    <Typography variant="h2" className={style.title}>
                        Zeeshan Ashraf
                    </Typography>
                    <Typography >
                        Mb: +91-7004858548 
                    </Typography>
                    <Typography >
                        Email: ashraf2k1zeeshan@gmail.com
                    </Typography>
                    <br></br>
                    <Typography>
                        Kokar, Ranchi-834001
                        <br></br>
                        Jharkhand
                    </Typography>
                    <br></br>
                    <Typography>
                        Student of BIT, Sindri.
                    </Typography>
                    <Typography >
                        Electronics and Communication Engineering.
                    </Typography>
                    <Typography >
                        Member of Hacking And Coding Club, BIT-Sindri. 
                    </Typography>
                </Box>
            </Grid>
            <Box component="div" className={style.buttons}>
                <Button href="https://www.facebook.com/profile.php?id=100005133649365">
                    <Facebook className={style.icon} />
                </Button>
                <Button href="https://twitter.com/Zeeshan2k1">
                    <Twitter className={style.icon} />
                </Button> 
                <Button href="https://www.instagram.com/__zeero_cool__/">
                    <Instagram className={style.icon} />
                </Button> 
                <Button href="https://github.com/Zeeshan-2k1">
                    <GitHub className={style.icon} />
                </Button>     
            </Box>

        </Box>
    )
}

export default About;
