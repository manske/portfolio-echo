import React, { Component } from "react";
import { browserHistory } from 'react-router-dom';
import {MainTemplate, Hero, ChunkyIndent, Chunky} from "../../main_template";
import {Video} from "../../work_template"

import GLOBALS from './../../globals';

import HeroImage from "../../../assets/images/code-drawings/code-drawings-hero-image.jpg";


export default class Clv extends Component {

  componentDidMount(){
    document.title = "Cedar Lake Ventures — " + GLOBALS.TITLE_BASE
  }

  render() {
   
    return ( 
      <MainTemplate name="code__drawings">

          <Hero hero_image={HeroImage}> 
            <p className="smalls">Project </p>
            <h1>Cedar Lake Ventures </h1>
          </Hero>

          <ChunkyIndent>
            <div className="row">
                <div className="col-md-7">
                  <h3>Clipping Magic is an online background removal app. </h3> 
                  <hr className="tick"/>
                  <p>It’s faster and more intuitive to use than Photoshop which makes it a popular choice for many e-commerce businesses. Recently it has encountered more competition from other online providers and needed a redesign that would help reflect and keep its dominate position in the market. </p>  
                </div>
              </div>
            
          </ChunkyIndent> 
          
      </MainTemplate>
        
    );
  }
}