import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';
import * as serviceWorker from './component/serviceWorker';
import store from './store/Store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
