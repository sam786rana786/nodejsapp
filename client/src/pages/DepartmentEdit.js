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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// Custom Actions


// START IMPORT ACTIONS
import DepartmentActions from "../redux/actions/DepartmentActions";
import SchoolActions from "../redux/actions/SchoolActions";
import StaffActions from "../redux/actions/StaffActions";

// END IMPORT ACTIONS

/** APIs

* actionsDepartment.create
*	@description CRUD ACTION create
*
* actionsDepartment.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsDepartment.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsSchool.list
*	@description CRUD ACTION list
*
* actionsStaff.findBydepartment_id
*	@description CRUD ACTION findBydepartment_id
*	@param Objectid key - Id of model to search for
*

**/

class DepartmentEdit extends Component {
  // Init department
  constructor(props) {
    super(props);
    this.state = {
      department: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsDepartment.loadDepartment(this.props.match.params.id);
      this.props.actionsStaff.findBydepartment_id(this.props.match.params.id);
    }
    
    this.props.actionsSchool.loadSchoolList();
  }

  // Insert props department in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      department: props.department
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.department._id) {
      this.props.actionsDepartment.saveDepartment(this.state.department).then(data => {
        this.props.history.push("/departments/");
      });
    } else {
      this.props.actionsDepartment.createDepartment(this.state.department).then(data => {
        this.props.history.push("/departments/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Department Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <FormControlLabel
            control={
              <Switch
                id="active_status"
                checked={this.state.department.active_status || false}
                onChange={Utils.handleChangeCheck.bind(this, "department", "active_status")}
                color="primary"
              />
            }
            label="active_status"
            className="mt-20"
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.department.name || ""}
            onChange={Utils.handleChange.bind(this, "department")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="short_name"
            label="Short_name"
            value={this.state.department.short_name || ""}
            onChange={Utils.handleChange.bind(this, "department")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m school_id with school */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="school_id">
              School_id
            </InputLabel>
            <Select
              value={this.state.department.school_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "department")}
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
          
          
          {/* EXTERNAL RELATIONS */}
          
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

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/departments/">Back to list</Link>

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
    actionsDepartment: bindActionCreators(DepartmentActions, dispatch),
    actionsSchool: bindActionCreators(SchoolActions, dispatch),
    actionsStaff: bindActionCreators(StaffActions, dispatch),
  };
};

// Validate types
DepartmentEdit.propTypes = { 
  actionsDepartment: PropTypes.object.isRequired,
  actionsSchool: PropTypes.object.isRequired,
  actionsStaff: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    department: state.DepartmentEditReducer.department,
    listSchool: state.DepartmentEditReducer.listSchool,
    listStaff: state.DepartmentEditReducer.listStaff
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DepartmentEdit);
