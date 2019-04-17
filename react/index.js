import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import App from "./src/pages/App";

import store from './src/config/redux';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("root"));
