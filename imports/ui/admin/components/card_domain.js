import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ListInfoDomain from './list_info_domain'
import Menu from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton';
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display:"flex",
        flexDirection:"column"
    },
    title:{
        display:"flex",
    },
    wrapper_title:{
        display:"flex",
        flexDirection:'row',
        justifyContent:'space-between'
    },
    side_item:{
        flex:1,
        display:"flex",
        justifyContent:"flex-end"
    }
});

class CardDomain extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <div id="card_domain">
                <Paper className={classes.root} elevation={4}>
                    <div className={classes.wrapper_title}>
                        <div className={classes.side_item}></div>
                        <Typography className={classes.title} variant="headline" component="h3">
                            Vkirirom
                        </Typography>
                        <div className={classes.side_item}>
                            <IconButton >
                                <Menu/>
                            </IconButton>
                        </div>
                    </div>
                        <ListInfoDomain/>

                </Paper>
            </div>
        );
    }
}


export default withStyles(styles)(CardDomain);
