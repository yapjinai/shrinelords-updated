import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App';
import About from './components/About'
import Shrines from './containers/Shrines'
// import Creation from './components/Creation'
import Create from './components/Create'

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route exact path='/' component={Shrines} />
      <Route exact path='/shrines/:id' component={App} />
      <Route exact path='/about' component={About} />
      <Route exact path='/create' component={Create} />
    </React.Fragment>
  </Router>), document.getElementById('root'));

serviceWorker.unregister();
