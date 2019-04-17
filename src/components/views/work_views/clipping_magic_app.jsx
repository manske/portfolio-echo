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

import DesignSystem from "../../../assets/images/clipping-magic-app/cm-app-design-system.png";

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
                  <p>It’s faster and more intuitive to use than Photoshop which makes it a popular choice for many e-commerce businesses. Recently it has encountered more competition from other online providers and needed a redesign that would help reflect and keep its dominate position in the market. This is the webapp portion of the redesign.  
                  </p>
                  <p>My role was as designer and UI developer. I designed the changes, then implemented them. Check out the live site design <a href="https://clippingmagic.com" target="_blank">here</a> and upload an image to view the webapp. </p>  
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
                <img className="wireframe__lighter" src={DesignMain} alt="Clipping Magic App Desktop Mocked Up"/>  
              </div>
            </div>
            <div className="row some__margin">
              <div className="col-md-8 offset-md-4">
                <img className="wireframe__lighter" src={DesignSub} alt="Clipping Magic App Desktop Mocked Up"/>  
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
                <img src={DesignSubMobile} alt="Clipping Magic App Mobile Mocked Up"/>  
              </div>
              <div className="col-md-6">
                <img src={DesignMainMobile} alt="Clipping Magic App Mobile Mocked Up"/>  
              </div>
            </div>
            <div className="row">
              <div className="col-md-10 offset-lg-1">
                <div className="row some__margin">
                  <div className="col-md-7">
                    <p>We took a very pragmatic view on how we would support mobile. Only a tiny amount of our users used the tool on a mobile device. Since we wera a very small business, our resources would be best focused primarily on the desktop version. This made business sense for us. But we still wanted to support mobile, so we went for a desktop first approach. Everything that could be done on the desktop version could be done on mobile, but we didn’t spend the time to truly optimize the experience for mobile. </p>
                    <p>For the mobile design, I took advantage of the horizontal scrolling paradigm. This allowed me to reuse the desktop elements for mobile without having to worry about doing any other major restyling or reformatting.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row some__margin">
              <div className="col-md-12 col-lg-10 offset-lg-1">
                <Video name="mobile-ui-example"></Video>
              </div>
            </div>
          </Chunky> 

          <Chunky>
            <div className="row">
                <div className="col-md-10 offset-lg-1">
                  <div className="row">
                    <div className="col-md-7">
                      <h2>Design System</h2>
                      <p>I created a design system for the app that would be flexible, compact, and work on a variety of screens. </p>
                    </div>
                  </div>
                </div>
              </div>
            <div className="row">
              <div className="col-md-12">
                <img src={DesignSystem} alt="Design system components for Clipping Magic App"/>  
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
                    <img src={Iconography} alt="Clipping Magic App Iconography"/>
                </div>
                <div className="col-md-10 offset-md-1">
                    <img src={IconographyPixels} alt="Clipping Magic App Iconography on pixel grid"/>
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
                  <Video name="saver"></Video>
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
                <img className="wireframe__lighter" src={Onboarder} alt="App onboarder screenshot"/>  
              </div>
            </div>
            <div className="row some__margin">
              <div className="col-md-12">
                <img  src={OnboarderUserFlow} alt="User flow for app onboarder"/>  
              </div>
            </div>
          </Chunky> 

      </MainTemplate>
        
    );
  }
}