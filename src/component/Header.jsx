import React from 'react';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import Particles from 'react-particles-js';
import SocialLinks from './SocialLinks';
import Resume from './Resume';
import Portfolio from './Projects';
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles((theme) => ({
  particleCanva: {
    position: 'absolute',
    opacity: '0.4',
    backgroundColor: '#000',
  },
  intro: {
    color: '#fff',
    fontSize: '4rem',
    fontFamily: 'Pacifico, cursive',
  },
  title: {
    color: '#ffd460',
    fontSize: '6rem',
    fontFamily: 'Pacifico, cursive',
  },
  subtitle: {
    color: '#fff',
    fontSize: '3rem',
    marginBottom: '3rem',
    fontFamily: 'Pacifico, cursive',
  },
  typedContainer: {
    position: 'absolute',
    top: '20%',
    textAlign: 'center',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '0 auto',
  },
  [theme.breakpoints.down('sm')]: {
    typedContainer: {
      top: '3%',
      flexDirection: 'column',
    },
  },
  SocialLinks: {
    marginTop: '5%',
  },
  resume: {
    marginTop: '10rem',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.typedContainer}>
        <Typography className={classes.root}>
          <Typed
            className={classes.intro}
            strings={["Hello, World! I'm"]}
            typeSpeed={10}
            showCursor={false}
          />
          <br />
          <Typed
            className={classes.title}
            strings={['Zeeshan Ashraf']}
            typeSpeed={10}
            showCursor={false}
          />
          <br></br>
          <Typed
            className={classes.subtitle}
            strings={[
              'B.Tech',
              'Student',
              'Open Source',
              'Coding-C++',
              'Web Dev',
              'Web Design',
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </Typography>
        <Zoom top>
          <Box className={classes.SocialLinks}>
            <SocialLinks />
          </Box>
        </Zoom>
        <Box className={classes.resume}>
          <Zoom>
            <Portfolio />
          </Zoom>
          <Resume />
        </Box>
      </Box>
      <Particles
        canvasClassName={classes.particleCanva}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0.5,
                color: '#fff',
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 20,
                size_min: 0.1,
                sync: true,
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default Header;
