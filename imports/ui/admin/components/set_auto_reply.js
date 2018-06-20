 import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Progress } from 'react-sweet-progress';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import {withStyles} from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import './css/set_auto_reply.css'


const styles = {
    root:{

    }

};

class SetAutoReply extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            defual:0
        }
    }


    render() {
        const {open,onClose,onSaveClose,onSave,onDecClick,onInClick,percent} = this.props
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={()=>onClose()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth
                >
                    <DialogTitle id="alert-dialog-title">{"Auto Reply Percentage"}</DialogTitle>
                    <DialogContent>
                        <div style={{ display: 'flex', alignItems: 'center', margin: '0 0 20px 0' }}>
                            <IconButton aria-label="Delete" onClick={()=>onDecClick()}>
                                <RemoveIcon/>
                            </IconButton>
                            <IconButton aria-label="Delete" onClick={()=>onInClick()}>
                                <AddIcon/>
                            </IconButton>
                            <Progress
                                percent={percent}
                                status={this.props.status}
                                theme={this.props.theme}
                                type={this.props.type}
                                width={this.props.width}
                                strokeWidth={this.props.strokeWidth}
                                style={{ margin: '0 0 0 10px' }}
                            />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>onClose()} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={()=>{onSaveClose();onSave()}} color="primary" autoFocus>
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

SetAutoReply.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SetAutoReply);
