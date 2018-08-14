import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'react-chat-elements/dist/main.css';
import { MessageList } from 'react-chat-elements';
import './css/message_list.css';

const styles = theme => ({
    root1: {
        width: '100%',
        maxWidth: '100%',
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom:110,
    },
    colorPrimary1:{
        backgroundColor:'#d8e9ef !important',
    },
    navDrawer1:{
        paddingTop: 0,
        paddingBottom: 10,
    },
    icon_text1:{
        color:'#fff'
    },
    badge: {
        background: '#75D701',
        top:-34,
        right:0,
        width:10,
        height:10
    },
    rceMboxBodyody:{
        margin: 0,
        padding: 10,
    }
});


class MessagesList extends React.Component {
    render() {
        const {classes,message_list} = this.props;
        return <div className={classes.root1}>
            <MessageList
                className='message-list'
                lockable={true}
                toBottomHeight={'100%'}
                dataSource={message_list} />
        </div>;
    }
}

MessagesList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MessagesList);