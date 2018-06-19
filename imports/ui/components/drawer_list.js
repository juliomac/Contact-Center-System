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
import {connect} from 'react-redux'
import {switchComponent} from "../../action";

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,

    },
    colorPrimary:{
        backgroundColor:'rgb(30, 192, 255) !important',
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


    render() {
        const {classes,switchComponent,switch_component} = this.props;
        return (
            <div className={classes.root}>
                <List component="nav" className={classes.navDrawer}>
                    <ListItem button onClick={()=>{switchComponent(1)}}
                              className={switch_component ===1?classes.colorPrimary:null}>
                        <ListItemIcon>
                            <DeveloperBoard className={switch_component === 1?classes.icon_text:null}/>
                        </ListItemIcon>
                        <ListItemText primary={
                            <p className={switch_component === 1?classes.icon_text:null}>
                                Dashboard
                            </p>
                        }/>
                    </ListItem>
                    <ListItem button onClick={()=>{switchComponent(2)}} className={switch_component === 2?classes.colorPrimary:null}>
                        <ListItemIcon>
                            <Badge className={classes.margin} badgeContent={8} color="secondary">
                                <TrackChanges className={switch_component === 2?classes.icon_text:null}/>
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary={
                            <p className={switch_component === 2?classes.icon_text:null}>
                                Live Chat
                            </p>
                        }/>
                    </ListItem>
                    <ListItem button onClick={()=>{switchComponent(3)}} className={switch_component === 3?classes.colorPrimary:null}>
                        <ListItemIcon>
                            <Badge className={classes.margin} badgeContent={10} color="secondary">
                                <Notifications className={switch_component === 3?classes.icon_text:null}/>
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary={
                            <p className={switch_component === 3?classes.icon_text:null}>
                                Notification
                            </p>
                        }/>
                    </ListItem>
                    <ListItem button onClick={()=>{switchComponent(4)}} className={switch_component === 4?classes.colorPrimary:null}>
                        <ListItemIcon>
                            <Settings className={switch_component === 4?classes.icon_text:null}/>
                        </ListItemIcon>
                        <ListItemText primary={
                            <p className={switch_component === 4?classes.icon_text:null}>
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

const mapDispatchToProps = dispatch =>{
    return {
        switchComponent:index=>dispatch(switchComponent(index))
    }
}
const mapStateToProps =state=>{
    return {
        switch_component:state.switch_component
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Drawer_List));