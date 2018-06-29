import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer_List from './drawer_list';
import LiveChat from '../screens/liveChat'
import NotificationList from '../screens/notification'
import {connect} from 'react-redux'
import Setting from '../screens/setting'
import DashBoard from '../screens/dashboard'
import Button from '@material-ui/core/Button';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
       // padding: theme.spacing.unit * 3,
        padding:0,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    logout_btn:{
        position:'absolute',
        right:10,
    }

});



class MiniDrawer extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };
    renderScreen(index){
        localStorage.setItem('initIndex',index)
        switch (index){
            case 1:
                return <DashBoard/>
            case 2:
                return <LiveChat/>
            case 3:
                return <NotificationList/>
            case 4:
                return <Setting/>
            default:
                return <DashBoard/>
        }
    }

    render() {
        const { classes, theme,switch_component } = this.props;
        console.log(switch_component)
        return (
            <div className={classes.root}>
                <AppBar
                    position="absolute"
                    className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                >
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, this.state.open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>
                            Contact Center
                        </Typography>
                        <Button color="inherit" className={classes.logout_btn}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <Drawer_List/>
                    <Divider />

                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {this.renderScreen(switch_component)}
                </main>
            </div>
        );
    }
}

MiniDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps =state=>{
    return {
        switch_component:state.switch_component
    }
}

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(MiniDrawer));