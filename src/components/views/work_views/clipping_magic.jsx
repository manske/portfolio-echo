import React, { Component } from "react";
import { browserHistory } from 'react-router-dom';
import {MainTemplate, Hero, ChunkyIndent, Chunky} from "../../main_template";
import {Video} from "../../work_template"
import GLOBALS from './../../globals';

import HeroImage from "../../../assets/images/clipping-magic/clipping-magic-hero-image.jpg";
import Jerry from "../../../assets/images/clipping-magic/jerry.svg";
import Brenda from "../../../assets/images/clipping-magic/brenda.svg";
import Kathy from "../../../assets/images/clipping-magic/kathy.svg";
import OldClipper from "../../../assets/images/clipping-magic/old-clipping-magic.jpg";

import WireDesktop from "../../../assets/images/clipping-magic/wireframe-desktop.svg";
import WireMobile from "../../../assets/images/clipping-magic/wireframe-mobile.svg";
import WireDesktopJp from "../../../assets/images/clipping-magic/wireframe-desktop-japanese.svg";
import WireMobileJp from "../../../assets/images/clipping-magic/wireframe-mobile-japanese.svg";
import WireBody from "../../../assets/images/clipping-magic/wireframe-body-marketing.svg";
import WireFooter from "../../../assets/images/clipping-magic/wireframe-footer.svg";
import WireHasImages from "../../../assets/images/clipping-magic/wireframe-image-homepage.svg";

import Buttons from "../../../assets/images/clipping-magic/design-components.png";
import Colors from "../../../assets/images/clipping-magic/color-scheme.png";
import Icons from "../../../assets/images/clipping-magic/iconography.png";

import FullSite from "../../../assets/images/clipping-magic/clipping-magic-whole.jpg";
import SamplePages from "../../../assets/images/clipping-magic/clipping-magic-sample-pages.jpg";
import Mobile from "../../../assets/images/clipping-magic/clipping-magic-mobile.jpg";


export default class Work extends Component {

  componentDidMount(){
    document.title = "ClippingMagic — " + GLOBALS.TITLE_BASE
  }


