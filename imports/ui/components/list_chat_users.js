import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ChatList } from 'react-chat-elements'

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

function ListChatUser(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ChatList
                className='chat-list'
                dataSource={[
                    {
                        avatar: 'http://vkirirom.com/images/HomePage/vKirirom.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'https://facebook.github.io/react/img/logo.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    ]} />
        </div>
    );
}

ListChatUser.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListChatUser);