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

// Custom Actions


// START IMPORT ACTIONS
import GenderActions from "../redux/actions/GenderActions";
import StudentActions from "../redux/actions/StudentActions";
import StaffActions from "../redux/actions/StaffActions";

// END IMPORT ACTIONS

/** APIs

* actionsGender.create
*	@description CRUD ACTION create
*
* actionsGender.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsGender.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsStudent.findBygender_id
*	@description CRUD ACTION findBygender_id
*	@param Objectid key - Id of model to search for
*
* actionsStaff.findBygender_id
*	@description CRUD ACTION findBygender_id
*	@param Objectid key - Id of model to search for
*

**/

class GenderEdit extends Component {
  // Init gender
  constructor(props) {
    super(props);
    this.state = {
      gender: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsGender.loadGender(this.props.match.params.id);
      this.props.actionsStaff.findBygender_id(this.props.match.params.id);
      this.props.actionsStudent.findBygender_id(this.props.match.params.id);
    }
    
  }

  // Insert props gender in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      gender: props.gender
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.gender._id) {
      this.props.actionsGender.saveGender(this.state.gender).then(data => {
        this.props.history.push("/genders/");
      });
    } else {
      this.props.actionsGender.createGender(this.state.gender).then(data => {
        this.props.history.push("/genders/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Gender Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="name"
            label="Name"
            value={this.state.gender.name || ""}
            onChange={Utils.handleChange.bind(this, "gender")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="short_name"
            label="Short_name"
            value={this.state.gender.short_name || ""}
            onChange={Utils.handleChange.bind(this, "gender")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

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
            <Link to="/genders/">Back to list</Link>

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
    actionsGender: bindActionCreators(GenderActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsStaff: bindActionCreators(StaffActions, dispatch),
  };
};

// Validate types
GenderEdit.propTypes = { 
  actionsGender: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
  actionsStaff: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    gender: state.GenderEditReducer.gender,
    listStaff: state.GenderEditReducer.listStaff,
    listStudent: state.GenderEditReducer.listStudent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenderEdit);
