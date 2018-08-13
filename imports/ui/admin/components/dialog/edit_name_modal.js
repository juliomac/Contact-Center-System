import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from "@material-ui/core/styles/index";
import {connect} from 'react-redux'
import '../css/set_auto_reply.css'
import '../css/form_login.css'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import classNames from 'classnames';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit*2,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
    icon:{
        color:'#303f9f'
    }

});
class EditNameModal extends React.Component {

    state = {
        username_state: "Mai Mom",
        validate_name:true,
        name_error_msg:'*Required',
    };


    onSubmit(){
        const {username_state,validate_name} = this.state;
        const {onClose} = this.props
        if (validate_name){
           Meteor.call('updateUsername',username_state,function (e) {
               if(!e){
                   onClose()
               }
           })
        }

    }

    validateNameInput(username) {
        this.setState({username_state:username})
        if(username.trim()){
            if(username.toString().length<3){
                this.setState({validate_name:false,name_error_msg:'*Minimum 3 digits'})

            }else if(username.toString().length>30){
                this.setState({validate_name:false,name_error_msg:'*Maximum 30 digits'})

            }else {
                this.setState({validate_name:true})

            }
        }else{
            this.setState({validate_name:false,name_error_msg:'*Required'})
            return false;
        }

    }
    initUsername(){
        const{username} = this.props
        console.log(this.props)
        this.setState({username_state:username})
    }
    componentDidMount(){
        this.initUsername()
    }

    render() {
        const {open,onClose,onSave,classes} = this.props;
        const {username_state} = this.state
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={()=>onClose()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth={true}
                    maxWidth = {'xs'}

                >
                    <DialogTitle id="alert-dialog-title">{"Update Account's Name"}</DialogTitle>
                    <DialogContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <FormControl className={classNames(classes.margin, classes.textField)}
                                         style={{width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                                <InputLabel htmlFor="adornment-password">Name</InputLabel>
                                <Input
                                    id="name"
                                    type='text'
                                    value={username_state}
                                    onChange={(e)=>this.validateNameInput(e.target.value)}
                                />
                                <FormHelperText hidden={this.state.validate_name} error={true}>{this.state.name_error_msg}</FormHelperText>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>{onClose();this.initUsername()}} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={()=>{this.onSubmit()}} color="primary" autoFocus>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state=>{
    return{
        username:state.username
    }
})




export default connect(mapStateToProps)(withStyles(styles)(EditNameModal));
