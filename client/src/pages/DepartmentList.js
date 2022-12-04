// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import DepartmentActions from "../redux/actions/DepartmentActions";

// END IMPORT ACTIONS

/** APIs

* actionsDepartment.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsDepartment.list
*	@description CRUD ACTION list
*

**/


class DepartmentList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsDepartment.loadDepartmentList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsDepartment.deleteDepartment(this.state.idDelete).then(data => {
      this.props.actionsDepartment.loadDepartmentList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "active_status",
        type: "boolean",
        label: "Active_status"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "short_name",
        type: "string",
        label: "Short_name"
      },
    ];
    const link = "/departments/";

    return (
      <div>
        <h1>Department List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Active_status</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Short_name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/departments/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.active_status }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
                <TableCell align="right">{ row.short_name }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/departments/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsDepartment: bindActionCreators(DepartmentActions, dispatch),
  };
};

// Validate types
DepartmentList.propTypes = { 
  actionsDepartment: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.DepartmentListReducer.listDepartment
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentList);
