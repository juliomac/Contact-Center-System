import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import MiniDrawer from './components/drawer'
import {loginStatus} from "../../action";
import {MuiThemeProvider, createMuiTheme,withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Provider,connect} from 'react-redux'
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
const styles = theme => ({
    progress: {
        margin: "calc(50% - 20px)",
    },
});
class Admin extends Component {
    renderUI(status){
        const {classes} = this.props
        switch (status){
            case "":
                return <CircularProgress className={classes.progress} />
            case false:
                return <Login/>
            case true:
                return <MiniDrawer/>


        }
    }
    state ={
        isLogin:""
    }
    componentWillMount(){
        const {loginStatus} = this.props
        Meteor.subscribe('Users',function () {
            loginStatus(Roles.userIsInRole(Meteor.userId(),['admin']))
        }.bind(this))
    }

    render() {
        const {login_status} = this.props

        return (
                <div>
                    {this.renderUI(login_status)}
                </div>

        );
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        loginStatus:status=>(dispatch(loginStatus(status)))
    }
}
const mapStateToProps =state=>{
    return {
        login_status:state.login_status
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Admin));
