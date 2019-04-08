import React from 'react';
import ReactDom from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import App from './components/app';

require('./stylesheets/base.scss');
require('./stylesheets/home.scss');
require('./stylesheets/about.scss');
require('./stylesheets/work.scss');


ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app')
);
