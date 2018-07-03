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
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import classNames from 'classnames';
import {validateEmail} from "../../../init/validate";


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
class EditEmailModal extends React.Component {

    state = {
        email: "maimom61@gmail.com",
        validate_email:true,
        email_error_msg:'*Required',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onSumit(){
        const {email} = this.state;
        if (this.validateEmailInput(email)){
            //Update data to DB
            return true;
        }else return false;

    }

    validateEmailInput(email) {
        if(email){
            if(validateEmail(email.trim())){
                this.setState({validate_email:true})
                return true;
            }
            else {
                this.setState({validate_email:false,email_error_msg:'*Email is invalid'})
                return false;
            }
        }else{
            this.setState({validate_email:false,email_error_msg:'*Required'})
        }

    }

    render() {
        const {open,onClose,onSave,email,classes} = this.props;
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
                    <DialogTitle id="alert-dialog-title">{"Update Account's Email"}</DialogTitle>
                    <DialogContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <FormControl className={classNames(classes.margin, classes.textField)}
                                         style={{width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                                <InputLabel htmlFor="adornment-password">Email</InputLabel>
                                <Input
                                    id="email"
                                    type='email'
                                    value={this.state.email}
                                    onChange={this.handleChange('email')}
                                />
                                <FormHelperText hidden={this.state.validate_email} error={true}>{this.state.email_error_msg}</FormHelperText>
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

EditEmailModal.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(EditEmailModal);
