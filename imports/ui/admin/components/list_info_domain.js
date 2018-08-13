import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Notification from '@material-ui/icons/Notifications'
import Message from '@material-ui/icons/Message';
import Person from '@material-ui/icons/Person'
import Button from '@material-ui/core/Button';
const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    button: {
        margin: theme.spacing.unit,
        border:1,
        borderStyle:"solid"
    },
});

class  ListInfoDomain extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <List component="nav">
                    <ListItem button>
                        <ListItemIcon>
                            <Message/>
                        </ListItemIcon>
                        <ListItemText primary="Messages" secondary="10"/>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <Notification/>
                        </ListItemIcon>
                        <ListItemText primary="Notification" secondary="8"/>
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon>
                            <Person/>
                        </ListItemIcon>
                        <ListItemText primary="Active User" secondary="2"/>
                    </ListItem>
                </List>
            </div>
        );
    }
}



export default withStyles(styles)(ListInfoDomain);
