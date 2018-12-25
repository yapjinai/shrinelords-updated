// React
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// React Router
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
// CSS
import './index.css';

// Components
import Show from './Show';
import About from './pages/About'
import ShrinesIndex from './pages/ShrinesIndex'
import Create from './pages/Create'

/////////////////////

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <React.Fragment>
        <Route exact path='/' component={ShrinesIndex} />
        <Route exact path='/shrines/:id' component={Show} />
        <Route exact path='/about' component={About} />
        <Route exact path='/create' component={Create} />
      </React.Fragment>
    </Router>
  </Provider>
  ), document.getElementById('root'));

serviceWorker.unregister();
