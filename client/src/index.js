import React from 'react';
import ReactDOM from 'react-dom';

// redux
import store from './store';
import {Provider} from 'react-redux';

// 自定义
import App from "./App";

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
