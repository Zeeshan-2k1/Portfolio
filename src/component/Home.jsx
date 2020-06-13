import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from "react-particles-js";
import {makeStyles} from "@material-ui/core/styles";
import Footer from './Footer';

const useStyles = makeStyles({
    particleCanva: {
        position: "absolute",
        opacity: "0.4"
    }
})

const Home = () => {
    const classes = useStyles();
    return(
        <div>
            <Navbar />
            <Header />
            <Particles
                canvasClassName = {classes.particleCanva}
                params= {{
                    particles: {
                        number: {
                            value:80,
                            density: {
                                enable: true,
                                value_area: 1000
                                }
                            },
                            shape: {
                                type: "circle",
                                stroke: {
                                    width: 1,
                                    color: "#fff"
                                }
                            },
                            size: {
                                value: 8,
                                random: true,
                                anim: {
                                    enable: true,
                                    speed: 10,
                                    size_min: 0.1,
                                    sync: true
                                }
                            }
                        }
                    }
                }
            />
            
        </div>
    );
    
}

export default Home;