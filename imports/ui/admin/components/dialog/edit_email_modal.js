import React from 'react';
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {withStyles} from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import '../css/set_auto_reply.css'
import '../css/form_login.css'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import classNames from 'classnames';
import {validateEmail} from "../../../../init/validate";
import {emailAdmin, usernameAdmin} from "../../../../action";


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
        email_state: "",
        validate_email:true,
        email_error_msg:'*Required',
    };

    onSubmit(){
        const {validate_email,email_state} = this.state;
        const {onClose,emailAdmin} = this.props
            if(validate_email){
            Meteor.call('updateEmail',email_state,function (e) {
                console.log(e)
                if(!e){
                    onClose()
                }
            })
            }
    }

    validateEmailInput(email) {
        this.setState({email_state:email})
        if(email){
            if(validateEmail(email)){
                this.setState({validate_email:true})
            }
            else {
                this.setState({validate_email:false,email_error_msg:'*Email is invalid'})
            }
        }else{
            this.setState({validate_email:false,email_error_msg:'*Required'})
        }

    }
    initEmail(){
        const{email} = this.props
        this.setState({email_state:email})
    }
    componentDidMount(){
        this.initEmail()
    }

    render() {
        const {open,onClose,classes} = this.props;
        const {email_state} = this.state
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

                            <FormControl className={classNames(classes.margin, classes.textField)}
                                         style={{width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                                <InputLabel htmlFor="adornment-password">Email</InputLabel>
                                <Input
                                    id="email"
                                    type='email'
                                    value={email_state}
                                    onChange={(e)=>this.validateEmailInput(e.target.value)}
                                />
                                <FormHelperText hidden={this.state.validate_email} error={true}>
                                    {this.state.email_error_msg}</FormHelperText>
                            </FormControl>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>{onClose();this.initEmail()}} color="primary">
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
const mapDispatchToProps = (dispatch=>{
    return {
        emailAdmin:email=>(dispatch(emailAdmin(email))),
    }
})
const mapStateToProps = (state=>{
    return{
        email:state.email
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(EditEmailModal));
