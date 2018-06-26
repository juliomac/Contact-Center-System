import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import LoginCard from '../components/login_card'


const styles = {
    root:{
        position: 'relative',
        zIndex:1,
        maxWidth:450,
        margin: '50px auto 100px',
        padding: 45,
    },
};

function Setting(props) {
    const { classes } = props;

    return (
        <div>
            <div className={classes.root}>
                <LoginCard/>
            </div>

        </div>
    );
}

Setting.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Setting);
