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
                </div>
              </div>
              <div className="row">
              <div className="col-lg-6 offset-lg-3 col-m-8 offset-lg-2">
                <Video mp4="/public/images/recompressor/loader.mp4" webm="/public/images/recompressor/loader.webm"></Video>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-m-8 offset-lg-2">
                <Video mp4="/public/images/recompressor/toggler.mp4" webm="/public/images/recompressor/toggler.webm"></Video>

              </div>
            </div> 
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-m-8 offset-lg-2">
                <Video mp4="/public/images/recompressor/paster.mp4" webm="/public/images/recompressor/paster.webm"></Video>

              </div>
            </div>

            <div className="row some__margin">
              <div className="col-md-10 offset-lg-1 col-m-12">
                <Video mp4="/public/images/recompressor/drag-and-dropper.mp4" webm="/public/images/recompressor/drag-and-dropper.webm"></Video>
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
                  <img className="wireframe__lighter" src={FullSite} alt=""/>
                </div>
                <div className="col-md-5">
                  <img  src={Mobile} alt=""/>
                </div>
              </div>
          </Chunky>
           
          
      </MainTemplate>
        
    );
  }
}