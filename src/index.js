import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import reducers from './reducers/index'

import { Provider } from 'react-redux';

import { createStore } from 'redux';

ReactDOM.render(<Provider store={createStore(reducers)}><App/></Provider>,document.getElementById("root"))


//here store file also include