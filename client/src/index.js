import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import {Provider} from 'react-redux';

import './scss/app.scss';
import App from './App';

render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);




