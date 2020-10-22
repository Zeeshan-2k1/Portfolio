import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import { Instagram, GitHub, LinkedIn } from '@material-ui/icons';

const newStyles = makeStyles((theme) => ({
  icon: {
    color: '#ffd460',
    fontSize: '4rem',
    textAlign: 'center',
    display: 'inline-flex',
  },
  buttons: {
    textAlign: 'center',
  },
}));

const SocialLinks = () => {
  const style = newStyles();
  return (
    <div>
      <Box component="div" className={style.buttons}>
        <Button href="https://www.facebook.com/profile.php?id=100005133649365">
          <Facebook className={style.icon} />
        </Button>
        <Button href="https://twitter.com/Zeeshan2k1">
          <Twitter className={style.icon} />
        </Button>
        <Button href="https://www.linkedin.com/in/zeeshan-ashraf-38897b1a6">
          <LinkedIn className={style.icon} />
        </Button>
        <Button href="https://github.com/Zeeshan-2k1">
          <GitHub className={style.icon} />
        </Button>
        <Button href="https://www.instagram.com/__zeero_cool__/">
          <Instagram className={style.icon} />
        </Button>
      </Box>
    </div>
  );
};

export default SocialLinks;
