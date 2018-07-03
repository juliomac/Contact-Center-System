import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Table_Admins_Info from '../components/table_admins_info'
import { Scrollbars } from 'react-custom-scrollbars';


const styles = theme => ({
    root: {
        width: '94%',
        marginLeft: '3%',
        marginRight: '3%',
    },
});

class ManageAdmins extends React.Component {

    render() {
        const {classes} =this.props;
        return (
            <div className={classes.root}>
                <Scrollbars renderTrackHorizontal={props => <div {...props} className="track-horizontal"/>}
                            renderTrackVertical={props => <div {...props} className="track-vertical"/>}
                            renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
                            renderThumbVertical={props => <div {...props} className="thumb-vertical"/>}
                            renderView={props => <div {...props} className="view"/>}>
                </Scrollbars>
                <Table_Admins_Info/>
            </div>
        );
    }
}

ManageAdmins.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManageAdmins);
