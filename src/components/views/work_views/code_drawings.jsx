import React, { Component } from "react";
import { browserHistory } from 'react-router-dom';
import {MainTemplate, Hero, ChunkyIndent, Chunky} from "../../main_template";
import {Video} from "../../work_template"
import GLOBALS from './../../globals';

import HeroImage from "../../../assets/images/code-drawings/code-drawings-hero-image.jpg";

import AllPosters from "../../../assets/images/code-drawings/code-drawings-all-posters.jpg";
import Organic from "../../../assets/images/code-drawings/code-drawings-organic-poster.jpg";
import OrganicCode from "../../../assets/images/code-drawings/code-drawings-organic-code-layout.svg";

export default class CodeDrawings extends Component {

  componentDidMount(){
    document.title = "Code Drawings — " + GLOBALS.TITLE_BASE
  }

  render() {
   
    return ( 
      <MainTemplate name="code__drawings">

          <Hero hero_image={HeroImage}> 
            <p className="smalls">Project </p>
            <h1>Code Drawings </h1>
          </Hero>

          <Chunky>
            <div className="row">
                <div className="col-md-7 col-lg-5 offset-lg-1">
                  <h3>Math is a beautiful thing. </h3> 
                  <hr className="tick"/>
                  <p>A small poster series that tries to bridge the gap between coding and design. Each poster image was drawn by the code below it using the Processing graphical library. </p>
                </div>
              </div>
              <img className="some__margin" src={Organic} alt="Large image of code drawing poster"/>
          </Chunky>

          <div className="bg__xtra__darker container_bg">
            <Chunky>
              <img src={AllPosters} alt="All code drawing posters"/>
            </Chunky>
          </div>

      </MainTemplate>
        
    );
  }
}