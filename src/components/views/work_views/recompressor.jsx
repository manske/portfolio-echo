import React, { Component } from "react";
import { browserHistory } from 'react-router-dom';
import {MainTemplate, Hero, ChunkyIndent, Chunky} from "../../main_template";
import {Video} from "../../work_template"

import GLOBALS from './../../globals';

import HeroImage from "../../../assets/images/recompressor/recompressor-hero-image.png";
import FullSite from "../../../assets/images/recompressor/recompressor-full-site.png";
import Mobile from "../../../assets/images/recompressor/recompressor-mobile.jpg";





  
export default class Recompressor extends Component {

  componentDidMount(){
    document.title = "Recompressor — " + GLOBALS.TITLE_BASE
  }

  render() {
   
    return ( 
      <MainTemplate name="code__drawings">

          <Hero hero_image={HeroImage}> 
            <p className="smalls">Project </p>
            <h1>Recompressor </h1> 
          </Hero>

          <ChunkyIndent>
            <div className="row">
                <div className="col-md-7">
                  <h3>Recompressor compresses images really well. </h3> 
                  <hr className="tick"/>
                  <p>Primarily a content marketing site, its purpose is to have people use it and discover our main image processing products through it. I wanted to keep the design of the tool itself very clean and simple, but catch people's attention through well crafted micro-interactions. My role was as the designer, but I would mockup elements of the UI in CodePen to be referenced by the developer. </p>  
                  <p>My role was as the designer, but I would mockup elements of the UI in CodePen to be referenced by the developer. Check out the live site design <a href="https://recompressor.com" target="_blank">here</a>.</p>
                </div>
              </div>
              <div className="row">
              <div className="col-lg-6 offset-lg-3 col-m-8 offset-lg-2">
                <Video name="loader"></Video>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-m-8 offset-lg-2">
                <Video name="toggler"></Video>

              </div>
            </div> 
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-m-8 offset-lg-2">
                <Video name="paster"></Video>

              </div>
            </div>

            <div className="row some__margin">
              <div className="col-md-10 offset-lg-1 col-m-12">
                <Video name="drag-and-dropper"></Video>
              </div>
            </div>
            
          </ChunkyIndent> 

          <Chunky>
              <div className="row">
                <div className="col-md-6 offset-lg-1">
                  <h2>Site Design </h2> 
                  <p>Clean and simple, the design for Recompressor is meant to set it apart from the cluttered and busy image compressors that already existed. </p>  
                </div>
              </div>
              <div className="row some__margin">
                <div className="col-md-7">
                  <img className="wireframe__lighter" src={FullSite} alt="Full mockup of Recompressor.com desktop"/>
                </div>
                <div className="col-md-5">
                  <img  src={Mobile} alt="Full mockup of Recompressor.com mobile"/>
                </div>
              </div>
          </Chunky>
           
          
      </MainTemplate>
        
    );
  }
}