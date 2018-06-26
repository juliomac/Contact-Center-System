import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import MiniDrawer from './components/drawer'
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Provider} from 'react-redux'
import store from '../../store/index'
import Login from './screens/login'


const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: 'rgb(30, 192, 255)',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#ff4e50',
            dark: '#ba000d',
            contrastText: '#FFF',
        },
    },
});

export default class Admin extends Component {
    render() {
        return (
            <Provider store={store}>
                <MiniDrawer/>
            </Provider>
        );
    }
}
