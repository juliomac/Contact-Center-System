import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import '../css/set_auto_reply.css'
import '../css/form_login.css'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormHelperText from '@material-ui/core/FormHelperText';
import classNames from 'classnames';
import {validateEmail} from "../../../../init/validate";
import {regex_phone_number} from "../../../../constans/const";


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
class CreateNewAccountModal extends React.Component {

    state = {
        username_state:'',
        email_state: '',
        phone_number_state: '',
        password: '',
        showPassword: false,
        validate_name:true,
        validate_email:true,
        validate_phone_number:true,
        validate_password:true,
        name_error_msg:'*Required',
        email_error_msg:'*Required',
        phone_number_error_msg:'*Required',
        password_error_msg:'*Required',
    };


    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    onSumit(){
        const { username_state,email_state,phone_number_state, password} = this.state;
        console.log(11111);
        var status_name=false;
        var status_email=false;
        var status__phone_number=false;
        var status_password=false;
        if (this.validateNameInput(username_state)) status_name=true;
        if (this.validateEmailInput(email_state)) status_email=true;
        if (this.validatePhoneNumberInput(phone_number_state)) status__phone_number=true;
        if (this.validatePassword(password)) status_password=true;

        if(status_name&&status_email&&status__phone_number&&status_password){
            //Update data to DB
            return true;
        }else {
            return false;
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
    validateEmailInput(email) {
        this.setState({email_state:email})
        if(email.trim()){
            if(validateEmail(email.trim())){
                this.setState({validate_email:true})
            }
            else {
                this.setState({validate_email:false,email_error_msg:'*Email is invalid'})
            }
        }else{
            this.setState({validate_email:false,email_error_msg:'*Required'})
        }

    }

    validatePhoneNumberInput(phone_number) {

        let valid_phone = phone_number

        if(regex_phone_number.test(phone_number)){
            this.setState({phone_number_state:valid_phone})
        }
        if(valid_phone.trim()){
            if(valid_phone.length<8){
                this.setState({validate_phone_number:false,phone_number_error_msg:'*Minimum 8 digits'})

            }else if(valid_phone.length>9){
                this.setState({validate_phone_number:false,phone_number_error_msg:'*Maximum 9 digits'})
            }else {
                this.setState({validate_phone_number:true})

            }
        }else{
            this.setState({validate_phone_number:false,phone_number_error_msg:'*Required'})
            return false;
        }

    }

    validatePassword(password) {
        this.setState({password:password})
        if(password.trim()){
            if(password.trim().toString().length>7){
                this.setState({validate_password:true})
                return true;
            }
            else {
                this.setState({validate_password:false,password_error_msg:'*Minimum 8 digits'})
                return false;
            }
        }else{
            this.setState({validate_password:false,password_error_msg:'*Required'})
            return false;
        }

    }

    render() {
        const {open,onClose,onSave,classes} = this.props;
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
                    <DialogTitle id="alert-dialog-title">{"Create New Admin Account"}</DialogTitle>
                    <DialogContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <FormControl className={classNames(classes.margin, classes.textField)}
                                         style={{width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                                <InputLabel htmlFor="adornment-password">Name</InputLabel>
                                <Input
                                    id="name"
                                    type='text'
                                    value={this.state.username_state}
                                    onChange={(e)=>this.validateNameInput(e.target.value)}
                                />
                                <FormHelperText hidden={this.state.validate_name} error={true}>{this.state.name_error_msg}</FormHelperText>
                            </FormControl>
                            <FormControl className={classNames(classes.margin, classes.textField)}
                                         style={{width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                                <InputLabel htmlFor="adornment-password">Email</InputLabel>
                                <Input
                                    id="email"
                                    type='email'
                                    value={this.state.email_state}
                                    onChange={(e)=>this.validateEmailInput(e.target.value)}
                                />
                                <FormHelperText hidden={this.state.validate_email} error={true}>
                                    {this.state.email_error_msg}</FormHelperText>
                            </FormControl>
                            <FormControl className={classNames(classes.margin, classes.textField)}
                                         style={{width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                                <InputLabel htmlFor="adornment-password">Phone Number</InputLabel>
                                <Input
                                    id="phone_number"
                                    type='text'
                                    value={this.state.phone_number_state}
                                    onChange={(e)=>this.validatePhoneNumberInput(e.target.value)}
                                    startAdornment={<InputAdornment position="start">+855</InputAdornment>}
                                />
                                <FormHelperText hidden={this.state.validate_phone_number} error={true}>
                                    {this.state.phone_number_error_msg}
                                </FormHelperText>
                            </FormControl>
                            <FormControl className={classNames(classes.margin, classes.textField)}
                                         style={{width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                                <InputLabel htmlFor="adornment-password">New Password</InputLabel>
                                <Input
                                    id="password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    value={this.state.password}
                                    onChange={(e)=>this.validatePassword(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                                onMouseDown={this.handleMouseDownPassword}
                                                className={classes.icon}
                                            >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <FormHelperText hidden={this.state.validate_password} error={true}>{this.state.password_error_msg}</FormHelperText>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>onClose()} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={()=>{if(this.onSumit()) onClose()}} color="primary" autoFocus>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

CreateNewAccountModal.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CreateNewAccountModal);
