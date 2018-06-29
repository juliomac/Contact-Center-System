import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import './css/form_login.css'
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import Email from '@material-ui/icons/Email';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import {validateEmail} from "../../../init/validate";
import {handleLogin} from "../../../init";

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

class FormLogin extends React.Component {
    state = {
        email: null,
        password: null,
        weight: '',
        weightRange: '',
        showPassword: false,
        validate_email:true,
        validate_password:true,
        email_error_msg:'*Required',
        password_error_msg:'*Required',
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


    onSubmit(){
        const { email,password } = this.state;
        if(email&&password){
            if(validateEmail(email.trim())&&this.validatePassword(password.trim())){
                this.setState({validate_email:true,validate_password:true});
                console.log("success")
                handleLogin(email, password)

            }else {
                console.log("KKK:   "+password)
                if(validateEmail(email.trim())){
                    this.setState({validate_email:true});
                }else {
                    this.setState({validate_email:false,email_error_msg:'*Email is invalid'});
                }

                if(this.validatePassword(password.trim())){
                    this.setState({validate_password:true});

                }else {
                    this.setState({validate_password:false,password_error_msg:'*Minimum 8 digits'});
                }
            }
        }else{
            console.log(2)
            if(email){
                if(this.validateEmail(email.trim())){
                    this.setState({validate_email:true});
                }else {
                    this.setState({validate_email:false,email_error_msg:'*Email is invalid'});
                }
            }else{
                this.setState({validate_email:false,email_error_msg:'*Required'})
            }

            if(password){
                if(this.validatePassword(password.trim())){
                    this.setState({validate_password:true});

                }else {
                    this.setState({validate_password:false,password_error_msg:'*Minimum 8 digits'});
                }
            }else{
                this.setState({validate_password:false,password_error_msg:'*Required'});
            }
        }

    }

    validatePassword(password) {
        console.log(password)
        if(password.toString().length>7)
            return true;
        else return false;
    }
    render()
    {
        const { classes } = this.props;
        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <Typography variant="headline" component="h2" align="center" className={classes.icon}>
                        Login
                    </Typography>
                    <FormControl className={classNames(classes.margin, classes.textField)}
                                 style={{width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                        <InputLabel htmlFor="adornment-password">Email</InputLabel>
                        <Input
                            id="adornment-password"
                            type='email'
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        className={classes.icon}
                                    >
                                        <Email/>
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText hidden={this.state.validate_email} error={true} id="weight-helper-text">{this.state.email_error_msg}</FormHelperText>
                    </FormControl>

                    <FormControl className={classNames(classes.margin, classes.textField)}
                                 style={{width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                        <InputLabel htmlFor="adornment-password">Password</InputLabel>
                        <Input
                            id="adornment-password"
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
                        <FormHelperText hidden={this.state.validate_password} error={true} id="weight-helper-text">{this.state.password_error_msg}</FormHelperText>
                    </FormControl>
                    <Button variant="outlined" className={classes.button}
                            style={{width:'90%',marginLeft:'5%',marginRight:'5%',border: '2px solid #303f9f',marginTop:30}}
                            onClick={()=>this.onSubmit()}
                            >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

FormLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormLogin);
