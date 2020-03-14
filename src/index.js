import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import "tachyons";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { searchRobots } from './store/reducers';

const store = createStore(searchRobots);

const rootElement = <Provider store={store}>
    <App/>
</Provider>;

ReactDOM.render(rootElement, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
