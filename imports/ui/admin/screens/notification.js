import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Scrollbars } from 'react-custom-scrollbars';
import DraftsIcon from '@material-ui/icons/Drafts';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    root: {
        width: '100%',
    },
    avatar: {
        margin: 1,
    },
});

function NotificationList(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Scrollbars style={{ width: '100%',height:550}} thumbMinSize={10}>
                <List component="nav" style={{marginRight:'10%',marginLeft:'10%'}}>
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox1" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Avatar className={classes.avatar}>
                            <DraftsIcon />
                        </Avatar>
                        <ListItemText primary="Inbox end" />
                    </ListItem>
                    <Divider />
                </List>
            </Scrollbars>
        </div>
    );
}

NotificationList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotificationList);
