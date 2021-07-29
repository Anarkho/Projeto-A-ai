import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' // da a possibilidade dispachar quantos ações forem necessaria 
import mainReducer from './store';

const store = applyMiddleware(thunk)(createStore)(mainReducer) //store conjunto de reducer, mainReducer o objeto que ficara as reducer 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


