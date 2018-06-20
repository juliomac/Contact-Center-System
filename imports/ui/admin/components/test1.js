import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

const styles = {
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
state = {
    open: false,
};

handleClickOpen = () => {
    this.setState({ open: true });
};

handleClose = () => {
    this.setState({ open: false });
};
function AutoReplyCard(props) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;
    const {open} = this.state
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary">
                    Auto Reply Percentages Setting
                </Typography>
                <Progress
                    type="circle"
                    percent={30}
                />
            </CardContent>
            <CardActions>
                <Button onClick={this.handleClickOpen} open={open}>Open alert dialog</Button>
            </CardActions>
        </Card>
    );
}

AutoReplyCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoReplyCard);
