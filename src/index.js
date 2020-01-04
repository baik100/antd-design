import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'airbnb-browser-shims';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';

import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
