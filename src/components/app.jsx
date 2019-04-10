import React, { Component } from "react";

import { Route, Switch } from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import Work from './views/work';

import {Navbar, Footer} from './main_template';

import Clipper from './views/work_views/clipping_magic'
import ClipperApp from './views/work_views/clipping_magic_app'
import CodeDrawings from './views/work_views/code_drawings' 
import Clv from './views/work_views/clv'
import Delta from './views/work_views/delta' 
import Nuvectra from './views/work_views/nuvectra'
import Recompressor from './views/work_views/recompressor' 



export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/work/code-drawings' component={CodeDrawings}></Route>  
          <Route exact path='/work/clipping-magic' component={Clipper}></Route>  
          <Route exact path='/work/clipping-magic-app' component={ClipperApp}></Route>  
          <Route exact path='/work/cedar-lake-ventures' component={Clv}></Route>  
          <Route exact path='/work/recompressor' component={Recompressor}></Route>   
          <Route exact path='/work/delta-air-lines' component={Delta}></Route>  
          <Route exact path='/work/nuvectra-medical' component={Nuvectra}></Route>  
          <Route exact path='/work' component={Work} />
          <Route exact path='/about' component={About} />
          <Route path='*' component={Home} />
        </Switch>
        <Footer></Footer>
      </div>
     
    );
  }
}