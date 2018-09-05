import React from "react";
import ReactDOM from "react-dom";
import "./main.scss";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// App Base Config
import { Provider } from "react-redux";

// Store
import store from "./store/ApplicationStore";

// Routes
import Router from "./routes";

// Theme Config

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById("app")
);
