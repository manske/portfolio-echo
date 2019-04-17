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
                    <p>The Multi-Card Landing Page was created to showcase each of Delta’s SkyMiles Credit Cards, with the intent of upselling customers on a card with even more benefits. Since the comparison of cards was such an important element, we had to create a paradigm that allowed users to compare each card even on smaller sized mobile screens. We ultimately settled on a slide through sticky navigation that would toggle through each comparison option.</p>
                </div>
              </div>
              <div className="row some__margin">
                <div className="col-md-7">
                  <img className="wireframe__lighter" src={MclpFullSite} alt="Mockup of desktop site"/>
                </div>
                <div className="col-md-5">
                  <img  src={MclpMobile} alt="Mockup of mobile site"/>
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
                    <Video name="facebook-canvas"></Video>

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
                    <Video  name="sky-club-airplane-animation"></Video>

                  </div>
                </div>
                <div className="row some__margin">
                  <div className="col-md-6 offset-md-6">
                    <img src={AirportMock} alt="Airport mockup of Delta animation"/>
                  </div>
                </div>
                <div className="row some__margin">
                  <div className="col-md-10 offset-lg-1">
                    <Video  name="delta-facebook-carousel-animation"></Video>
                  </div>
                </div>
            </Chunky>
          
      </MainTemplate>
        
    );
  }
}