import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {BottomNavigation, BottomNavigationAction, Typography} from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter"
import Github from "@material-ui/icons/GitHub"
import Insta from "@material-ui/icons/Instagram"

const newStyle = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },

        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill:"tomato",
                fontSize: "3 rem"
            }
        }
    }

})

const Footer = () => {
    const style = newStyle();
    return (
        <>
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <Typography variant="h3" className={style.root} style={{color: "tomato"}}>
                Made with 🧡.
            </Typography>
        </BottomNavigation>
        </>
    )
}

export default Footer;
