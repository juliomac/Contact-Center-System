import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Progress } from 'react-sweet-progress';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {withStyles} from "@material-ui/core/styles/index";
import PropTypes from 'prop-types';
import './css/set_auto_reply.css'
import purple from '@material-ui/core/colors/deepPurple';


const styles = {
    colorSwitchBase: {
        color: purple[300],
        '&$colorChecked': {
            color: purple[500],
            '& + $colorBar': {
                backgroundColor: purple[500],
            },
        },
    },
    colorBar: {},
    colorChecked: {},

};

class SetAutoReply extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checkedA: false,
        }
    }

    handleChange = name=>event => {
        this.setState({ checkedA: event.target.checked });
    }
    componentWillReceiveProps(){
     const {auto_reply} = this.props
        this.setState({checkedA:auto_reply})
    }

    render() {
        const {open,onClose,onSave,classes} = this.props;
        const {checkedA} = this.state
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
                    <DialogTitle id="alert-dialog-title">{"Auto Reply by Bot"}</DialogTitle>
                    <DialogContent>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={checkedA}
                                    onChange={this.handleChange('checkedA')}
                                    value="checkedA"
                                    classes={{
                                        switchBase: classes.colorSwitchBase,
                                        checked: classes.colorChecked,
                                        bar: classes.colorBar,
                                    }}
                                />
                            }
                            label="Auto Reply"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>onClose()} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={()=>{onSave(this.state.checkedA),onClose()}} color="primary" autoFocus>
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
