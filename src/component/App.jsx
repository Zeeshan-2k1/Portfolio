import React, { Component } from 'react';
import {Route} from "react-router-dom";
import Home from './Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from "./Resume";
import Projects from "./Projects";
import About from "./About";

function App() {
  return (
    <div>     
        <CssBaseline />
        <Route exact path="/" component= {Home} />
        <Route path="/resume" component= {Resume} />
        <Route path="/projects" component= {Projects} />
        <Route path="/about" component={About} />
        </div>
  );
} 

       
        
        


export default App;
