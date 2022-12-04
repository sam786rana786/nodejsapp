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
import SchoolActions from "../redux/actions/SchoolActions";

// END IMPORT ACTIONS

/** APIs

* actionsSchool.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsSchool.list
*	@description CRUD ACTION list
*

**/


class SchoolList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsSchool.loadSchoolList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsSchool.deleteSchool(this.state.idDelete).then(data => {
      this.props.actionsSchool.loadSchoolList();
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
        id: "address",
        type: "string",
        label: "Address"
      }, 
      {
        id: "created_at",
        type: "date",
        label: "Created_at"
      }, 
      {
        id: "domain",
        type: "string",
        label: "Domain"
      }, 
      {
        id: "email",
        type: "string",
        label: "Email"
      }, 
      {
        id: "ending_date",
        type: "date",
        label: "Ending_date"
      }, 
      {
        id: "is_enabled",
        type: "boolean",
        label: "Is_enabled"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "phone",
        type: "string",
        label: "Phone"
      }, 
      {
        id: "school_code",
        type: "string",
        label: "School_code"
      }, 
      {
        id: "starting_date",
        type: "date",
        label: "Starting_date"
      }, 
      {
        id: "updated_at",
        type: "date",
        label: "Updated_at"
      },
    ];
    const link = "/schools/";

    return (
      <div>
        <h1>School List</h1>

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
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Created_at</TableCell>
              <TableCell align="right">Domain</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Ending_date</TableCell>
              <TableCell align="right">Is_enabled</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">School_code</TableCell>
              <TableCell align="right">Starting_date</TableCell>
              <TableCell align="right">Updated_at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/schools/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.active_status }</TableCell>
                <TableCell align="right">{ row.address }</TableCell>
                <TableCell align="right">{ row.created_at }</TableCell>
                <TableCell align="right">{ row.domain }</TableCell>
                <TableCell align="right">{ row.email }</TableCell>
                <TableCell align="right">{ row.ending_date }</TableCell>
                <TableCell align="right">{ row.is_enabled }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
                <TableCell align="right">{ row.phone }</TableCell>
                <TableCell align="right">{ row.school_code }</TableCell>
                <TableCell align="right">{ row.starting_date }</TableCell>
                <TableCell align="right">{ row.updated_at }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/schools/new">
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
    actionsSchool: bindActionCreators(SchoolActions, dispatch),
  };
};

// Validate types
SchoolList.propTypes = { 
  actionsSchool: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.SchoolListReducer.listSchool
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolList);
