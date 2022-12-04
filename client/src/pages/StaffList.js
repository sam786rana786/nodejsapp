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
import StaffActions from "../redux/actions/StaffActions";

// END IMPORT ACTIONS

/** APIs

* actionsStaff.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsStaff.list
*	@description CRUD ACTION list
*

**/


class StaffList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsStaff.loadStaffList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsStaff.deleteStaff(this.state.idDelete).then(data => {
      this.props.actionsStaff.loadStaffList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "address",
        type: "string",
        label: "Address"
      }, 
      {
        id: "bank_account_name",
        type: "string",
        label: "Bank_account_name"
      }, 
      {
        id: "bank_account_no",
        type: "string",
        label: "Bank_account_no"
      }, 
      {
        id: "bank_name",
        type: "string",
        label: "Bank_name"
      }, 
      {
        id: "basic_salary",
        type: "string",
        label: "Basic_salary"
      }, 
      {
        id: "casual_leave",
        type: "string",
        label: "Casual_leave"
      }, 
      {
        id: "date_of_birth",
        type: "date",
        label: "Date_of_birth"
      }, 
      {
        id: "date_of_joining",
        type: "date",
        label: "Date_of_joining"
      }, 
      {
        id: "email",
        type: "string",
        label: "Email"
      }, 
      {
        id: "epf_no",
        type: "string",
        label: "Epf_no"
      }, 
      {
        id: "experience",
        type: "string",
        label: "Experience"
      }, 
      {
        id: "father_name",
        type: "string",
        label: "Father_name"
      }, 
      {
        id: "first_name",
        type: "string",
        label: "First_name"
      }, 
      {
        id: "full_name",
        type: "string",
        label: "Full_name"
      }, 
      {
        id: "ifsc_code",
        type: "string",
        label: "Ifsc_code"
      }, 
      {
        id: "joining_letter",
        type: "string",
        label: "Joining_letter"
      }, 
      {
        id: "last_name",
        type: "string",
        label: "Last_name"
      }, 
      {
        id: "marital_status",
        type: "string",
        label: "Marital_status"
      }, 
      {
        id: "maternity_leave",
        type: "string",
        label: "Maternity_leave"
      }, 
      {
        id: "medical_leave",
        type: "string",
        label: "Medical_leave"
      }, 
      {
        id: "mobile",
        type: "string",
        label: "Mobile"
      }, 
      {
        id: "mother_name",
        type: "string",
        label: "Mother_name"
      }, 
      {
        id: "national_id",
        type: "string",
        label: "National_id"
      }, 
      {
        id: "other_document",
        type: "string",
        label: "Other_document"
      }, 
      {
        id: "qualification",
        type: "string",
        label: "Qualification"
      }, 
      {
        id: "resume",
        type: "string",
        label: "Resume"
      }, 
      {
        id: "staff_no",
        type: "integer",
        label: "Staff_no"
      }, 
      {
        id: "staff_photo",
        type: "string",
        label: "Staff_photo"
      },
    ];
    const link = "/staffs/";

    return (
      <div>
        <h1>Staff List</h1>

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
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Bank_account_name</TableCell>
              <TableCell align="right">Bank_account_no</TableCell>
              <TableCell align="right">Bank_name</TableCell>
              <TableCell align="right">Basic_salary</TableCell>
              <TableCell align="right">Casual_leave</TableCell>
              <TableCell align="right">Date_of_birth</TableCell>
              <TableCell align="right">Date_of_joining</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Epf_no</TableCell>
              <TableCell align="right">Experience</TableCell>
              <TableCell align="right">Father_name</TableCell>
              <TableCell align="right">First_name</TableCell>
              <TableCell align="right">Full_name</TableCell>
              <TableCell align="right">Ifsc_code</TableCell>
              <TableCell align="right">Joining_letter</TableCell>
              <TableCell align="right">Last_name</TableCell>
              <TableCell align="right">Marital_status</TableCell>
              <TableCell align="right">Maternity_leave</TableCell>
              <TableCell align="right">Medical_leave</TableCell>
              <TableCell align="right">Mobile</TableCell>
              <TableCell align="right">Mother_name</TableCell>
              <TableCell align="right">National_id</TableCell>
              <TableCell align="right">Other_document</TableCell>
              <TableCell align="right">Qualification</TableCell>
              <TableCell align="right">Resume</TableCell>
              <TableCell align="right">Staff_no</TableCell>
              <TableCell align="right">Staff_photo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/staffs/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.address }</TableCell>
                <TableCell align="right">{ row.bank_account_name }</TableCell>
                <TableCell align="right">{ row.bank_account_no }</TableCell>
                <TableCell align="right">{ row.bank_name }</TableCell>
                <TableCell align="right">{ row.basic_salary }</TableCell>
                <TableCell align="right">{ row.casual_leave }</TableCell>
                <TableCell align="right">{ row.date_of_birth }</TableCell>
                <TableCell align="right">{ row.date_of_joining }</TableCell>
                <TableCell align="right">{ row.email }</TableCell>
                <TableCell align="right">{ row.epf_no }</TableCell>
                <TableCell align="right">{ row.experience }</TableCell>
                <TableCell align="right">{ row.father_name }</TableCell>
                <TableCell align="right">{ row.first_name }</TableCell>
                <TableCell align="right">{ row.full_name }</TableCell>
                <TableCell align="right">{ row.ifsc_code }</TableCell>
                <TableCell align="right">{ row.joining_letter }</TableCell>
                <TableCell align="right">{ row.last_name }</TableCell>
                <TableCell align="right">{ row.marital_status }</TableCell>
                <TableCell align="right">{ row.maternity_leave }</TableCell>
                <TableCell align="right">{ row.medical_leave }</TableCell>
                <TableCell align="right">{ row.mobile }</TableCell>
                <TableCell align="right">{ row.mother_name }</TableCell>
                <TableCell align="right">{ row.national_id }</TableCell>
                <TableCell align="right">{ row.other_document }</TableCell>
                <TableCell align="right">{ row.qualification }</TableCell>
                <TableCell align="right">{ row.resume }</TableCell>
                <TableCell align="right">{ row.staff_no }</TableCell>
                <TableCell align="right">{ row.staff_photo }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/staffs/new">
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
    actionsStaff: bindActionCreators(StaffActions, dispatch),
  };
};

// Validate types
StaffList.propTypes = { 
  actionsStaff: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.StaffListReducer.listStaff
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffList);
