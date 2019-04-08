import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import InlineSVG from 'svg-inline-react';


const svgLogo = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 88.9 19.8" style="enable-background:new 0 0 88.9 19.8;" xml:space="preserve">
<title>Nathan Manske</title>
<path class="st0" d="M10.3,7.7c0,0.9,0.2,2.1,0.3,2.8h-0.1c-0.4-0.9-0.6-1.4-1-2.1L7,3.9H3.2v12H7v-4.1c0-0.5-0.1-1.6-0.2-2.2h0.1
 c0.2,0.5,0.5,1.1,0.7,1.6l2.7,4.7H14v-12h-3.8V7.7z"/>
<path class="st0" d="M16.7,12.1c-0.6,0-1.2,0.2-1.6,0.7c-0.3,0.4-0.5,0.9-0.5,1.3c0,0.5,0.2,1,0.5,1.3c0.4,0.5,1.1,0.7,1.6,0.7
 c0.6,0,1.2-0.2,1.6-0.7c0.3-0.4,0.5-0.9,0.5-1.3c0-0.4-0.2-1-0.5-1.3C17.9,12.4,17.3,12.1,16.7,12.1z"/>
<path class="st0" d="M54.2,7.7c0,0.9,0.2,2.1,0.3,2.8h-0.1c-0.4-0.9-0.6-1.4-1-2.1l-2.5-4.5h-3.7v11.4L43.5,3.9h-4.3l-3.3,10.6
 L34.3,3.9h-4l-1.3,4.9c-0.1,0.5-0.2,0.9-0.2,1.4h-0.1c0-0.2-0.1-0.8-0.2-1.4l-1.3-4.9h-4l-1.8,12h3.8l0.5-5.6c0-0.2,0-0.7,0-0.9
 h0.1c0,0.5,0.1,0.9,0.2,1.3l1.4,5.3h2.3l1.6-5.6c0.1-0.2,0.2-0.7,0.2-1h0.1c0,0.5,0,0.8,0.1,1.2l0.5,5.4h3.1h0.6h3.5l0.3-1.5h3
 l0.4,1.5h4h0.2h3.5v-4.1c0-0.5-0.1-1.6-0.2-2.2h0.1c0.2,0.5,0.5,1.1,0.7,1.6l2.7,4.7H58v-12h-3.8V7.7z M40.6,11.6l0.5-2.3
 c0.1-0.4,0.2-0.8,0.2-1.4h0.1c0,0.4,0.1,0.9,0.2,1.4l0.5,2.3H40.6z"/>
<path class="st0" d="M64.5,8.4l-1.2-0.3c-0.6-0.1-0.6-0.4-0.6-0.6c0-0.2,0-0.3,0.2-0.4c0.2-0.2,0.5-0.2,0.7-0.2
 c0.9,0,1.7,0.5,2.2,0.9l1.1-3.1c-1.3-0.9-2.4-1-3.3-1c-1.7,0-2.9,0.6-3.8,1.5c-0.7,0.8-1.1,1.7-1.1,2.9c0,0.9,0.2,1.6,0.8,2.2
 c0.6,0.7,1.3,0.9,1.9,1l1,0.2c0.4,0.1,0.6,0.1,0.7,0.3c0.1,0.1,0.1,0.3,0.1,0.4c0,0.2,0,0.4-0.2,0.5c-0.1,0.1-0.3,0.2-0.8,0.2
 c-1,0-1.8-0.5-2.2-0.9l-0.4-0.4l-1.2,3.4l0.4,0.2c0.9,0.4,2,0.9,3.7,0.9c2,0,3.2-0.8,3.8-1.5c0.7-0.8,1-1.8,1-2.8
 c0-0.7-0.1-1.6-0.8-2.4C66.1,9.1,65.5,8.7,64.5,8.4z"/>
<path class="st0" d="M82.3,12.6v-1.2h3.1V8.3h-3.1V7.2h3.4V3.9h-7.3v11.9l-3.6-6l3.4-5.9h-4.2l-1.9,3.9c-0.2,0.4-0.3,0.7-0.6,1.4
 h-0.1c0.1-0.5,0.1-1,0.1-1.5V3.9h-3.8v12h3.8V12c0-0.4,0-0.7-0.1-1.1h0.1c0.1,0.4,0.3,0.8,0.5,1.2l2,3.9h4.5h0.1h7.3v-3.3H82.3z"/>
</svg>
`;

export class Navbar extends Component {
  render() {
    return (
      <div className="nav__container ">
      <nav className="container">
        <div >
          <a className="logo__name" alt="Nathan Manske" href="/"><InlineSVG src={svgLogo} /><span style={{position: "absolute", width: 0, height: 0, overflow: "hidden"}}>Nathan Manske</span></a>
        </div>
        <div>
          <ul className="nav__links">
            <li>
              <NavLink activeClassName='active' className="smalls nav__link" to="/work">Work</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' className="smalls nav__link" to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    )
  }
}

export class Footer extends Component {
  render() {
    return (
      <div className="footer__outer__container">
          <div className="container footer__container">
            <div >
              <Link className="logo__name" to="/"> <InlineSVG src={svgLogo} /></Link>
             
            </div>
            <div>
              <ul className="nav__links">
                <li>
                  <Link className="smalls nav__link" to="/work">Work</Link>
                </li>
                <li>
                  <Link className="smalls nav__link" to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
      </div>
     
    )
  }
}

export class Hero extends Component {
  render() {
    return (
      <div className="hero__sec">
         <div className="container chunky__hero" >
          <div className="row">
              <div className="col-lg-10 offset-lg-1">
                {this.props.children}
            </div>
          </div>
        </div>
        {this.props.hero_image != null &&
          <div className="container hero__image">
            <img src={this.props.hero_image} alt="large graphic"/>
          </div>
        }
        {this.props.hero_image != null &&
          <div className="hero__back"></div>
        }
      
      </div>
    )
  }
}


export class ChunkyIndent extends Component {
  render() {
    return (
      <div className="container chunky__block" >
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export class Chunky extends Component {
  render() {
    return (
      <div className="container chunky__block" >
          {this.props.children}
      </div>
    )
  }
}

export class MainTemplate extends Component {
  render() {
    return (
      <div id={this.props.name}>
        {this.props.children}
      </div>
    )
  }
}