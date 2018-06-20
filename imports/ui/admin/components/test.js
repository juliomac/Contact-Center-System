import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfied';
import Badge from '@material-ui/core/Badge';
import 'react-chat-elements/dist/main.css';
import { ChatList } from 'react-chat-elements'

const styles = theme => ({
    root1: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        paddingTop: 0,
        paddingBottom: 0,
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
});


class Test extends React.Component {
    state ={
        active1:'list_user0'
    }
    clickUser(e){
        console.log(e.then(res=>{
            console.log()
        }));
    }

    getAllUser(){
        const {active1} = this.state;
        const {classes} = this.props;
        const user = [{id:'1'},{id:'2'},{id:'3'},{id:'400'},{id:'5'},{id:'6'},{id:'7'},{id:'1'},{id:'2'},{id:'3'},{id:'4'},{id:'5'},{id:'6'},{id:'7'},{id:'1'},{id:'2'},{id:'3'},{id:'4'},{id:'5'},{id:'6'},{id:'7'}]
        return user.map((item,index)=>{
            console.log(item)
            return (
                <ListItem key={index} button onClick={(e)=>this.clickUser(e)}
                          className={[active1 ==='list_user'+index?classes.colorPrimary1:null,classes.navDrawer1]}>
                    <Badge classes={{badge: classes.badge}} color="secondary">
                        <SentimentSatisfied/>
                    </Badge>
                    <ListItemText primary={
                        <p className={active1 === 'list_user'+index?classes.icon_text1:null} style={{lineHeight:0}}>
                            {'U '+(item.id)}
                        </p>
                    }/>
                </ListItem>
            )
        })
    }

    render() {
        const {classes} = this.props;
        const {active1} = this.state
        return <div className={classes.root1}>

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
                        avatar: 'http://vkirirom.com/images/HomePage/vKirirom.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'http://vkirirom.com/images/HomePage/vKirirom.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 1,
                    },
                    {
                        avatar: 'http://vkirirom.com/images/HomePage/vKirirom.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 2,
                    },
                    {
                        avatar: 'http://vkirirom.com/images/HomePage/vKirirom.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'http://vkirirom.com/images/HomePage/vKirirom.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'http://vkirirom.com/images/HomePage/vKirirom.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'http://vkirirom.com/images/HomePage/vKirirom.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 3,
                    },
                    {
                        avatar: 'http://vkirirom.com/images/HomePage/vKirirom.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },{
                        avatar: 'http://vkirirom.com/images/HomePage/vKirirom.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 0,
                    },
                    {
                        avatar: 'http://vkirirom.com/images/HomePage/vKirirom.svg',
                        alt: 'Reactjs',
                        title: 'Facebook',
                        subtitle: 'What are you doing?',
                        date: new Date(),
                        unread: 10,
                    },
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
        </div>;
    }
}

Test.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Test);