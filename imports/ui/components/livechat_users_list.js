import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'react-chat-elements/dist/main.css';
import { ChatList } from 'react-chat-elements'
import './css/livechat_users_list.css';
import {data} from "../../data";

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


class ListUser extends React.Component {
    state ={
        data,
    }
    clickUser(e){
        console.log(e.then(res=>{
            console.log()
        }));
    }

    itemList(e){
        console.log("Hello");
        console.log(e);
        console.log(data)
        var be_break=0;
        for (var i = 0; i < data.length; i++) {
            if (data[i].id === e.id) {
                data[i].className = "selected";
                be_break++;
            }
            else{
                if(data[i].className=="selected"){
                    data[i].className="";
                    be_break++;
                }
            }
            if(be_break==2){
                break;
            }
        }
        this.setState({data:data})
    }
    render() {
        const {classes} = this.props;
        const {data} = this.state
        return <div className={classes.root1}>

            <ChatList
                onClick={(e)=>this.itemList(e)}
                className='chat-list'
                dataSource={data} />
        </div>;
    }
}

ListUser.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListUser);