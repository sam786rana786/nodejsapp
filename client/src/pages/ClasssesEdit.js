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
import ClasssesActions from "../redux/actions/ClasssesActions";
import SchoolActions from "../redux/actions/SchoolActions";
import StudentActions from "../redux/actions/StudentActions";
import SectionActions from "../redux/actions/SectionActions";

// END IMPORT ACTIONS

/** APIs

* actionsClassses.create
*	@description CRUD ACTION create
*
* actionsClassses.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsClassses.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsSchool.list
*	@description CRUD ACTION list
*
* actionsStudent.findByclasss_id
*	@description CRUD ACTION findByclasss_id
*	@param Objectid key - Id of model to search for
*
* actionsSection.findByclasss_id
*	@description CRUD ACTION findByclasss_id
*	@param Objectid key - Id of model to search for
*

**/

class ClasssesEdit extends Component {
  // Init classses
  constructor(props) {
    super(props);
    this.state = {
      classses: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsClassses.loadClassses(this.props.match.params.id);
      this.props.actionsSection.findByclasss_id(this.props.match.params.id);
      this.props.actionsStudent.findByclasss_id(this.props.match.params.id);
    }
    
    this.props.actionsSchool.loadSchoolList();
  }

  // Insert props classses in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      classses: props.classses
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.classses._id) {
      this.props.actionsClassses.saveClassses(this.state.classses).then(data => {
        this.props.history.push("/classseses/");
      });
    } else {
      this.props.actionsClassses.createClassses(this.state.classses).then(data => {
        this.props.history.push("/classseses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Classses Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <FormControlLabel
            control={
              <Switch
                id="active_status"
                checked={this.state.classses.active_status || false}
                onChange={Utils.handleChangeCheck.bind(this, "classses", "active_status")}
                color="primary"
              />
            }
            label="active_status"
            className="mt-20"
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.classses.name || ""}
            onChange={Utils.handleChange.bind(this, "classses")}
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
              value={this.state.classses.school_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "classses")}
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
            <Link to="/classseses/">Back to list</Link>

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
    actionsClassses: bindActionCreators(ClasssesActions, dispatch),
    actionsSchool: bindActionCreators(SchoolActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsSection: bindActionCreators(SectionActions, dispatch),
  };
};

// Validate types
ClasssesEdit.propTypes = { 
  actionsClassses: PropTypes.object.isRequired,
  actionsSchool: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
  actionsSection: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    classses: state.ClasssesEditReducer.classses,
    listSchool: state.ClasssesEditReducer.listSchool,
    listSection: state.ClasssesEditReducer.listSection,
    listStudent: state.ClasssesEditReducer.listStudent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClasssesEdit);
