import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Notifications from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid';
import TrackChanges from '@material-ui/icons/TrackChanges';


const styles = theme => ({
    card: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        height: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});

function DashBoard(props) {
    const { classes, theme } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography variant="headline"><TrackChanges/> Live Chat</Typography>
                                <Typography variant="subheading" color="textSecondary">
                                    6 Active
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card className={classes.card}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography variant="headline"><Notifications/>Notification</Typography>
                                <Typography variant="subheading" color="textSecondary">
                                    10 Active
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

DashBoard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DashBoard);
