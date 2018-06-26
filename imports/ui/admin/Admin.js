import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import MiniDrawer from './components/drawer'
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Provider} from 'react-redux'
import store from '../../store/index'
import Login from './screens/login'
import {Meteor} from 'meteor/meteor'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3ac569',
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
    state ={
        isLogin:false
    }
    componentWillMount(){
        Meteor.subscribe('Users',function () {

            this.setState({isLogin:Roles.userIsInRole(Meteor.userId(),['admin'])})
        }.bind(this))
    }

    render() {

        return (
            <Provider store={store}>
                {
                    this.state.isLogin?<MiniDrawer/>:<Login/>
                }

            </Provider>
        );
    }
}
