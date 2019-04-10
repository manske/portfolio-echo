import React, { Component } from "react";
import {MainTemplate, Hero, ChunkyIndent} from "../main_template";
import {WorkCardsMain} from "../work_template";
import GLOBALS from '../globals';

export default class Work extends Component {

  componentDidMount(){
    document.title = "Work — " + GLOBALS.TITLE_BASE
  }

  render() {
    return (
      <MainTemplate name="work">

          <Hero hasImg={false}> 
            <h1>Work </h1>
            <p>Featured projects </p>
          </Hero> 


          <WorkCardsMain />


      </MainTemplate>
        
    );
  }
}