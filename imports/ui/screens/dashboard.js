import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import DashboardLiveChat from '../components/dashboard_livechat'
import DashboardNotifcation from '../components/dashboard_notification'


const styles = {
    root:{
        margin:'5%'
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

function Setting(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={3} style={{maxWidth:600}}>
                        <DashboardLiveChat/>
                    </Grid>
                    <Grid item xs={12} sm={3} style={{maxWidth:600}}>
                        <DashboardNotifcation/>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
}

Setting.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Setting);
