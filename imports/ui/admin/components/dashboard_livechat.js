import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
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
    percent:80,
}
class AutoReplyCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = initialState;
    }

    render() {
        const { classes } = this.props;
        const {percent} = this.state
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary">
                            Live Chat User Active
                        </Typography>
                        <Progress
                            type='circle'
                            percent={100}
                            status="error"
                            theme={{
                                error: {
                                    symbol: [percent,<br/>,<span style={{fontSize:15,marginLeft:10,color:'#1ec0ff'}}>active</span>],
                                    color: '#47b8e0'
                                }
                            }}
                        />
                    </CardContent>
                </Card>
            </div>
        )
    }
}
AutoReplyCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoReplyCard);

