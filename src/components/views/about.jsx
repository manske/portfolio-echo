import React, { Component } from "react";
import { browserHistory } from 'react-router-dom';
import {MainTemplate, ChunkyIndent, Hero} from "../main_template";

import Me from './../../assets/images/about/nathan-manske.jpg';

import GLOBALS from '../globals'; 

export default class About extends Component {

  componentDidMount(){
    document.title = "About — " + GLOBALS.TITLE_BASE
  }

  render() {
    return (
      <MainTemplate name="about">
         <Hero> 
            <h1>About</h1>
            <p>Let's break the ice </p>
          </Hero>
          <div className="container_bg">
            <ChunkyIndent>
                <div className="row some__margin">
                  <div className="col-md-12">
                    <p className="larges">I'm a designer who sometimes develops. I love building digital products and interfaces that spark joy. </p>
                    <p>I also have an <a href="https://www.instagram.com/manskee/" target="_blank">instagram</a>.</p>
                  </div>
                </div>
            </ChunkyIndent>
          </div>

         
         
      </MainTemplate>
    );
  }
}