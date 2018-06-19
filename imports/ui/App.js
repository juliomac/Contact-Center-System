import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import MiniDrawer from './components/drawer'
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Provider} from 'react-redux'
import store from '../store'
import {test} from "../../lib/Database";
import {Meteor} from 'meteor/meteor'

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

export default class App extends Component {
    change(){
        Tracker.autorun(() => {
            console.log(test.find().fetch())

        });
    }
    componentWillMount(){
        Meteor.subscribe('chat',function (e) {
            this.change()
        }.bind(this))
    }
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <div>
                        <MiniDrawer/>
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}
