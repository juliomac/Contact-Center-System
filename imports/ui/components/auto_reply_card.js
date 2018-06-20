import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import SetAutoReply from '../components/set_auto_reply'
import './css/auto_reply_card.css'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'
import {Setting} from "../../../lib/Database";

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};
const initialState={
    open:false,
    pre_percentage:0,
    percent:0,
    id_setting:''
}
class AutoReplyCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = initialState;
    }
    componentWillMount(){
        Meteor.subscribe('setting',function () {
            this.setSetting()
        }.bind(this))
    }

    setSetting(){
        Tracker.autorun(()=>{
            const setting = Setting.findOne()
            const {percentage_reply,_id} = setting
            if(percentage_reply){
                this.setState({percent:percentage_reply,id_setting:_id,pre_percentage:percentage_reply})
            }

        })
    }




    handleClickOpen = () => {
        this.setState({ open: true });
    };
    onDecClick = () => {
        this.setState({ percent: this.state.percent - 5 > 0 ? this.state.percent - 5 : 0 });
    }

    onInClick = () => {
        this.setState({ percent: this.state.percent + 5 < 100 ? this.state.percent + 5 : 100 });
    }
    onSave = () => {
        this.setState({ open: false });
        const {percent,id_setting} = this.state
        Meteor.call('updatePercentage',id_setting,percent)
    };

    render() {
        const { classes } = this.props;
        const {open,percent,pre_percentage} = this.state
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary">
                            Auto Reply Percentages Setting
                        </Typography>
                        <Progress
                            type="circle"
                            percent={percent}
                        />
                    </CardContent>
                    <CardActions>
                        <Button onClick={this.handleClickOpen}>Edit</Button>
                    </CardActions>
                </Card>
                <SetAutoReply open={open} onClose={()=>this.setState({open:false,percent:pre_percentage})} percent={percent}
                              onInClick={()=>this.onInClick()} onDecClick={()=>this.onDecClick()}
                              onSave={()=>this.onSave()} onSaveClose={()=>this.setState({open:false})}/>
            </div>
        )
    }
}
AutoReplyCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoReplyCard);

