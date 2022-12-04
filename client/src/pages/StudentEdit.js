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
import StudentActions from "../redux/actions/StudentActions";
import ReligionActions from "../redux/actions/ReligionActions";
import RolesActions from "../redux/actions/RolesActions";
import Blood_groupActions from "../redux/actions/Blood_groupActions";
import Academic_yearActions from "../redux/actions/Academic_yearActions";
import ClasssesActions from "../redux/actions/ClasssesActions";
import SchoolActions from "../redux/actions/SchoolActions";
import GenderActions from "../redux/actions/GenderActions";

// END IMPORT ACTIONS

/** APIs

* actionsStudent.create
*	@description CRUD ACTION create
*
* actionsStudent.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsStudent.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsReligion.list
*	@description CRUD ACTION list
*
* actionsRoles.list
*	@description CRUD ACTION list
*
* actionsBlood_group.list
*	@description CRUD ACTION list
*
* actionsAcademic_year.list
*	@description CRUD ACTION list
*
* actionsClassses.list
*	@description CRUD ACTION list
*
* actionsUser.list
*	@description CRUD ACTION list
*
* actionsSchool.list
*	@description CRUD ACTION list
*
* actionsGender.list
*	@description CRUD ACTION list
*

**/

class StudentEdit extends Component {
  // Init student
  constructor(props) {
    super(props);
    this.state = {
      student: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsStudent.loadStudent(this.props.match.params.id);
    }
    
    this.props.actionsAcademic_year.loadAcademic_yearList();
    this.props.actionsBlood_group.loadBlood_groupList();
    this.props.actionsClassses.loadClasssesList();
    this.props.actionsGender.loadGenderList();
    this.props.actionsReligion.loadReligionList();
    this.props.actionsRoles.loadRolesList();
    this.props.actionsSchool.loadSchoolList();
    this.props.actionsUser.loadUserList();
  }

  // Insert props student in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      student: props.student
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.student._id) {
      this.props.actionsStudent.saveStudent(this.state.student).then(data => {
        this.props.history.push("/students/");
      });
    } else {
      this.props.actionsStudent.createStudent(this.state.student).then(data => {
        this.props.history.push("/students/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Student Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="address"
            label="Address"
            value={this.state.student.address || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="admission_date"
            label="Admission_date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.student.admission_date
                ? new Date(this.state.student.admission_date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "student", "admission_date")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="admission_no"
            label="Admission_no"
            value={this.state.student.admission_no || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="age"
            label="Age"
            value={this.state.student.age || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="birth_certificate"
            label="Birth_certificate"
            value={this.state.student.birth_certificate || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="caste"
            label="Caste"
            value={this.state.student.caste || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="date_of_birth"
            label="Date_of_birth"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.student.date_of_birth
                ? new Date(this.state.student.date_of_birth)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "student", "date_of_birth")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="email"
            label="Email"
            value={this.state.student.email || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="father_address"
            label="Father_address"
            value={this.state.student.father_address || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="father_email"
            label="Father_email"
            value={this.state.student.father_email || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="father_name"
            label="Father_name"
            value={this.state.student.father_name || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="father_occupation"
            label="Father_occupation"
            value={this.state.student.father_occupation || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="father_phone"
            label="Father_phone"
            value={this.state.student.father_phone || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="first_name"
            label="First_name"
            value={this.state.student.first_name || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="height"
            label="Height"
            value={this.state.student.height || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="last_name"
            label="Last_name"
            value={this.state.student.last_name || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="mobile"
            label="Mobile"
            value={this.state.student.mobile || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="mother_address"
            label="Mother_address"
            value={this.state.student.mother_address || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="mother_email"
            label="Mother_email"
            value={this.state.student.mother_email || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="mother_name"
            label="Mother_name"
            value={this.state.student.mother_name || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="mother_occupation"
            label="Mother_occupation"
            value={this.state.student.mother_occupation || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="mother_phone"
            label="Mother_phone"
            value={this.state.student.mother_phone || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.student.name || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="national_id"
            label="National_id"
            value={this.state.student.national_id || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="national_id_no"
            label="National_id_no"
            value={this.state.student.national_id_no || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="roll_no"
            label="Roll_no"
            value={this.state.student.roll_no || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="student_photo"
            label="Student_photo"
            value={this.state.student.student_photo || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="transfer_certificate"
            label="Transfer_certificate"
            value={this.state.student.transfer_certificate || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="weight"
            label="Weight"
            value={this.state.student.weight || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m academic_id with academic_year */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="academic_id">
              Academic_id
            </InputLabel>
            <Select
              value={this.state.student.academic_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
              inputProps={{
                id: "academic_id",
                name: "academic_id"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listAcademic_year && this.props.listAcademic_year.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m blood_group_id with blood_group */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="blood_group_id">
              Blood_group_id
            </InputLabel>
            <Select
              value={this.state.student.blood_group_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
              inputProps={{
                id: "blood_group_id",
                name: "blood_group_id"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listBlood_group && this.props.listBlood_group.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m classs_id with classses */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="classs_id">
              Classs_id
            </InputLabel>
            <Select
              value={this.state.student.classs_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
              inputProps={{
                id: "classs_id",
                name: "classs_id"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listClassses && this.props.listClassses.map(row => (
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
              value={this.state.student.gender_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
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
              value={this.state.student.religion_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
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
              value={this.state.student.role_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
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
              value={this.state.student.school_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
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
              value={this.state.student.user_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
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
            <Link to="/students/">Back to list</Link>

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
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsReligion: bindActionCreators(ReligionActions, dispatch),
    actionsRoles: bindActionCreators(RolesActions, dispatch),
    actionsBlood_group: bindActionCreators(Blood_groupActions, dispatch),
    actionsAcademic_year: bindActionCreators(Academic_yearActions, dispatch),
    actionsClassses: bindActionCreators(ClasssesActions, dispatch),
    actionsSchool: bindActionCreators(SchoolActions, dispatch),
    actionsGender: bindActionCreators(GenderActions, dispatch),
  };
};

// Validate types
StudentEdit.propTypes = { 
  actionsStudent: PropTypes.object.isRequired,
  actionsReligion: PropTypes.object.isRequired,
  actionsRoles: PropTypes.object.isRequired,
  actionsBlood_group: PropTypes.object.isRequired,
  actionsAcademic_year: PropTypes.object.isRequired,
  actionsClassses: PropTypes.object.isRequired,
  actionsSchool: PropTypes.object.isRequired,
  actionsGender: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    student: state.StudentEditReducer.student,
    listAcademic_year: state.StudentEditReducer.listAcademic_year,
    listBlood_group: state.StudentEditReducer.listBlood_group,
    listClassses: state.StudentEditReducer.listClassses,
    listGender: state.StudentEditReducer.listGender,
    listReligion: state.StudentEditReducer.listReligion,
    listRoles: state.StudentEditReducer.listRoles,
    listSchool: state.StudentEditReducer.listSchool,
    listUser: state.StudentEditReducer.listUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentEdit);
