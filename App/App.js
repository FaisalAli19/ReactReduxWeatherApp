import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Main from 'Main';
import  store from 'store';

//css
require("style-loader!css-loader!sass-loader!./styles/app.scss");

const App = document.getElementById("app");

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    App
);
