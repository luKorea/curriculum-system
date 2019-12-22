import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './static/index.less';

import store from './store';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
