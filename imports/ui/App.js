import React, { Component } from 'react';
<<<<<<< HEAD
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


=======
import {BrowserRouter as Router} from 'react-router-dom'
import {Main} from "../routes";
import store from '../store/index'
import {Provider} from 'react-redux'
>>>>>>> 98ac075450259ed508742c60f8aaa88019b9235d
export default class App extends Component {

    render() {
        return (
<<<<<<< HEAD
            <MuiThemeProvider theme={theme}>
                <ButtonAppBar/>
            </MuiThemeProvider>

=======
            <Provider store={store}>
                <Router>
                    <Main/>
                </Router>
            </Provider>
>>>>>>> 98ac075450259ed508742c60f8aaa88019b9235d
        );
    }
}
