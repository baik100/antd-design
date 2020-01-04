import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'airbnb-browser-shims';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
