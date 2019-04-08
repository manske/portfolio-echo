import React, { Component } from "react";
import { browserHistory } from 'react-router-dom';
import {MainTemplate, Navbar, ChunkyIndent} from "../main_template";
import {WorkCardsMain} from "../work_template";
import Balls from './../balls';
import GLOBALS from '../globals';

export default class Home extends Component {

  componentDidMount(){
    document.title = GLOBALS.TITLE_BASE
  }
  
  render() {
    return (
      <MainTemplate name="home">

          <div id="hero">
            <div className="hero__home__backdrop"></div>
            <Balls />
          </div>

          <p>
          </p>
          <ChunkyIndent>
            <p className="smalls">UX/UI Designer &amp; Developer</p>
            <p className="larges">I build digital products and interfaces that spark joy. </p>
          </ChunkyIndent>

          <div className="chunky__block">
            <WorkCardsMain></WorkCardsMain>
          </div>
        
      </MainTemplate>
        
    );
  }
}