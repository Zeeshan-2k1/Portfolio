import React from "react";
import { Typography } from "@material-ui/core";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  intro: {
    color: "#fff",
    fontSize: "2rem",
    fontFamily: "Anonymous Pro, monospace",
    fontWeight: "700",
  },
  title: {
    color: "green",
    fontSize: "3rem",
    fontFamily: "Anonymous Pro, monospace",
    fontWeight: "700",
  },
  typedContainer: {
    position: "absolute",
    top: "20%",
    textAlign: "center",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "0 auto",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div style={{ marginBottom: "4rem", marginTop: "2rem" }}>
      <Typography className={classes.root}>
        <Typed
          style={{ letterSpacing: "1.5px" }}
          className={classes.intro}
          strings={["Hello, World! I'm"]}
          typeSpeed={10}
          showCursor={false}
        />
        <br />
        <Typed
          style={{ letterSpacing: "1.5px" }}
          className={classes.title}
          strings={["Zeeshan Ashraf"]}
          typeSpeed={10}
          showCursor={false}
        />
      </Typography>
    </div>
  );
}
