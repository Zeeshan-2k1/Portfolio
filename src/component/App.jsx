import React from "react";
import Home from "./Home";
import MyTerminal from "./MyTerminal";
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  particleCanva: {
    position: "absolute",
    opacity: "0.4",
    top: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: "#000",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="container">
      <Home />
      <MyTerminal />
      <Particles
        canvasClassName={classes.particleCanva}
        params={{
          particles: {
            number: {
              value: 140,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0.5,
                color: "#fff",
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
    </div>
  );
}

export default App;
