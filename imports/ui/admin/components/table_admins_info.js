import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CreateIcon from '@material-ui/icons/PersonAdd';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import CreateAdminAccountModal from './dialog/create_admin_account_modal';
import EditAdminAccountModal from './dialog/edit_admin_account_modal'

let counter = 0;
function createData(name, email, phone_number, password, edit) {
    counter += 1;
    return { id: counter, name, email, phone_number, password, edit };
}

const columnData = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
    { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
    { id: 'phone_number', numeric: true, disablePadding: false, label: 'Phone Number' },
];

class EnhancedTableHead extends React.Component {

    render() {
        const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </TableCell>
                    {columnData.map(column => {
                        return (
                            <TableCell
                                key={column.id}
                                numeric={column.numeric}
                                padding={column.disablePadding ? 'none' : 'default'}
                            >
                                <TableSortLabel
                                    active={orderBy === column.id}
                                    direction={order}
                                >
                                    {column.label}
                                </TableSortLabel>
                            </TableCell>
                        );
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};


const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    oneHighight:
        theme.palette.type === 'light'
            ? {
                color: '#3f51b5',
                backgroundColor: 'rgb(171, 183, 249)',
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
    wrapperAction:{
        display:"flex"
    }
});

let EnhancedTableToolbar = props => {
    const { numSelected, classes,handleDeleteIconClick,handleCreateIconClick, handleEditIconClick} = props;

    return (
        <Toolbar
            className={classNames(classes.root, {
                [classes.oneHighight]: numSelected ==1,
                [classes.highlight]: numSelected > 1,
            })}
        >
            <div className={classes.title}>
                {numSelected > 0 ? (
                    <Typography color="inherit" variant="subheading">
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography variant="title" id="tableTitle">
                        Admin Information
                    </Typography>
                )}
            </div>
            <div className={classes.spacer} />
            <div className={classes.actions}>
                {numSelected > 0 ? (
                    <div className={classes.wrapperAction}>
                        {numSelected==1 ? (
                            <Tooltip title="Edit Account Info">
                                <IconButton aria-label="Edit selected user"
                                            onClick={(event)=>handleEditIconClick(event)}>
                                    <EditIcon/>
                                </IconButton>
                            </Tooltip>
                        ) :''}

                        <Tooltip title="Delete">
                            <IconButton aria-label="Delete"
                                        onClick={(event)=>handleDeleteIconClick(event)}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>

                    </div>

                ) : (

                        <Tooltip title="Create New User">
                            <IconButton aria-label="Create-New-User"
                                        onClick={(event)=>handleCreateIconClick(event)}>
                                <CreateIcon />
                            </IconButton>
                        </Tooltip>



                )}
            </div>
        </Toolbar>
    );
};


EnhancedTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 1020,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class EnhancedTable extends React.Component {
    constructor(props) {
        super(props);
        const { classes } = this.props;
        this.state = {
            order: 'asc',
            orderBy: 'email',
            selected: [],
            create_account_modal: false,
            edit_account_modal: false,
            number_selected:0,
            data: [
                createData('Mai Mom 1', 'maimom15@kit.edu.kh', '+855-967-969-926'),
                createData('Mai Mom 2', 'maimom15@kit.edu.kh', '+855-967-969-926'),
                createData('Mai Mom 3', 'maimom15@kit.edu.kh', '+855-967-969-926'),
                createData('Mai Mom 4', 'maimom15@kit.edu.kh', '+855-967-969-926'),
                createData('Mai Mom 5', 'maimom15@kit.edu.kh', '+855-967-969-926'),

            ],
            page: 0,
            rowsPerPage: 5,
        };
    }

    handleSelectAllClick = (event, checked) => {
        if (checked) {
            this.setState(state => ({ selected: state.data.map(n => n.id) }));
            return;
        }
        this.setState({ selected: [] });
    };


    handleClick = (event, id) => {
        console.log(id);
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        this.setState({ selected: newSelected,number_selected: newSelected.length});
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        console.log(event.target.value)
        this.setState({ rowsPerPage: event.target.value });
    };

    isSelected = id => this.state.selected.indexOf(id) !== -1;

    handleCreateAccountModal = () =>{
        this.setState({ create_account_modal: true });
    }
    handleEditAccountModal = () =>{
        this.setState({ edit_account_modal: true });
    }


    render() {
        const { classes } = this.props;
        const { data, selected, rowsPerPage, page,create_account_modal,edit_account_modal } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        return (
            <Paper className={classes.root}>
                <EnhancedTableToolbar handleDeleteIconClick={()=>console.log("delete")}
                                      numSelected={selected.length}
                                      handleCreateIconClick={()=>this.handleCreateAccountModal()}
                                      handleEditIconClick={()=>this.handleEditAccountModal()}/>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table} aria-labelledby="tableTitle">
                        <EnhancedTableHead
                            numSelected={selected.length}
                            onSelectAllClick={this.handleSelectAllClick}
                            rowCount={data.length}
                        />
                        <TableBody>
                            {data
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map(n => {
                                    const isSelected = this.isSelected(n.id);
                                    return (
                                        <TableRow
                                            hover
                                            onClick={event => this.handleClick(event, n.id)}
                                            role="checkbox"
                                            aria-checked={isSelected}
                                            tabIndex={-1}
                                            key={n.id}
                                            selected={isSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox checked={isSelected} color={this.state.number_selected==1?'default':'secondary'}/>
                                            </TableCell>
                                            <TableCell component="th" scope="row" padding="none">
                                                {n.name}
                                            </TableCell>
                                            <TableCell numeric>{n.email}</TableCell>
                                            <TableCell numeric>{n.phone_number}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 49 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[5,6]}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
                <CreateAdminAccountModal open={create_account_modal}
                                      onClose={()=>this.setState({create_account_modal:false})}
                                      onSave={()=>console.log('save')}/>
                <EditAdminAccountModal open={edit_account_modal}
                                         onClose={()=>this.setState({edit_account_modal:false})}
                                         onSave={()=>console.log('save')}/>
            </Paper>
        );
    }
}

EnhancedTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
