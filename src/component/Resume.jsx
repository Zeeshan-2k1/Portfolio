import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import { Typography, Box } from '@material-ui/core';
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles((theme) => ({
  particleCanva: {
    position: 'absolute',
    opacity: '0.4',
    backgroundColor: '#000',
  },
  info: {
    color: '#fff',
    textAlign: 'center',
    margin: '2rem auto 1rem',
  },
  line: {
    position: 'relative',
    padding: '1rem',
    margin: '0 auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid #ffd460',
      left: 'calc(100% - 1px)',
      rigth: '40px',
      top: 0,
      zIndex: -1,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },

  lineItem: {
    padding: '1rem',
    borderBottom: '2px solid #000',
    color: '#fff',
    position: 'relative',
    margin: '1rem, 3rem, 1rem, 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absoloute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: '#fff #fff transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },

    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: '#000',
      },

      '&:nth-of-type(2n):before': {
        left: 'auto',
        right: '-0.625rem',
        borderColor: 'transparent transparent #fff #fff',
      },
    },
  },

  lineContent: {
    textAlign: 'left',
    maxWidth: '11.5rem',
    margin: '0 3rem 0 0.6rem',
    fontSize: '3rem',
    fontWeight: '700',
    backgroundColor: '#000',
    color: '#fff',
    lineHeight: 1,
    padding: '0.5rem 0 1rem 0.2rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0, auto',
      },

      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },

  heading: {
    color: '#fff',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },

  subHeading: {
    color: 'white',
    padding: '0',
  },
  about: {
    color: '#ffd460',
    fontSize: '2rem',
    padding: ' 2rem auto',
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <>
      <Zoom>
        <Box component="header">
          <Typography style={{ fontSize: '3rem', color: '#fff' }}>
            About Me:
          </Typography>
          <Typography className={classes.about}>
            Sophomore at BIT, Sindri. B.Tech in ECE. Web and App Develper.
            <br />
            Learn. Code. Develop.
          </Typography>
          <Box component="div" className={classes.line}>
            <Typography
              className={(classes.lineItem, classes.lineContent)}
              variant="h1"
            >
              Skills
            </Typography>

            <Box component="div" className={classes.lineItem}>
              <Typography
                variant="h4"
                align="left"
                className={classes.subHeading}
              >
                {' '}
                Web Development
              </Typography>
              <Typography
                variant="h5"
                align="left"
                style={{ color: '#ffd460' }}
              >
                <b>Tech Stack:-</b> HTML, CSS, JS, ReactJS, NodeJS, Express,
                MongoDB, Mongoose, AJAX Sass, Jquery, SVGs. DOing web
                development from past 1.5 years. Worked with Firebase, MongoDB
                atlas. Hands-on web designing and proficient in Full-Stack
                Development.
              </Typography>
            </Box>

            <Box component="div" className={classes.lineItem}>
              <Typography
                variant="h4"
                align="left"
                className={classes.subHeading}
              >
                {' '}
                Coding-C++
              </Typography>
              <Typography
                variant="h5"
                align="left"
                style={{ color: '#ffd460' }}
              >
                Hackerrank :- 5.0&#9733;
                <br />
                CodeChef :- 2.0&#9733;
              </Typography>
            </Box>
            <Box component="div" className={classes.lineItem}>
              <Typography
                variant="h4"
                align="left"
                className={classes.subHeading}
              >
                {' '}
                App Development
              </Typography>
              <Typography
                variant="h5"
                align="left"
                style={{ color: '#ffd460' }}
              >
                <b>Tech Stack:-</b> React Native. A beginner in mobile app
                development.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography className={classes.info} variant="h5">
          <PhoneIcon /> +91-7004858548 | <span></span>
          <MailIcon /> ashraf2k1zeeshan@gmail.com <br />
          Kokar, Ranchi-834001
          <br></br>
          Jharkhand
        </Typography>
      </Zoom>
    </>
  );
};

export default Resume;
