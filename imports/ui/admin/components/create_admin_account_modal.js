import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import './css/set_auto_reply.css'
import './css/form_login.css'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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
class ChangePasswordModal extends React.Component {

    state = {
        current_pw: null,
        password: null,
        confirm_new_pw:null,
        showPassword: false,
        validate_current_pw:true,
        validate_password:true,
        validate_confirm_pw:true,
        current_pw_error_msg:'*Required',
        password_error_msg:'*Required',
        confirm_pw_error_msg:'*Required',
    };

    componentWillMount(){
        console.log(this.state.password)
    }
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    onSumit(){
        const { current_pw,password, confirm_new_pw} = this.state;
        console.log(11111);
        var status_current_pw=false;
        var status_pw=false;
        var status__confirm_pw=false;
        if (this.validatePassword(password.trim())) status_pw=true;
        if (this.validateCurrentPassword(current_pw.trim())) status_current_pw=true;
        if (this.confirmNewPassword(password,confirm_new_pw.trim())) status__confirm_pw=true;

        if(status_current_pw&&status_pw&&status__confirm_pw){
            //Update data to DB
            return true;
        }else {
            console.log('Hello false')
            return false;
        }

    }

    validatePassword(password) {
        console.log('validate Password');
        console.log(password)
        if(password){
            if(password.toString().length>7){
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

    validateCurrentPassword(password) {
        console.log('validate Current Password');
        console.log(password)

        if(password){
            if(password.toString().length>7){
                this.setState({validate_current_pw:true})
                return true;
            }
            else {
                this.setState({validate_current_pw:false,current_pw_error_msg:'*Minimum 8 digits'})
                return false;
            }
        }else{
            this.setState({validate_current_pw:false,current_pw_error_msg:'*Required'})
            return false;
        }

    }

    confirmNewPassword(password,confirm_new_pw) {
        console.log('validate confirm Password');
        console.log(password)
        console.log(confirm_new_pw)
        if(confirm_new_pw){
            if(password==confirm_new_pw){
                this.setState({validate_confirm_pw:true});
                return true;
            }
            else {
                this.setState({validate_confirm_pw:false,confirm_pw_error_msg:'*Passwords do not match'});
                return false;
            }
        }else{
            this.setState({validate_confirm_pw:false,confirm_pw_error_msg:'*Required'});
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
                    <DialogTitle id="alert-dialog-title">{"Update Account's Password"}</DialogTitle>
                    <DialogContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <FormControl className={classNames(classes.margin, classes.textField)}
                                         style={{width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                                <InputLabel htmlFor="adornment-password">Current Password</InputLabel>
                                <Input
                                    id="current_pw"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    value={this.state.current_pw}
                                    onChange={this.handleChange('current_pw')}
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
                                <FormHelperText hidden={this.state.validate_current_pw} error={true}>{this.state.current_pw_error_msg}</FormHelperText>
                            </FormControl>
                            <FormControl className={classNames(classes.margin, classes.textField)}
                                         style={{width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                                <InputLabel htmlFor="adornment-password">New Password</InputLabel>
                                <Input
                                    id="password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
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

                            <FormControl className={classNames(classes.margin, classes.textField)}
                                         style={{width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                                <InputLabel htmlFor="adornment-password">Confirm New Password</InputLabel>
                                <Input
                                    id="confirm_new_pw"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    value={this.state.confirm_new_pw}
                                    onChange={this.handleChange('confirm_new_pw')}
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
                                <FormHelperText hidden={this.state.validate_confirm_pw} error={true}>{this.state.confirm_pw_error_msg}</FormHelperText>
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

ChangePasswordModal.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ChangePasswordModal);
