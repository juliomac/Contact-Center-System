import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import MiniDrawer from './components/drawer'
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
    getTasks() {
        //return User.find()
        return [{name:"Mai Mom",phone_number:"0967969927"}]
    }

    renderTasks() {
        return this.getTasks().map((task,idex) => (
            <Task key={idex} task={task} />
        ));
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <MiniDrawer/>
                </div>
            </MuiThemeProvider>

        );
    }
}
