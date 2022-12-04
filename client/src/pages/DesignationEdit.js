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
import DesignationActions from "../redux/actions/DesignationActions";
import SchoolActions from "../redux/actions/SchoolActions";
import StaffActions from "../redux/actions/StaffActions";

// END IMPORT ACTIONS

/** APIs

* actionsDesignation.create
*	@description CRUD ACTION create
*
* actionsDesignation.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsDesignation.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsSchool.list
*	@description CRUD ACTION list
*
* actionsStaff.findBydesignation_id
*	@description CRUD ACTION findBydesignation_id
*	@param Objectid key - Id of model to search for
*

**/

class DesignationEdit extends Component {
  // Init designation
  constructor(props) {
    super(props);
    this.state = {
      designation: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsDesignation.loadDesignation(this.props.match.params.id);
      this.props.actionsStaff.findBydesignation_id(this.props.match.params.id);
    }
    
    this.props.actionsSchool.loadSchoolList();
  }

  // Insert props designation in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      designation: props.designation
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.designation._id) {
      this.props.actionsDesignation.saveDesignation(this.state.designation).then(data => {
        this.props.history.push("/designations/");
      });
    } else {
      this.props.actionsDesignation.createDesignation(this.state.designation).then(data => {
        this.props.history.push("/designations/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Designation Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <FormControlLabel
            control={
              <Switch
                id="active_status"
                checked={this.state.designation.active_status || false}
                onChange={Utils.handleChangeCheck.bind(this, "designation", "active_status")}
                color="primary"
              />
            }
            label="active_status"
            className="mt-20"
          />
          
          
          <TextField
            id="title"
            label="Title"
            value={this.state.designation.title || ""}
            onChange={Utils.handleChange.bind(this, "designation")}
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
              value={this.state.designation.school_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "designation")}
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
            <Link to="/designations/">Back to list</Link>

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
    actionsDesignation: bindActionCreators(DesignationActions, dispatch),
    actionsSchool: bindActionCreators(SchoolActions, dispatch),
    actionsStaff: bindActionCreators(StaffActions, dispatch),
  };
};

// Validate types
DesignationEdit.propTypes = { 
  actionsDesignation: PropTypes.object.isRequired,
  actionsSchool: PropTypes.object.isRequired,
  actionsStaff: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    designation: state.DesignationEditReducer.designation,
    listSchool: state.DesignationEditReducer.listSchool,
    listStaff: state.DesignationEditReducer.listStaff
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesignationEdit);