  render() {
   
    return ( 
      <MainTemplate name="work">

          <Hero hero_image={HeroImage}> 
            <p className="smalls">Project </p>
            <h1>Clipping Magic </h1>
          </Hero>

         

          <ChunkyIndent>
            <div className="row">
                <div className="col-md-7">
                  <h3>Clipping Magic is an online background removal app. </h3> 
                  <hr className="tick"/>
                  <p>It’s faster and more intuitive to use than Photoshop which makes it a popular choice for many e-commerce businesses. Recently it has encountered more competition from other online providers and needed a redesign that would help reflect and keep its dominate position in the market. This is the website portion of the redesign. My role was as designer and UI developer. I designed the changes, then implemented them.</p>  
                </div>
              </div>
            
          </ChunkyIndent> 

          <Chunky>
            <div className="row">
              <div className="col-md-7 col-lg-6 offset-lg-1">
      
                    <h2>User Profiles</h2>
                    <p>We were able to gather quite a lot of insights on our users, both through customer interviews and though researching the greater e-commerce online community. The e-commerce community has quite a prolific online presence and I was able to find a lot of detailed content where they talked about their experience in general and, if they used it, their experience with Clipping Magic. Here’s a summary of what we found. </p>

              </div>
            </div>

                <div className="row">
                  <div className="col-lg-4 col-md-7">
                    <div className="persona">
                      <img className="persona__img" src={Brenda} alt=""/>
                      <p className="h4">Brenda</p>
                      <p>She has a small business out of her home selling artisan and vintage products. </p>
                      <p>She’s been expanding and wants to make more professional looking product photos She finds learning new software intimidating and wants a quick, easy, and, since many of her products are one-offs, inexpensive way to edit her photos.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-7">
                    <div className="persona">
                      <img className="persona__img"  src={Kathy} alt=""/>
                      <p className="h4">Kathy </p>
                      <p>Is a designer/photographer and needs to produce product images for her company as quickly as possible. </p>
                      <p>Is proficient at using Photoshop, and can always produce a great result but wishes she could speed up the time it takes. </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-7">
                    <div className="persona">
                      <img className="persona__img" src={Jerry} alt=""/>
                      <p className="h4">Jerry </p>
                      <p>Owns and manages an e-commerce business with a high volume of products. </p>
                      <p>Background is primarily on the business side of things and wants his images to be produced fast and look consistent. Has tried outsourcing his image editing and wasn’t happy with the speed or consistency.  </p>
                    </div>
                  </div>
            </div>
          </Chunky> 

          <div className="container_bg">
            <ChunkyIndent>
              <div className="row">
                <div className="col-md-12">
                  <h2>Customer Funnel</h2>
                </div>
              </div>

              <div className="row some__margin">
                <div className="col-md-6">
                  <h5>The customer...</h5>
                  <ol className="list__funnel">
                    <li>Google searches "how to remove image background" or other relevant keywords</li>
                    <li>Lands on our site</li>
                    <li>Uploads and image </li>
                    <li>Tries our product </li>
                    <li>Wants to download and is asked to subscribe</li>
                    <li>Creates an account</li>
                    <li>Purchases a subscription</li>
                  </ol>
                </div>
                <div className="col-md-6">
                  <p className="persona__p">This is the general funnel path from which most of our new customers come from.</p>
                  <p>The redesign focused on the landing page and the overall design of the site excluding the app itself. I therefore focused on how I could directly affect steps 1–3 and 5, prepare users for the later steps. </p>
                </div>
              </div>
            </ChunkyIndent>
          </div>
         

          <ChunkyIndent>
            <div className="row">
              <div className="col-md-12">
                <h2>User Testing</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <p>I set up a sequenced based user test that would guide users from steps 2-5 since those were ones that could be tested on and directly affected by this design.</p>
                <p>From the tests I saw a common problem, it would take users a decent while to understand how it worked. Once they grasped it they commented on how easy and fast it was, but would take them a little while to get there.</p>
                <p>Since there are a multitude of tools to choose from from a Google search, I wanted to make sure users understood how our tool worked so they would quickly see how easy and well it work compared to the others and not get turned away from unnecessary frustration.  </p>
              </div>
              <div className="col-md-5 col-lg-4 offset-lg-1">
                <img src={OldClipper} alt=""/>
                <p className="smalls" >Original Design</p>
              </div>
            </div>
          </ChunkyIndent>

          <div className="container_bg">
            <Chunky> 
              <div className="row ">
                <div className="col-md-10 offset-lg-1">
                  <h2>Wireframes</h2>
                  <div className="row">
                    <div className="col-md-7">
                      <p>To address the issue I found from the user tests, I needed a design that would not only show what the product was, but also show how to use its primary tool. I designed a layout that would use graphics to show off the product, and also help onboard the user. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row some__margin">
                <div className="col-md-8">
                  <p className="smalls">Desktop</p>
                  <img className="wireframe" src={WireDesktop} alt=""/>
                </div>
                <div className="col-md-4">
                  <p className="smalls">Mobile</p>
                  <img className="wireframe" src={WireMobile} alt=""/>
                </div>
                
              </div>

              <div className="row some__margin">
                <div className="col-md-10 offset-lg-1">
                  <div className="row">
                    <div className="col-md-7">
                      <p>There were several design restraints that I had to take into consideration when laying out the site. The biggest constraint of the site was that everything had to be able to be internationalized. Clipping Magic is translated into 8 other languages than English. Each layout had to work with other European languages and Chinese, Korean and Japanese. Our framework had limited ability to allow for alternate styling for specific languages, so one layout had to work all the languages. </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row some__margin">
                <div className="col-md-8">
                  <p className="smalls">Desktop, Japanese Version</p>
                  <img className="wireframe" src={WireDesktopJp} alt=""/>
                </div>
                <div className="col-md-4">
                  <p className="smalls">Mobile, Japanese Version</p>
                  <img className="wireframe" src={WireMobileJp} alt=""/>
                </div>
              </div>
             
            </Chunky>
          </div>

          <Chunky> 
            <div className="row ">
              <div className="col-md-10 offset-lg-1">
                <div className="col-md-7">
                  <h2>Components &amp; Colors</h2>
                  <p>A color and component scheme was chosen to feel friendly, but professional. I wanted new users who landed on our site from a Google search to understand that we are a legitimate tool, but not feel intimidated. </p>
                </div>
              </div>
            </div>
            <div className="row some__margin">
              <div className="col-md-7">
                <img src={Buttons} alt=""/>
              </div>
              <div className="col-md-4">
                <img src={Colors} alt=""/>
              </div>
            </div>
          </Chunky>

          <Chunky> 
            <div className="row ">
              <div className="col-md-10 offset-lg-1">
                <h2>Graphics &amp; Icons</h2>
              </div>
            </div>
            <div className="row some__margin">
              <div className="col-md-6">
                <Video name="hero-video"></Video>
              </div>
              <div className="col-md-6 ">
                <img src={Icons} alt=""/>
              </div>
            </div>
          </Chunky>

          <div className="container_bg">
            <Chunky> 
              <div className="row ">
                <div className="col-md-10 offset-lg-1">
                  <div className="row ">
                  <div className="col-md-7">
                      <h2>Site Design</h2>
                      <p>In the final design, the main graphics serve to show-off the capabilities of the product, as well as being instructional. The main objective here is to get users to upload images and get a general understanding on how the product works. </p>
                      <p>The marketing copy and images are included to either show off features or speak to a need our users have. </p>
                    </div>
                  </div>
                </div>
                
              </div>
              

              <div className="row some__margin">
                <div className="col-md-6">
                  <img className="wireframe__lighter" src={FullSite} alt=""/>
                </div>
                <div className="col-md-6">
                  <img src={Mobile} alt=""/> 
                
                </div>
              </div>
              <div className="row some__margin">
                <div className="col-md-12">
                  <img src={SamplePages} alt=""/>
                </div>
              </div>
            </Chunky>
          </div>


      </MainTemplate>
        
    );
  }
}