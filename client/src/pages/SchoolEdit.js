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
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// Custom Actions


// START IMPORT ACTIONS
import SchoolActions from "../redux/actions/SchoolActions";
import ClasssesActions from "../redux/actions/ClasssesActions";
import StudentActions from "../redux/actions/StudentActions";
import SectionActions from "../redux/actions/SectionActions";
import DepartmentActions from "../redux/actions/DepartmentActions";
import DesignationActions from "../redux/actions/DesignationActions";
import StaffActions from "../redux/actions/StaffActions";

// END IMPORT ACTIONS

/** APIs

* actionsSchool.create
*	@description CRUD ACTION create
*
* actionsSchool.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsSchool.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsClassses.findByschool_id
*	@description CRUD ACTION findByschool_id
*	@param Objectid key - Id of model to search for
*
* actionsUser.findByschool_id
*	@description CRUD ACTION findByschool_id
*	@param Objectid key - Id of model to search for
*
* actionsStudent.findByschool_id
*	@description CRUD ACTION findByschool_id
*	@param Objectid key - Id of model to search for
*
* actionsSection.findByschool_id
*	@description CRUD ACTION findByschool_id
*	@param Objectid key - Id of model to search for
*
* actionsDepartment.findByschool_id
*	@description CRUD ACTION findByschool_id
*	@param Objectid key - Id of model to search for
*
* actionsDesignation.findByschool_id
*	@description CRUD ACTION findByschool_id
*	@param Objectid key - Id of model to search for
*
* actionsStaff.findByschool_id
*	@description CRUD ACTION findByschool_id
*	@param Objectid key - Id of model to search for
*

**/

class SchoolEdit extends Component {
  // Init school
  constructor(props) {
    super(props);
    this.state = {
      school: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsSchool.loadSchool(this.props.match.params.id);
      this.props.actionsClassses.findByschool_id(this.props.match.params.id);
      this.props.actionsUser.findByschool_id(this.props.match.params.id);
      this.props.actionsDepartment.findByschool_id(this.props.match.params.id);
      this.props.actionsDesignation.findByschool_id(this.props.match.params.id);
      this.props.actionsStaff.findByschool_id(this.props.match.params.id);
      this.props.actionsSection.findByschool_id(this.props.match.params.id);
      this.props.actionsStudent.findByschool_id(this.props.match.params.id);
    }
    
  }

