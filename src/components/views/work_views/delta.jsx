import React, { Component } from "react";
import { browserHistory } from 'react-router-dom';
import {MainTemplate, Hero, ChunkyIndent, Chunky} from "../../main_template";
import {Video} from "../../work_template"

import HeroImage from "../../../assets/images/delta/delta-air-lines-hero-image.jpg";

import MclpFullSite from "../../../assets/images/delta/delta-mclp-full-site.jpg";
import MclpMobile from "../../../assets/images/delta/delta-mclp-mobile.jpg";

import AirportMock from "../../../assets/images/delta/airport-mockup-delta-ani.jpg";
import GLOBALS from './../../globals';

export default class Delta extends Component {

  componentDidMount(){
    document.title = "Delta Air Lines — " + GLOBALS.TITLE_BASE
  }


  render() {
   
    return ( 
      <MainTemplate name="code__drawings">

          <Hero hero_image={HeroImage}> 
            <p className="smalls">Project </p>
            <h1>Delta Air Lines </h1>
          </Hero>

          <ChunkyIndent>
            <div className="row">
                <div className="col-md-7">
                  <h3>Various digital media created for Delta Air Lines credit cards </h3> 
                  <hr className="tick"/>
                  <p>I had the opportunity to create animations and a webpage to help promote Delta’s SkyMiles credit cards. Here are some snapshots from various advertising campaigns produced for them. </p>  
                </div>
                <div className="col-md-4 offset-lg-1">
                    <p className="tinys">Creative Directors: Eric Weiss &amp; Zaar Taha
                      <br />
                      Agency: Riley Hayes
                    </p>
                </div>
              </div>
            
          </ChunkyIndent> 

          <Chunky>
            <div className="row">
                <div className="col-md-6 offset-lg-1">
                    <h2>Multi-Card Landing Page</h2>
                </div>
              </div>
              <div className="row some__margin">
                <div className="col-md-7">
                  <img className="wireframe__lighter" src={MclpFullSite} alt=""/>
                </div>
                <div className="col-md-5">
                  <img  src={MclpMobile} alt=""/>
                </div>
              </div>
          </Chunky>

          <div className="container_bg bg_darker">
            <ChunkyIndent>
              <div className="row">
                  <div className="col-md-6">
                      <h2>Interactive Social</h2>
                  </div>
                </div>
                <div className="row some__margin">
                  <div className="col-md-12">
                    <Video mp4="/public/images/delta/facebook-canvas.mp4" webm="/public/images/delta/facebook-canvas.webm"></Video>

                  </div>
                </div>
            </ChunkyIndent>
          </div>

          <Chunky>
              <div className="row">
                  <div className="col-md-6 offset-lg-1">
                      <h2>Animation</h2>
                  </div>
                </div>
                <div className="row some__margin">
                  <div className="col-md-10">
                    <Video  mp4="/public/images/delta/sky-club-airplane-animation.mp4" webm="/public/images/delta/sky-club-airplane-animation.webm"></Video>

                  </div>
                </div>
                <div className="row some__margin">
                  <div className="col-md-6 offset-md-6">
                    <img src={AirportMock} alt=""/>
                  </div>
                </div>
                <div className="row some__margin">
                  <div className="col-md-10 offset-lg-1">
                    <Video  mp4="/public/images/delta/delta-facebook-carousel-animation.mp4" webm="/public/images/delta/delta-facebook-carousel-animation.webm"></Video>
                  </div>
                </div>
            </Chunky>
          
      </MainTemplate>
        
    );
  }
}