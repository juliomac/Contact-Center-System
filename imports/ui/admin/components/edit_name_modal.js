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
class EditNameModal extends React.Component {

    state = {
        name: "Mai Mom",
        validate_name:true,
        name_error_msg:'*Required',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    onSumit(){
        const {name} = this.state;
        if (this.validateNameInput(name.trim())){
            //Update data to DB
            return true;
        }else return false;

    }

    validateNameInput(name) {
        if(name){
            if(name.toString().length<3){
                this.setState({validate_name:false,name_error_msg:'*Minimum 3 digits'})
                return false;
            }else if(name.toString().length>30){
                this.setState({validate_name:false,name_error_msg:'*Maximum 30 digits'})
                return false;
            }else {
                this.setState({validate_name:true})
                return true;
            }
        }else{
            this.setState({validate_name:false,name_error_msg:'*Required'})
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
                    <DialogTitle id="alert-dialog-title">{"Update Account's Name"}</DialogTitle>
                    <DialogContent>
                        <form className={classes.container} noValidate autoComplete="off">
                            <FormControl className={classNames(classes.margin, classes.textField)}
                                         style={{width:'90%',marginLeft:'5%',marginRight:'5%'}}>
                                <InputLabel htmlFor="adornment-password">Name</InputLabel>
                                <Input
                                    id="name"
                                    type='text'
                                    value={this.state.name}
                                    onChange={this.handleChange('name')}
                                />
                                <FormHelperText hidden={this.state.validate_name} error={true}>{this.state.name_error_msg}</FormHelperText>
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

EditNameModal.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(EditNameModal);
