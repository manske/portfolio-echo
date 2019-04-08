import React, { Component } from "react";

import NuvectraCard from './../assets/images/nuvectra/nuvectra-medical-home-card.jpg';
import RecompressorCard from './../assets/images/recompressor/recompressor-design-card.jpg';
import ClippingMagicCard from './../assets/images/clipping-magic/clippingmagic-design-card.jpg';
import ClippingMagicAppCard from './../assets/images/clipping-magic-app/clippingmagic-app-design-card.jpg';
import ClvCard from './../assets/images/clv/clv-design-card.png';
import CodeDrawingCard from './../assets/images/code-drawings/code-drawing-card.jpg';
import DeltaCard from './../assets/images/delta/delta-card.jpg';


export class Video extends Component {
  render() {
    return (
      <video autoPlay="true" muted="true" loop="true" playsInline="true">
          <source src={this.props.webm} type="video/webm" />
          <source src={this.props.mp4} type="video/mp4" />
      </video>
    )
  }
}

export class WorkCardWrapper extends Component {
  render() {
    return (
      <div className="col-6">
        {this.props.children}
      </div>
    )
  }
}

export class WorkCard extends Component {

  render() {
    return (
      
      <div className="work__card">
        <a href={this.props.link}>
          <div className="work__image__container">
            <div className="work__image">
              <div style={{backgroundImage: 'url(' + this.props.card + ')' }} ></div>
            </div>
          </div>
        <div className="work__label">
          <h3>{this.props.project_name}</h3>
          <p className="sub__label">{this.props.types}</p>
        </div>
        </a> 
      </div>
     
    )
  }
}

export class WorkCardsMain extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <WorkCardWrapper>
            <WorkCard project_name="Clipping Magic" card={ClippingMagicCard} types="Design, UX, Development" link="/work/clipping-magic" />
          </WorkCardWrapper>
          <WorkCardWrapper>
            <WorkCard project_name="Clipping Magic Webapp" card={ClippingMagicAppCard} types="Design, UX/UI, Development" link="/work/clipping-magic-app" />
          </WorkCardWrapper> 
        </div>
        <div className="row">
          <WorkCardWrapper>
            <WorkCard project_name="Recompressor" card={RecompressorCard} types="Design, UI, Development" link="/work/recompressor" />
          </WorkCardWrapper>
          <WorkCardWrapper>
            <WorkCard project_name="Nuvectra Medical" card={NuvectraCard} types="Homepage Redesign" link="/work/nuvectra-medical" />
          </WorkCardWrapper>
        </div>
        <div className="row">
          <WorkCardWrapper>
            <WorkCard project_name="Delta Air Lines" card={DeltaCard} types="Animation, Web Design, UI" link="/work/delta-air-lines" />
          </WorkCardWrapper>
          <WorkCardWrapper>
            <WorkCard project_name="Code Drawings" card={CodeDrawingCard} types="Poster Series" link="/work/code-drawings" />
          </WorkCardWrapper>
        </div>
         {/*
          <WorkCardWrapper>
            <WorkCard project_name="Cedar Lake Ventures" card={ClvCard} types="Identity, Web Design, Development" link="/work/cedar-lake-ventures" />
          </WorkCardWrapper>
        */}
      </div>

      
    )
  }
}


