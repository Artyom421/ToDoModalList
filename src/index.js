import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Store } from "./store"

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </Provider>
  
  ,
  document.getElementById('root')
);
