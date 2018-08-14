import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ListInfoDomain from './list_info_domain'
import Add from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton';
import AddDomain from './dialog/add_domain'
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        backgroundColor:'transparent'
    },
    add_button:{
        height:120,
        width:120
    },
    add:{
        fontSize:120,
    },
    card_wrapper:{
        borderStyle:"dashed",
        height:298,display:"flex",
        justifyContent:'center',
        alignItems:"center",
        borderWidth:2,
        borderRadius:4,
        borderColor:"gray"
    }

});

class AddCard extends React.Component {
    state={
        open:false
    }

    render() {
        const {classes} = this.props;
        const {open} = this.state
        return (
            <div className={classes.card_wrapper}>
                <Paper className={classes.root} elevation={0}>
                    <IconButton
                        onClick={()=>this.setState({open:true})}
                        className={classes.add_button}>
                        <Add className={classes.add}/>
                    </IconButton>
                </Paper>
                <AddDomain open={open} onClose={()=>this.setState({open:true})}/>
            </div>
        );
    }
}


export default withStyles(styles)(AddCard);
