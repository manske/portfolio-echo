import React, { Component } from "react";
import { browserHistory } from 'react-router-dom';
import {MainTemplate, Hero, ChunkyIndent, Chunky} from "../../main_template";
import {Video} from "../../work_template"

import GLOBALS from './../../globals';

import HeroImage from "../../../assets/images/nuvectra/nuvectra-hero-image.jpg";
import FullSite from "../../../assets/images/nuvectra/nuvectra-full-site.jpg";
import Mobile from "../../../assets/images/nuvectra/nuvectra-mobile.jpg";
import SiteComponents from "../../../assets/images/nuvectra/nuvectra-site-components.png";



export default class Nuvectra extends Component {

  componentDidMount(){
    document.title = "Nuvectra Medical — " + GLOBALS.TITLE_BASE
  }


  render() {
   
    return ( 
      <MainTemplate name="code__drawings">

          <Hero hero_image={HeroImage}> 
            <p className="smalls">Project </p>
            <h1>Nuvectra Medical</h1>
          </Hero>

            <ChunkyIndent>
              <div className="row">
                <div className="col-md-7">
                  <h3>Nuvectra is an innovative medical device company. </h3> 
                  <hr className="tick"/>
                  <p>They needed a homepage redesign that reflected this and set them apart from other device companies in the market. </p>  
                </div>
                <div className="col-md-4 offset-lg-1">
                    <p className="tinys">Creative Directors: Eric Weiss &amp; Zaar Taha
                      <br />
                      Agency: Riley Hayes
                    </p>
                </div>
              </div>
              
            </ChunkyIndent>

            <div className="container">
              <div className="row">
                <div className="col-md-5 offset-lg-1">
                  <p className="smalls">Components &amp; Colors </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <img src={SiteComponents} alt=""/>
                </div>
              </div>
            </div>
          
            <Chunky>
            <div className="row">
                <div className="col-md-6 offset-lg-1">
                  <h2>Site Design </h2> 
                  <p> The page has two main users in mind, the patients who might need a Nuvectra device/solution and doctors who might be recommending or installing a device. The site had to be sophisticated enough for professionals and simple enough for patients who might not understand medical jargon or might not even be that tech savvy. </p>  
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