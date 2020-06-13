import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import {
    Typography,
    Box
} from "@material-ui/core";

import Navbar from "./Navbar";


const useStyles = makeStyles(theme => ({
    
    info: {
        color: "#ffd460",
        textAlign: "center",
        margin: "2rem auto 1rem"

    },
    line: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid #f07b3f",
            left: "calc(100% - 1px)",
            rigth: "40px",
            top: 0,
            zIndex: -1
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
            
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }

        }
        
    },

    lineItem: {
        padding: "1rem",
        borderBottom: "2px solid ##f07b3f",
        color: "#ffd460",
        position: "relative",
        margin: "1rem, 3rem, 1rem, 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absoloute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#f07b3f #f07b3f transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },

        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
             "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#ffd460"
            },
    
            "&:nth-of-type(2n):before": {
                left: "auto",
                right: "-0.625rem",
                borderColor: "transparent transparent #f07b3f #f07b3f"    
            }
        }

    },

    lineContent: {
        textAlign: "left",
        maxWidth: "11.5rem",
        margin: "0 3rem 0 0.6rem",
        fontSize: "2.5rem",
        backgroundColor: "#f07b3f",
        color: "#fff",
        lineHeight: 1,
        padding: "0.5rem 0 1rem 0.2rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0, auto"
            },

            "&:nth-of-type(2n):before" : {
                display: "none",
        
            }
        }
    },

    heading: {
        color: "#ffd460",
        padding: "3rem 0",
        textTransform: "uppercase"
    },

    subHeading: {
        color: "white",
        padding: "0"
    }
}))

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component="header">
                <Typography className={classes.info} variant= "h2">Zeeshan Ashraf</Typography>
                <Typography className={classes.info} variant="h5">
                    <PhoneIcon /> +91-7004858548 | <span></span>     
                    <MailIcon /> ashraf2k1zeeshan@gmail.com
                </Typography>

            <Box component="div" className={classes.line}>

                <Typography className={classes.lineItem, classes.lineContent} variant="h2">
                    Skills
                </Typography>

                <Box component="div" className={classes.lineItem}>
                    <Typography
                        variant= "h4"
                        align="left"
                        className={classes.subHeading}> Web Dev</Typography>
                    <Typography
                        variant="body1" align="left" style={{color: "#ffd460"}}>
                        Doing web development from past 1 year. Learnt Advanced CSS(3d-effects), Bootstrap,
                        Jquery, React.js, Node.js and MongoDB. Currently doing mini-projects, wondering around
                        with different APIs and free lancing.
                    </Typography>
                </Box>

                <Box component="div" className={classes.lineItem}>
                    <Typography
                            variant= "h4"
                            align="left"
                            className={classes.subHeading}> Coding-C++</Typography>
                    <Typography
                            variant="body1" align="left" style={{color: "#ffd460"}}>
                            Practicing C++ in HackerRank. Still learning STL and DSA. 
                    </Typography>
                </Box>

            </Box>            
        </Box>

        <Box component="div" className={classes.line}>

                <Typography className={classes.lineItem, classes.lineContent} variant="h2">
                    Institution
                </Typography>

                <Box component="div" className={classes.lineItem}>
                    <Typography
                        variant= "h4"
                        align="left"
                        className={classes.subHeading}> Oxford Public School</Typography>
                    <Typography
                        variant="body1" align="left" style={{color: "#ffd460"}}>
                        Started my schooling career from this prestigious Institution. Completed 10th Standard
                        with 10 CGPA. Took PCM in Higher Secondary and passed it with 89.2%.
                    </Typography>
                </Box>

                <Box component="div" className={classes.lineItem}>
                    <Typography
                            variant= "h4"
                            align="left"
                            className={classes.subHeading}> BIT, Sindri</Typography>
                    <Typography
                            variant="body1" align="left" style={{color: "#ffd460"}}>
                            Pursing B.Tech in Electronic and Communication Engineering. 
                    </Typography>
                </Box>

                <Box component="div" className={classes.lineItem}>
                    <Typography
                            variant= "h4"
                            align="left"
                            className={classes.subHeading}> HNCC</Typography>
                    <Typography
                            variant="body1" align="left" style={{color: "#ffd460"}}>
                            1st Year Member. Web Developer. 
                    </Typography>
                </Box>
            </Box>

            <Box component="div" className={classes.line}>

                <Typography className={classes.lineItem, classes.lineContent} variant="h2">
                    Hobby
                </Typography>

                <Box component="div" className={classes.lineItem}>
                    <Typography
                        variant= "h4"
                        align="left"
                        className={classes.subHeading}> PUBG</Typography>
                    <Typography
                        variant="body1" align="left" style={{color: "#ffd460"}}>
                        ACE Player. Member of Unity Clan. K/D - 3.79.
                    </Typography>
                </Box>

                <Box component="div" className={classes.lineItem}>
                    <Typography
                            variant= "h4"
                            align="left"
                            className={classes.subHeading}> Chess</Typography>
                    <Typography
                            variant="body1" align="left" style={{color: "#ffd460"}}>
                            Great fan of Magnus Carlsen and Kasparov. 1835 points in lichess. 
                    </Typography>
                </Box>
            </Box>            
    </>

    )
}

export default Resume;