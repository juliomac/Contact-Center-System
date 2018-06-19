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
import SetAutoReply from '../components/set_auto_reply'
import './css/auto_reply_card.css'

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
const initialState={
    open:false,
    percent:80,
}
class AutoReplyCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = initialState;
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    onDecClick = () => {
        this.setState({ percent: this.state.percent - 5 > 0 ? this.state.percent - 5 : 0 });
    }

    onInClick = () => {
        this.setState({ percent: this.state.percent + 5 < 100 ? this.state.percent + 5 : 100 });
    }
    onSave = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const {open,percent} = this.state
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary">
                            Auto Reply Percentages Setting
                        </Typography>
                        <Progress
                            type="circle"
                            percent={percent}
                        />
                    </CardContent>
                    <CardActions>
                        <Button onClick={this.handleClickOpen}>Edit</Button>
                    </CardActions>
                </Card>
                <SetAutoReply open={open} onClose={()=>this.setState({open:false})} percent={percent}
                              onInClick={()=>this.onInClick()} onDecClick={()=>this.onDecClick()} onSave={()=>this.onSave()}/>
            </div>
        )
    }
}
AutoReplyCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoReplyCard);

