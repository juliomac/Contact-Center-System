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
import ChangePasswordModal from './change_password_modal';
import EditEmailModal from './edit_email_modal';
import EditNameModal from './edit_name_modal';
import EditPhoneNumberModal from './edit_phone_number_modal'
import './css/auto_reply_card.css'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'
import {Setting} from "../../../../lib/Database";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const styles = {
    card: {
        minWidth: 275,
        fontSize:14,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 12,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    table_row:{
        height:44,
    },
    first_cell:{
        padding: '4px 8px 4px 8px',
        color:'rgba(0, 0, 0, 0.54)'
    },
    last_cell:{
        padding: '4px 8px 4px 8px !important',
    },
    right_btn:{
        minWidth:30,
        color:'rgba(0, 0, 0, 0.54)',
    }
};
const initialState={
    name:'Mai Mom',
    email:'maimom15@kit.edu.kh',
    phone_number:'+855 967969927',
    open:false,
    password_modal_open:false,
    name_modal_open:false,
    email_modal_open:false,
    phone_modal_open:false,
    auto_reply:false,
    id_setting:''
}
class UserInfoSettingCard extends React.Component {

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
            const {auto_reply,_id} = setting;
            this.setState({auto_reply:auto_reply,id_setting:_id});
        })
    }




    handleClickOpen = () => {
        this.setState({ open: true });
    };
    editPasswordOpen = () =>{
        this.setState({ password_modal_open: true });
    }
    editEmailOpen = () =>{
        this.setState({ email_modal_open: true });
    }
    editNameOpen = () =>{
        this.setState({ name_modal_open: true });
    }
    editPhoneNumberOpen = () =>{
        this.setState({ phone_modal_open: true });
    }

    onSave = (e) => {
        this.setState({auto_reply: e });
        const {id_setting} = this.state;
        Meteor.call('updateBotReplyStatus',id_setting,e)
    };

    render() {
        const { classes } = this.props;
        const {open,password_modal_open,name_modal_open, email_modal_open,
                phone_modal_open,email, name,phone_number} = this.state
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary">
                            General Account Setting
                        </Typography>
                        <Table className={classes.table}>
                            <TableRow className={classes.table_row}>
                                <TableCell className={classes.first_cell}>Name</TableCell>
                                <TableCell>{name}</TableCell>
                                <TableCell className={classes.last_cell}>
                                    <Button onClick={this.editNameOpen} className={classes.right_btn}>Edit</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow className={classes.table_row}>
                                <TableCell className={classes.first_cell}>Email</TableCell>
                                <TableCell>{email}</TableCell>
                                <TableCell className={classes.last_cell}>
                                    <Button onClick={this.editEmailOpen} className={classes.right_btn}>Edit</Button>
                                </TableCell>
                            </TableRow>
                            <TableRow className={classes.table_row}>
                                <TableCell className={classes.first_cell}>Phone number</TableCell>
                                <TableCell>{phone_number}</TableCell>
                                <TableCell className={classes.last_cell}>
                                    <Button onClick={this.editPhoneNumberOpen} className={classes.right_btn}>Edit</Button>
                                </TableCell>
                            </TableRow>
                        </Table>
                    </CardContent>
                    <CardActions>
                        <Button onClick={this.editPasswordOpen}>Edit Password</Button>
                    </CardActions>
                </Card>
                <ChangePasswordModal open={password_modal_open}
                                     onClose={()=>this.setState({password_modal_open:false})}
                                     onSave={(e)=>this.onSave(e)} />
                <EditEmailModal open={email_modal_open}
                                onClose={()=>this.setState({email_modal_open:false})}
                                onSave={(e)=>this.onSave(e)}/>
                <EditNameModal open={name_modal_open}
                                onClose={()=>this.setState({name_modal_open:false})}
                                onSave={(e)=>this.onSave(e)}/>
                <EditPhoneNumberModal open={phone_modal_open}
                               onClose={()=>this.setState({phone_modal_open:false})}
                               onSave={(e)=>this.onSave(e)}/>
            </div>
        )
    }
}
UserInfoSettingCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserInfoSettingCard);

