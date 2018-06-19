import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Scrollbars } from 'react-custom-scrollbars';
import InputMessage from '../components/input_message'
import MessagesList from '../components/messages_list'
import ListUser from '../components/livechat_users_list'

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '90%',
        zIndex: 1,
        overflow: 'unset',
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
        overflowY: 'unset!important',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: '98%',
        [theme.breakpoints.up('sm')]: {
            width: '96%',
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
        padding: 0,
    },

});

class LiveChat extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className={classes.root} style={{overflow:'unset'}}>
                <Scrollbars style={{ width: '30%'}}>
                    <Drawer
                        variant="permanent"
                        classes={{
                            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                        }}
                        open={this.state.open}
                    >
                        <ListUser/>
                        <Divider />
                    </Drawer>
                </Scrollbars>

                <Scrollbars>
                    <main className={classes.content}>
                        <div>
                            <MessagesList/>
                            <InputMessage/>
                        </div>
                    </main>
                </Scrollbars>

            </div>
        );
    }
}

LiveChat.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LiveChat);