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
import Academic_yearActions from "../redux/actions/Academic_yearActions";

// END IMPORT ACTIONS

/** APIs

* actionsAcademic_year.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsAcademic_year.list
*	@description CRUD ACTION list
*

**/


class Academic_yearList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsAcademic_year.loadAcademic_yearList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsAcademic_year.deleteAcademic_year(this.state.idDelete).then(data => {
      this.props.actionsAcademic_year.loadAcademic_yearList();
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
        id: "ending_date",
        type: "date",
        label: "Ending_date"
      }, 
      {
        id: "starting_date",
        type: "date",
        label: "Starting_date"
      }, 
      {
        id: "title",
        type: "string",
        label: "Title"
      }, 
      {
        id: "year",
        type: "string",
        label: "Year"
      },
    ];
    const link = "/academic_years/";

    return (
      <div>
        <h1>Academic_year List</h1>

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
              <TableCell align="right">Ending_date</TableCell>
              <TableCell align="right">Starting_date</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Year</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/academic_years/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.active_status }</TableCell>
                <TableCell align="right">{ row.ending_date }</TableCell>
                <TableCell align="right">{ row.starting_date }</TableCell>
                <TableCell align="right">{ row.title }</TableCell>
                <TableCell align="right">{ row.year }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/academic_years/new">
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
    actionsAcademic_year: bindActionCreators(Academic_yearActions, dispatch),
  };
};

// Validate types
Academic_yearList.propTypes = { 
  actionsAcademic_year: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.Academic_yearListReducer.listAcademic_year
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Academic_yearList);
