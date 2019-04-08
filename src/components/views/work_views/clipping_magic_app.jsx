import React, { Component } from "react";
import { browserHistory } from 'react-router-dom';
import {MainTemplate, Hero, ChunkyIndent, Chunky} from "../../main_template";
import {Video} from "../../work_template"
import GLOBALS from './../../globals';

import HeroImage from "../../../assets/images/clipping-magic-app/clipping-magic-app-hero-image.png";

import DesignMain from "../../../assets/images/clipping-magic-app/cm-app-design-main.png";
import DesignMainMobile from "../../../assets/images/clipping-magic-app/cm-app-design-main-mobile.jpg";
import DesignSub from "../../../assets/images/clipping-magic-app/cm-app-design-sub-app.png";
import DesignSubMobile from "../../../assets/images/clipping-magic-app/cm-app-design-sub-app-mobile.jpg";

import Onboarder from "../../../assets/images/clipping-magic-app/cm-onboarder-design.jpg";
import OnboarderUserFlow from "../../../assets/images/clipping-magic-app/user-flow-org.svg";

import Iconography from "../../../assets/images/clipping-magic-app/iconography-samples.png";
import IconographyPixels from "../../../assets/images/clipping-magic-app/pixel-perfect-iconography.png";




export default class Work extends Component {

  componentDidMount(){
    document.title = "ClippingMagic Webapp — " + GLOBALS.TITLE_BASE
  }


  render() {
   
    return ( 
      <MainTemplate name="work">
 
          <Hero hero_image={HeroImage}> 
            <p className="smalls">Project </p>
            <h1>Clipping Magic Webapp</h1>
          </Hero>

        

          <ChunkyIndent>
            <div className="row">
                <div className="col-md-7">
                  <h3>Clipping Magic is an online background removal app. </h3> 
                  <hr className="tick"/>
                  <p>It’s faster and more intuitive to use than Photoshop which makes it a popular choice for many e-commerce businesses. Recently it has encountered more competition from other online providers and needed a redesign that would help reflect and keep its dominate position in the market. This is the webapp portion of the redesign. My role was as designer and UI developer. I designed the changes, then implemented them.</p>  
                </div>
              </div>
            
          </ChunkyIndent> 

          <Chunky>
            <div className="row">
              <div className="col-md-10 offset-lg-1">
                <div className="row">
                  <div className="col-md-7">
                    <h2>Design Update</h2>
                    <p>The redesign for the desktop version was primarily a styling update. Things mostly kept the same structure, but got a new veneer. Small UX updates were made where appropriate. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row some__margin">
              <div className="col-md-8">
                <img className="wireframe__lighter" src={DesignMain} alt=""/>  
              </div>
            </div>
            <div className="row some__margin">
              <div className="col-md-8 offset-md-4">
                <img className="wireframe__lighter" src={DesignSub} alt=""/>  
              </div>
            </div>
          </Chunky>
          <Chunky>
            <div className="row">
              <div className="col-md-10 offset-lg-1">
                <div className="row">
                  <div className="col-md-7">
                    <h3>Making it more responsive </h3>
                    <p>The previous implimentation had several bugs when viewed on mobile screens. Thus the redesign to the responsiveness of the webapp had structural changes to it, as well as the visual changes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <img src={DesignSubMobile} alt=""/>  
              </div>
              <div className="col-md-6">
                <img src={DesignMainMobile} alt=""/>  
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 offset-lg-1">
                <div className="row some__margin">
                  <div className="col-md-7">
                    <p>We took a very pragmatic view on how we would support mobile. A tiny amount of our users used the tool on a mobile device. Since we are a very small team, our resources would be best focused primarily on the desktop version. This made business sense. But we still wanted to support mobile, so we went for a desktop first approach. Everything that could be done on the desktop version could be done on mobile, but we didn’t spend the time to truly optimize the experience for mobile. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row some__margin">
              <div className="col-md-12 col-lg-10 offset-lg-1">
                <Video mp4="/public/images/clipping-magic-app/mobile-ui-example.mp4" webm="/public/images/clipping-magic-app/mobile-ui-example.webm"></Video>
              </div>
            </div>
          </Chunky> 

          <Chunky> 
              <div className="row">
                <div className="col-md-10 offset-lg-1">
                  <div className="row">
                    <div className="col-md-7">
                      <h2>Iconography</h2>
                      <p>Each icon used on the webapp was optimized to be pixel perfect. This was to ensure they were comprehensible and looked great on any pixel density screen. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row some__margin">
                <div className="col-md-10 offset-md-1">
                    <img src={Iconography} alt=""/>
                </div>
                <div className="col-md-10 offset-md-1">
                    <img src={IconographyPixels} alt=""/>
                </div>
              </div>
              <div className="row some__margin margin__collapse__50">
                <div className="col-md-10 offset-lg-1">
                  <div className="row">
                    <div className="col-md-7">
                      <p>I also added in some fun little micro interactions where I could. When I updated the save icon paradigm, I also added in a little micro interaction. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Video mp4="/public/images/clipping-magic-app/saver.mp4" webm="/public/images/clipping-magic-app/saver.webm"></Video>
                </div>
              </div>
          </Chunky> 
          

          <Chunky>
            <div className="row">
              <div className="col-md-10 offset-lg-1">
                <div className="row">
                  <div className="col-md-7">
                    <h2>Onboarding UX</h2>
                    <p>We decided to switch the onboarding paradigm from an intro video to a paradigm that walked new users through the basics of the tool. It was kept as short and simple as possible, but would ensure that all new users would understand the basics. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row some__margin">
              <div className="col-md-10 offset-md-1">
                <img className="wireframe__lighter" src={Onboarder} alt=""/>  
              </div>
            </div>
            <div className="row some__margin">
              <div className="col-md-12">
                <img  src={OnboarderUserFlow} alt=""/>  
              </div>
            </div>
          </Chunky> 

      </MainTemplate>
        
    );
  }
}