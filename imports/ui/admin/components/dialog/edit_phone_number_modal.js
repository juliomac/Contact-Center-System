import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from "@material-ui/core/styles/index";
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import '../css/set_auto_reply.css'
import '../css/form_login.css'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import classNames from 'classnames';
import {formatPhoneNumber} from "../../../../init/format";
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
class EditPhoneNumberModal extends React.Component {

    state = {
        phone_number_state: "+855 967969927",
        validate_phone_number:true,
        phone_number_error_msg:'*Required',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onSubmit(){
        const {phone_number_state,validate_phone_number} = this.state;
        const {onClose} = this.props
        if (validate_phone_number){
           Meteor.call('updatePhoneNumber',formatPhoneNumber(phone_number_state),function (e) {
               if(!e){
                   onClose()
               }
           })
        }

    }

    validatePhoneNumberInput(phone_number) {
        let valid_phone = phone_number

        if(regex_phone_number.test(phone_number)){
            this.setState({phone_number_state:valid_phone})
        }
        if(valid_phone){
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

    initPhone(){
        const{phone_number} = this.props
        this.setState({phone_number_state:phone_number})
    }
    componentDidMount(){
        this.initPhone()
    }

    render() {
        const {open,onClose,onSave,classes} = this.props;
        const {phone_number_state} = this.state
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
                                    value={phone_number_state}
                                    onChange={(e)=>this.validatePhoneNumberInput(e.target.value)}
                                />
                                <FormHelperText hidden={this.state.validate_phone_number} error={true}>
                                    {this.state.phone_number_error_msg}
                                    </FormHelperText>
                            </FormControl>


                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>{onClose();this.initPhone()}} color="primary">
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
const mapStateToProps =(state)=>{
    return{
        phone_number:state.phone_number
    }
}

export default connect(mapStateToProps)(withStyles(styles)(EditPhoneNumberModal));
