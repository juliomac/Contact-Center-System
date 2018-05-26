import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    chip: {
        margin: theme.spacing.unit,
    },
    list_message:{
        paddingTop:0,
        paddingBottom:0
    }
});

function ChatList(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <List>
                <ListItem className={classes.list_message}>
                    <Chip label="Basic Chip" className={classes.chip} />
                </ListItem>
                <ListItem className={classes.list_message}>
                    <Chip label="Basic Chip" className={classes.chip} />
                </ListItem>
                <ListItem className={classes.list_message}>
                    <Chip label="Basic Chip" className={classes.chip} />
                </ListItem>
            </List>
        </div>
    );
}

ChatList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatList);