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
        color:'red'
    },
});
handleChange = event => {
    console.log("KKK");
};
function Drawer_List(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List component="nav">
                <ListItem button onClick={this.handleChange}>
                    <ListItemIcon>
                        <DeveloperBoard />
                    </ListItemIcon>
                    <ListItemText primary={
                        <p className={classes.menu_but}>
                            Dashboard
                        </p>
                    }/>
                </ListItem>
                <ListItem button className={classes.secondaryAction}>
                    <ListItemIcon>
                        <Badge className={classes.margin} badgeContent={8} color="secondary">
                            <TrackChanges className={classes.menu_but}/>
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary={
                        <p className={classes.menu_but}>
                            Live Chat
                        </p>
                    }/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Badge className={classes.margin} badgeContent={10} color="secondary">
                            <Notifications />
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary={
                        <p className={classes.menu_but}>
                            Notification
                        </p>
                    }/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary={
                        <p className={classes.menu_but}>
                            Setting
                        </p>
                    }/>
                </ListItem>
            </List>
        </div>
    );
}

Drawer_List.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Drawer_List);