import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ButtonAppBar from './components/app_bar'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#47b8e0',
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


export default class App extends Component {

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <ButtonAppBar/>
            </MuiThemeProvider>

        );
    }
}
