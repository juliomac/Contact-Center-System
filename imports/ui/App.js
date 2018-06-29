import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Main} from "../routes";
import store from '../store/index'
import {Provider} from 'react-redux'
export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Main/>
                </Router>
            </Provider>
        );
    }
}
