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
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// Custom Actions


// START IMPORT ACTIONS
import RolesActions from "../redux/actions/RolesActions";
import StudentActions from "../redux/actions/StudentActions";
import StaffActions from "../redux/actions/StaffActions";

// END IMPORT ACTIONS

/** APIs

* actionsRoles.create
*	@description CRUD ACTION create
*
* actionsRoles.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsRoles.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsUser.findByrole_id
*	@description CRUD ACTION findByrole_id
*	@param Objectid key - Id of model to search for
*
* actionsStudent.findByrole_id
*	@description CRUD ACTION findByrole_id
*	@param Objectid key - Id of model to search for
*
* actionsStaff.findByrole_id
*	@description CRUD ACTION findByrole_id
*	@param Objectid key - Id of model to search for
*

**/

class RolesEdit extends Component {
  // Init roles
  constructor(props) {
    super(props);
    this.state = {
      roles: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsRoles.loadRoles(this.props.match.params.id);
      this.props.actionsUser.findByrole_id(this.props.match.params.id);
      this.props.actionsStaff.findByrole_id(this.props.match.params.id);
      this.props.actionsStudent.findByrole_id(this.props.match.params.id);
    }
    
  }

  // Insert props roles in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      roles: props.roles
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.roles._id) {
      this.props.actionsRoles.saveRoles(this.state.roles).then(data => {
        this.props.history.push("/roleses/");
      });
    } else {
      this.props.actionsRoles.createRoles(this.state.roles).then(data => {
        this.props.history.push("/roleses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Roles Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <FormControlLabel
            control={
              <Switch
                id="active_status"
                checked={this.state.roles.active_status || false}
                onChange={Utils.handleChangeCheck.bind(this, "roles", "active_status")}
                color="primary"
              />
            }
            label="active_status"
            className="mt-20"
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.roles.name || ""}
            onChange={Utils.handleChange.bind(this, "roles")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="type"
            label="Type"
            value={this.state.roles.type || ""}
            onChange={Utils.handleChange.bind(this, "roles")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
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
            <Link to="/roleses/">Back to list</Link>

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
    actionsRoles: bindActionCreators(RolesActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsStaff: bindActionCreators(StaffActions, dispatch),
  };
};

// Validate types
RolesEdit.propTypes = { 
  actionsRoles: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
  actionsStaff: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    roles: state.RolesEditReducer.roles,
    listUser: state.RolesEditReducer.listUser,
    listStaff: state.RolesEditReducer.listStaff,
    listStudent: state.RolesEditReducer.listStudent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RolesEdit);
