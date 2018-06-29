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
class EditPhoneNumberModal extends React.Component {

    state = {
        phone_number: "+855 967969927",
        validate_phone_number:true,
        phone_number_error_msg:'*Required',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onSumit(){
        const {phone_number} = this.state;
        if (this.validatePhoneNumberInput(phone_number.trim())){
            //Update data to DB
            return true;
        }else return false;

    }

    validatePhoneNumberInput(phone_number) {
        if(phone_number){
            if(phone_number.toString().length<8){
                this.setState({validate_phone_number:false,phone_number_error_msg:'*Minimum 8 digits'})
                return false;
            }else if(phone_number.toString().length>9){
                this.setState({validate_phone_number:false,phone_number_error_msg:'*Maximum 9 digits'})
                return false;
            }else {
                this.setState({validate_phone_number:true})
                return true;
            }
        }else{
            this.setState({validate_phone_number:false,phone_number_error_msg:'*Required'})
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
                    <DialogTitle id="alert-dialog-title">{"Update Account's Phone Number"}</DialogTitle>
                    <DialogContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <FormControl className={classNames(classes.margin, classes.textField)}
                                         style={{width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                                <InputLabel htmlFor="adornment-password">Phone Number</InputLabel>
                                <Input
                                    id="phone_number"
                                    type='text'
                                    value={this.state.phone_number}
                                    onChange={this.handleChange('phone_number')}
                                />
                                <FormHelperText hidden={this.state.validate_phone_number} error={true}>
                                    {this.state.phone_number_error_msg}
                                    </FormHelperText>
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

EditPhoneNumberModal.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(EditPhoneNumberModal);