  // Insert props school in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      school: props.school
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.school._id) {
      this.props.actionsSchool.saveSchool(this.state.school).then(data => {
        this.props.history.push("/schools/");
      });
    } else {
      this.props.actionsSchool.createSchool(this.state.school).then(data => {
        this.props.history.push("/schools/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>School Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <FormControlLabel
            control={
              <Switch
                id="active_status"
                checked={this.state.school.active_status || false}
                onChange={Utils.handleChangeCheck.bind(this, "school", "active_status")}
                color="primary"
              />
            }
            label="active_status"
            className="mt-20"
          />
          
          
          <TextField
            id="address"
            label="Address"
            value={this.state.school.address || ""}
            onChange={Utils.handleChange.bind(this, "school")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.school.address && this.state.school.address === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="created_at"
            label="Created_at"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.school.created_at
                ? new Date(this.state.school.created_at)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "school", "created_at")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="domain"
            label="Domain"
            value={this.state.school.domain || ""}
            onChange={Utils.handleChange.bind(this, "school")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="email"
            label="Email"
            value={this.state.school.email || ""}
            onChange={Utils.handleChange.bind(this, "school")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.school.email && this.state.school.email === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="ending_date"
            label="Ending_date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.school.ending_date
                ? new Date(this.state.school.ending_date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "school", "ending_date")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <FormControlLabel
            control={
              <Switch
                id="is_enabled"
                checked={this.state.school.is_enabled || false}
                onChange={Utils.handleChangeCheck.bind(this, "school", "is_enabled")}
                color="primary"
              />
            }
            label="is_enabled"
            className="mt-20"
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.school.name || ""}
            onChange={Utils.handleChange.bind(this, "school")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.school.name && this.state.school.name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="phone"
            label="Phone"
            value={this.state.school.phone || ""}
            onChange={Utils.handleChange.bind(this, "school")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.school.phone && this.state.school.phone === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="school_code"
            label="School_code"
            value={this.state.school.school_code || ""}
            onChange={Utils.handleChange.bind(this, "school")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="starting_date"
            label="Starting_date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.school.starting_date
                ? new Date(this.state.school.starting_date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "school", "starting_date")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <DateTimePicker
            id="updated_at"
            label="Updated_at"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.school.updated_at
                ? new Date(this.state.school.updated_at)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "school", "updated_at")}
            fullWidth
            autoOk
            disableFuture
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with classses */}
          
          <h3>Classses</h3>
          {(!this.props.listClassses || this.props.listClassses.length === 0) && 
            <div>No Classses associated</div>
          }
          {this.props.listClassses &&
            this.props.listClassses.map((item, i) => {
              return (
                <Link to={"/classsess/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with User */}
          
          <h3>User</h3>
          {(!this.props.listUser || this.props.listUser.length === 0) && 
            <div>No User associated</div>
          }
          {this.props.listUser &&
            this.props.listUser.map((item, i) => {
              return (
                <Link to={"/users/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with Department */}
          
          <h3>Department</h3>
          {(!this.props.listDepartment || this.props.listDepartment.length === 0) && 
            <div>No Department associated</div>
          }
          {this.props.listDepartment &&
            this.props.listDepartment.map((item, i) => {
              return (
                <Link to={"/departments/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with Designation */}
          
          <h3>Designation</h3>
          {(!this.props.listDesignation || this.props.listDesignation.length === 0) && 
            <div>No Designation associated</div>
          }
          {this.props.listDesignation &&
            this.props.listDesignation.map((item, i) => {
              return (
                <Link to={"/designations/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with Staff */}
          
          <h3>Staff</h3>
          {(!this.props.listStaff || this.props.listStaff.length === 0) && 
            <div>No Staff associated</div>
          }
          {this.props.listStaff &&
            this.props.listStaff.map((item, i) => {
              return (
                <Link to={"/staffs/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with section */}
          
          <h3>Section</h3>
          {(!this.props.listSection || this.props.listSection.length === 0) && 
            <div>No Section associated</div>
          }
          {this.props.listSection &&
            this.props.listSection.map((item, i) => {
              return (
                <Link to={"/sections/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with student */}
          
          <h3>Student</h3>
          {(!this.props.listStudent || this.props.listStudent.length === 0) && 
            <div>No Student associated</div>
          }
          {this.props.listStudent &&
            this.props.listStudent.map((item, i) => {
              return (
                <Link to={"/students/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/schools/">Back to list</Link>

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
    actionsSchool: bindActionCreators(SchoolActions, dispatch),
    actionsClassses: bindActionCreators(ClasssesActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsSection: bindActionCreators(SectionActions, dispatch),
    actionsDepartment: bindActionCreators(DepartmentActions, dispatch),
    actionsDesignation: bindActionCreators(DesignationActions, dispatch),
    actionsStaff: bindActionCreators(StaffActions, dispatch),
  };
};

// Validate types
SchoolEdit.propTypes = { 
  actionsSchool: PropTypes.object.isRequired,
  actionsClassses: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
  actionsSection: PropTypes.object.isRequired,
  actionsDepartment: PropTypes.object.isRequired,
  actionsDesignation: PropTypes.object.isRequired,
  actionsStaff: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    school: state.SchoolEditReducer.school,
    listClassses: state.SchoolEditReducer.listClassses,
    listUser: state.SchoolEditReducer.listUser,
    listDepartment: state.SchoolEditReducer.listDepartment,
    listDesignation: state.SchoolEditReducer.listDesignation,
    listStaff: state.SchoolEditReducer.listStaff,
    listSection: state.SchoolEditReducer.listSection,
    listStudent: state.SchoolEditReducer.listStudent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SchoolEdit);
