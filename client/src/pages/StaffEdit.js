// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DateTimePicker } from "material-ui-pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import StaffActions from "../redux/actions/StaffActions";
import DepartmentActions from "../redux/actions/DepartmentActions";
import DesignationActions from "../redux/actions/DesignationActions";
import ReligionActions from "../redux/actions/ReligionActions";
import RolesActions from "../redux/actions/RolesActions";
import SchoolActions from "../redux/actions/SchoolActions";
import GenderActions from "../redux/actions/GenderActions";

// END IMPORT ACTIONS

/** APIs

* actionsStaff.create
*	@description CRUD ACTION create
*
* actionsStaff.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsStaff.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsDepartment.list
*	@description CRUD ACTION list
*
* actionsUser.list
*	@description CRUD ACTION list
*
* actionsDesignation.list
*	@description CRUD ACTION list
*
* actionsReligion.list
*	@description CRUD ACTION list
*
* actionsRoles.list
*	@description CRUD ACTION list
*
* actionsSchool.list
*	@description CRUD ACTION list
*
* actionsGender.list
*	@description CRUD ACTION list
*

**/

class StaffEdit extends Component {
  // Init staff
  constructor(props) {
    super(props);
    this.state = {
      staff: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsStaff.loadStaff(this.props.match.params.id);
    }
    
    this.props.actionsDepartment.loadDepartmentList();
    this.props.actionsDesignation.loadDesignationList();
    this.props.actionsGender.loadGenderList();
    this.props.actionsReligion.loadReligionList();
    this.props.actionsRoles.loadRolesList();
    this.props.actionsSchool.loadSchoolList();
    this.props.actionsUser.loadUserList();
  }

  // Insert props staff in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      staff: props.staff
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.staff._id) {
      this.props.actionsStaff.saveStaff(this.state.staff).then(data => {
        this.props.history.push("/staffs/");
      });
    } else {
      this.props.actionsStaff.createStaff(this.state.staff).then(data => {
        this.props.history.push("/staffs/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Staff Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="address"
            label="Address"
            value={this.state.staff.address || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="bank_account_name"
            label="Bank_account_name"
            value={this.state.staff.bank_account_name || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="bank_account_no"
            label="Bank_account_no"
            value={this.state.staff.bank_account_no || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="bank_name"
            label="Bank_name"
            value={this.state.staff.bank_name || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="basic_salary"
            label="Basic_salary"
            value={this.state.staff.basic_salary || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="casual_leave"
            label="Casual_leave"
            value={this.state.staff.casual_leave || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="date_of_birth"
            label="Date_of_birth"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.staff.date_of_birth
                ? new Date(this.state.staff.date_of_birth)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "staff", "date_of_birth")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <DateTimePicker
            id="date_of_joining"
            label="Date_of_joining"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.staff.date_of_joining
                ? new Date(this.state.staff.date_of_joining)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "staff", "date_of_joining")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="email"
            label="Email"
            value={this.state.staff.email || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="epf_no"
            label="Epf_no"
            value={this.state.staff.epf_no || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="experience"
            label="Experience"
            value={this.state.staff.experience || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="father_name"
            label="Father_name"
            value={this.state.staff.father_name || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="first_name"
            label="First_name"
            value={this.state.staff.first_name || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="full_name"
            label="Full_name"
            value={this.state.staff.full_name || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="ifsc_code"
            label="Ifsc_code"
            value={this.state.staff.ifsc_code || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="joining_letter"
            label="Joining_letter"
            value={this.state.staff.joining_letter || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="last_name"
            label="Last_name"
            value={this.state.staff.last_name || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="marital_status"
            label="Marital_status"
            value={this.state.staff.marital_status || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="maternity_leave"
            label="Maternity_leave"
            value={this.state.staff.maternity_leave || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="medical_leave"
            label="Medical_leave"
            value={this.state.staff.medical_leave || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="mobile"
            label="Mobile"
            value={this.state.staff.mobile || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="mother_name"
            label="Mother_name"
            value={this.state.staff.mother_name || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="national_id"
            label="National_id"
            value={this.state.staff.national_id || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="other_document"
            label="Other_document"
            value={this.state.staff.other_document || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="qualification"
            label="Qualification"
            value={this.state.staff.qualification || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="resume"
            label="Resume"
            value={this.state.staff.resume || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="staff_no"
            label="Staff_no"
            value={this.state.staff.staff_no || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="staff_photo"
            label="Staff_photo"
            value={this.state.staff.staff_photo || ""}
            onChange={Utils.handleChange.bind(this, "staff")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m department_id with Department */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="department_id">
              Department_id
            </InputLabel>
            <Select
              value={this.state.staff.department_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "staff")}
              inputProps={{
                id: "department_id",
                name: "department_id"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listDepartment && this.props.listDepartment.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m designation_id with Designation */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="designation_id">
              Designation_id
            </InputLabel>
            <Select
              value={this.state.staff.designation_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "staff")}
              inputProps={{
                id: "designation_id",
                name: "designation_id"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listDesignation && this.props.listDesignation.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m gender_id with gender */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="gender_id">
              Gender_id
            </InputLabel>
            <Select
              value={this.state.staff.gender_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "staff")}
              inputProps={{
                id: "gender_id",
                name: "gender_id"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listGender && this.props.listGender.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m religion_id with religion */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="religion_id">
              Religion_id
            </InputLabel>
            <Select
              value={this.state.staff.religion_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "staff")}
              inputProps={{
                id: "religion_id",
                name: "religion_id"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listReligion && this.props.listReligion.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m role_id with roles */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="role_id">
              Role_id
            </InputLabel>
            <Select
              value={this.state.staff.role_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "staff")}
              inputProps={{
                id: "role_id",
                name: "role_id"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listRoles && this.props.listRoles.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m school_id with school */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="school_id">
              School_id
            </InputLabel>
            <Select
              value={this.state.staff.school_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "staff")}
              inputProps={{
                id: "school_id",
                name: "school_id"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listSchool && this.props.listSchool.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m user_id with User */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="user_id">
              User_id
            </InputLabel>
            <Select
              value={this.state.staff.user_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "staff")}
              inputProps={{
                id: "user_id",
                name: "user_id"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listUser && this.props.listUser.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/staffs/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsStaff: bindActionCreators(StaffActions, dispatch),
    actionsDepartment: bindActionCreators(DepartmentActions, dispatch),
    actionsDesignation: bindActionCreators(DesignationActions, dispatch),
    actionsReligion: bindActionCreators(ReligionActions, dispatch),
    actionsRoles: bindActionCreators(RolesActions, dispatch),
    actionsSchool: bindActionCreators(SchoolActions, dispatch),
    actionsGender: bindActionCreators(GenderActions, dispatch),
  };
};

// Validate types
StaffEdit.propTypes = { 
  actionsStaff: PropTypes.object.isRequired,
  actionsDepartment: PropTypes.object.isRequired,
  actionsDesignation: PropTypes.object.isRequired,
  actionsReligion: PropTypes.object.isRequired,
  actionsRoles: PropTypes.object.isRequired,
  actionsSchool: PropTypes.object.isRequired,
  actionsGender: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    staff: state.StaffEditReducer.staff,
    listDepartment: state.StaffEditReducer.listDepartment,
    listDesignation: state.StaffEditReducer.listDesignation,
    listGender: state.StaffEditReducer.listGender,
    listReligion: state.StaffEditReducer.listReligion,
    listRoles: state.StaffEditReducer.listRoles,
    listSchool: state.StaffEditReducer.listSchool,
    listUser: state.StaffEditReducer.listUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StaffEdit);
