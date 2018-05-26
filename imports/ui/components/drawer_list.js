import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Settings from '@material-ui/icons/Settings';
import Notifications from '@material-ui/icons/Notifications';
import DeveloperBoard from '@material-ui/icons/DeveloperBoard';
import TrackChanges from '@material-ui/icons/TrackChanges';
import Badge from '@material-ui/core/Badge';


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,

    },
    colorPrimary:{
        backgroundColor:'#d8e9ef !important',
    },
    navDrawer:{
        paddingTop: 0,
        paddingBottom: 0,
    },
    icon_text:{
        color:'#fff'
    }
});


class Drawer_List extends React.Component {
    state ={
        active:1
    }


    render() {
        const {classes} = this.props;
        const {active} = this.state
        return (
            <div className={classes.root}>
                <List component="nav" className={classes.navDrawer}>
                    <ListItem button onClick={()=>this.setState({active:1})}
                              className={active ===1?classes.colorPrimary:null}>
                        <ListItemIcon>
                            <DeveloperBoard className={active === 1?classes.icon_text:null}/>
                        </ListItemIcon>
                        <ListItemText primary={
                            <p className={active === 1?classes.icon_text:null}>
                                Dashboard
                            </p>
                        }/>
                    </ListItem>
                    <ListItem button onClick={()=>this.setState({active:2})} className={active === 2?classes.colorPrimary:null}>
                        <ListItemIcon>
                            <Badge className={classes.margin} badgeContent={8} color="secondary">
                                <TrackChanges className={active === 2?classes.icon_text:null}/>
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary={
                            <p className={active === 2?classes.icon_text:null}>
                                Live Chat
                            </p>
                        }/>
                    </ListItem>
                    <ListItem button onClick={()=>this.setState({active:3})} className={active === 3?classes.colorPrimary:null}>
                        <ListItemIcon>
                            <Badge className={classes.margin} badgeContent={10} color="secondary">
                                <Notifications className={active === 3?classes.icon_text:null}/>
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary={
                            <p className={active === 3?classes.icon_text:null}>
                                Notification
                            </p>
                        }/>
                    </ListItem>
                    <ListItem button onClick={()=>this.setState({active:4})} className={active === 4?classes.colorPrimary:null}>
                        <ListItemIcon>
                            <Settings className={active === 4?classes.icon_text:null}/>
                        </ListItemIcon>
                        <ListItemText primary={
                            <p className={active === 4?classes.icon_text:null}>
                                Setting
                            </p>
                        }/>
                    </ListItem>
                </List>
            </div>
        );
    }
}

Drawer_List.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Drawer_List);