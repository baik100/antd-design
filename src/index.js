import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'airbnb-browser-shims';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import store from './redux/store';
import 'antd/dist/antd.css';
import {HISTORY} from "./helpers/HistoryHelper";

ReactDOM.render(
    <Provider store={store}>
        <Router history={HISTORY}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
