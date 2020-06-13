import React from 'react'
import Navbar from './Navbar'
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography

} from "@material-ui/core"

import cx from 'clsx';
import {makeStyles} from "@material-ui/core/styles";
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
    mainContainer:{
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: " 5rem auto"
    },
    root: {
        margin: 'auto',
        borderRadius: spacing(2), // 16px
        transition: '0.3s',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        position: 'relative',
        maxWidth: 500,
        marginLeft: 'auto',
        overflow: 'initial',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: spacing(2),
        [breakpoints.up('md')]: {
          flexDirection: 'row',
          paddingTop: spacing(2),
        },
    },
    media: {
        width: '88%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: spacing(-3),
        height: 0,
        paddingBottom: '48%',
        borderRadius: spacing(2),
        backgroundColor: '#fff',
        position: 'relative',
        [breakpoints.up('md')]: {
          width: '100%',
          marginLeft: spacing(-3),
          marginTop: 0,
          transform: 'translateX(-8px)',
        },
        '&:after': {
          content: '" "',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(90deg, rgba(240,123,63,1) 41%, rgba(255,212,96,1) 79%)',
          borderRadius: spacing(2), // 16
          opacity: 0.5,
        },
      },
      content: {
        padding: 24,
      },
      cta: {
        marginTop: 24,
        textTransform: 'initial',
      },
      myStyle: {
          margin: "2rem auto 3rem"
      }
}))

 const Portfolio = () => {
     const styles = useStyles();
    const {
        button: buttonStyles,
        ...contentStyles
    } = useBlogTextInfoContentStyles();
    const shadowStyles = useOverShadowStyles();

    return (
        <Box component = "div" className={styles.mainContainer}>
            <Navbar />
            <Grid container justify = "center" alignItems = "center">
                <Grid item xs = {12} sm={8} md={6} className={styles.myStyle}>
                    <Card className={cx(styles.root, shadowStyles.root)}>
                        <CardMedia
                            className={styles.media}
                            image={
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
                            }
                        />
                        <CardContent>
                            <TextInfoContent
                                classes={contentStyles}
                                overline={'OAuth-project(Node)'}
                                heading={'Secrets APP'}
                                body={
                                  'Its is a secret keeping app. Used Node.js, bycrpt, Oauth and MongoDB.'
                                }
                            />
                            <Button className={buttonStyles} href="https://github.com/Zeeshan-2k1/Auth-Project">View</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs = {12} sm={8} md={6}>
                    <Card className={cx(styles.root, shadowStyles.root)}>
                        <CardMedia
                            className={styles.media}
                            image={
                                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'                                
                            }
                        />
                        <CardContent>
                            <TextInfoContent
                                classes={contentStyles}
                                overline={'To-Do list(React)'}
                                heading={'Keeper APP'}
                                body={
                                  'It is list making web-app. Made using React and material-ui dependecy.'
                                }
                            />
                            <Button className={buttonStyles} href="https://github.com/Zeeshan-2k1/Keeper_App">View</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs = {12} sm={8} md={6}>
                    <Card className={cx(styles.root, shadowStyles.root)}>
                        <CardMedia
                            className={styles.media}
                            image={
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
                            }
                        />
                        <CardContent>
                            <TextInfoContent
                                classes={contentStyles}
                                overline={'Weather-API (node)'}
                                heading={'Weather Forecast'}
                                body={
                                  'This web-app tells us the weather condition of the area.'
                                }
                            />
                            <Button className={buttonStyles} href="https://github.com/Zeeshan-2k1/Weather">View</Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs = {12} sm={8} md={6}>
                    <Card className={cx(styles.root, shadowStyles.root)}>
                        <CardMedia
                            className={styles.media}
                            image={
                            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
                            }
                        />
                        <CardContent>
                            <TextInfoContent
                                classes={contentStyles}
                                overline={'A.I (Face-api)'}
                                heading={'Face-Detection'}
                                body={
                                  'Tells the mood of the person.'
                                }
                            />
                            <Button className={buttonStyles} href ="https://github.com/Zeeshan-2k1/Face-Recognition">View</Button>
                        </CardContent>
                    </Card>
                </Grid>                                              
            </Grid>
        </Box>
    )
}


export default Portfolio;