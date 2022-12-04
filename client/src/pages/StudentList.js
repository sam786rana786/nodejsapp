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
import StudentActions from "../redux/actions/StudentActions";

// END IMPORT ACTIONS

/** APIs

* actionsStudent.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsStudent.list
*	@description CRUD ACTION list
*

**/


class StudentList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsStudent.loadStudentList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsStudent.deleteStudent(this.state.idDelete).then(data => {
      this.props.actionsStudent.loadStudentList();
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
        id: "admission_date",
        type: "date",
        label: "Admission_date"
      }, 
      {
        id: "admission_no",
        type: "integer",
        label: "Admission_no"
      }, 
      {
        id: "age",
        type: "string",
        label: "Age"
      }, 
      {
        id: "birth_certificate",
        type: "string",
        label: "Birth_certificate"
      }, 
      {
        id: "caste",
        type: "string",
        label: "Caste"
      }, 
      {
        id: "date_of_birth",
        type: "date",
        label: "Date_of_birth"
      }, 
      {
        id: "email",
        type: "string",
        label: "Email"
      }, 
      {
        id: "father_address",
        type: "string",
        label: "Father_address"
      }, 
      {
        id: "father_email",
        type: "string",
        label: "Father_email"
      }, 
      {
        id: "father_name",
        type: "string",
        label: "Father_name"
      }, 
      {
        id: "father_occupation",
        type: "string",
        label: "Father_occupation"
      }, 
      {
        id: "father_phone",
        type: "string",
        label: "Father_phone"
      }, 
      {
        id: "first_name",
        type: "string",
        label: "First_name"
      }, 
      {
        id: "height",
        type: "string",
        label: "Height"
      }, 
      {
        id: "last_name",
        type: "string",
        label: "Last_name"
      }, 
      {
        id: "mobile",
        type: "string",
        label: "Mobile"
      }, 
      {
        id: "mother_address",
        type: "string",
        label: "Mother_address"
      }, 
      {
        id: "mother_email",
        type: "string",
        label: "Mother_email"
      }, 
      {
        id: "mother_name",
        type: "string",
        label: "Mother_name"
      }, 
      {
        id: "mother_occupation",
        type: "string",
        label: "Mother_occupation"
      }, 
      {
        id: "mother_phone",
        type: "string",
        label: "Mother_phone"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "national_id",
        type: "string",
        label: "National_id"
      }, 
      {
        id: "national_id_no",
        type: "string",
        label: "National_id_no"
      }, 
      {
        id: "roll_no",
        type: "integer",
        label: "Roll_no"
      }, 
      {
        id: "student_photo",
        type: "string",
        label: "Student_photo"
      }, 
      {
        id: "transfer_certificate",
        type: "string",
        label: "Transfer_certificate"
      }, 
      {
        id: "weight",
        type: "string",
        label: "Weight"
      },
    ];
    const link = "/students/";

    return (
      <div>
        <h1>Student List</h1>

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
              <TableCell align="right">Admission_date</TableCell>
              <TableCell align="right">Admission_no</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Birth_certificate</TableCell>
              <TableCell align="right">Caste</TableCell>
              <TableCell align="right">Date_of_birth</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Father_address</TableCell>
              <TableCell align="right">Father_email</TableCell>
              <TableCell align="right">Father_name</TableCell>
              <TableCell align="right">Father_occupation</TableCell>
              <TableCell align="right">Father_phone</TableCell>
              <TableCell align="right">First_name</TableCell>
              <TableCell align="right">Height</TableCell>
              <TableCell align="right">Last_name</TableCell>
              <TableCell align="right">Mobile</TableCell>
              <TableCell align="right">Mother_address</TableCell>
              <TableCell align="right">Mother_email</TableCell>
              <TableCell align="right">Mother_name</TableCell>
              <TableCell align="right">Mother_occupation</TableCell>
              <TableCell align="right">Mother_phone</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">National_id</TableCell>
              <TableCell align="right">National_id_no</TableCell>
              <TableCell align="right">Roll_no</TableCell>
              <TableCell align="right">Student_photo</TableCell>
              <TableCell align="right">Transfer_certificate</TableCell>
              <TableCell align="right">Weight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/students/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.address }</TableCell>
                <TableCell align="right">{ row.admission_date }</TableCell>
                <TableCell align="right">{ row.admission_no }</TableCell>
                <TableCell align="right">{ row.age }</TableCell>
                <TableCell align="right">{ row.birth_certificate }</TableCell>
                <TableCell align="right">{ row.caste }</TableCell>
                <TableCell align="right">{ row.date_of_birth }</TableCell>
                <TableCell align="right">{ row.email }</TableCell>
                <TableCell align="right">{ row.father_address }</TableCell>
                <TableCell align="right">{ row.father_email }</TableCell>
                <TableCell align="right">{ row.father_name }</TableCell>
                <TableCell align="right">{ row.father_occupation }</TableCell>
                <TableCell align="right">{ row.father_phone }</TableCell>
                <TableCell align="right">{ row.first_name }</TableCell>
                <TableCell align="right">{ row.height }</TableCell>
                <TableCell align="right">{ row.last_name }</TableCell>
                <TableCell align="right">{ row.mobile }</TableCell>
                <TableCell align="right">{ row.mother_address }</TableCell>
                <TableCell align="right">{ row.mother_email }</TableCell>
                <TableCell align="right">{ row.mother_name }</TableCell>
                <TableCell align="right">{ row.mother_occupation }</TableCell>
                <TableCell align="right">{ row.mother_phone }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
                <TableCell align="right">{ row.national_id }</TableCell>
                <TableCell align="right">{ row.national_id_no }</TableCell>
                <TableCell align="right">{ row.roll_no }</TableCell>
                <TableCell align="right">{ row.student_photo }</TableCell>
                <TableCell align="right">{ row.transfer_certificate }</TableCell>
                <TableCell align="right">{ row.weight }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/students/new">
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
    actionsStudent: bindActionCreators(StudentActions, dispatch),
  };
};

// Validate types
StudentList.propTypes = { 
  actionsStudent: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.StudentListReducer.listStudent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList);
