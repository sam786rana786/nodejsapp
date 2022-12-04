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
import Academic_yearActions from "../redux/actions/Academic_yearActions";
import StudentActions from "../redux/actions/StudentActions";
import SectionActions from "../redux/actions/SectionActions";

// END IMPORT ACTIONS

/** APIs

* actionsAcademic_year.create
*	@description CRUD ACTION create
*
* actionsAcademic_year.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsAcademic_year.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsUser.findByacademic_id
*	@description CRUD ACTION findByacademic_id
*	@param Objectid key - Id of model to search for
*
* actionsStudent.findByacademic_id
*	@description CRUD ACTION findByacademic_id
*	@param Objectid key - Id of model to search for
*
* actionsSection.findByacademic_id
*	@description CRUD ACTION findByacademic_id
*	@param Objectid key - Id of model to search for
*

**/

class Academic_yearEdit extends Component {
  // Init academic_year
  constructor(props) {
    super(props);
    this.state = {
      academic_year: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsAcademic_year.loadAcademic_year(this.props.match.params.id);
      this.props.actionsUser.findByacademic_id(this.props.match.params.id);
      this.props.actionsSection.findByacademic_id(this.props.match.params.id);
      this.props.actionsStudent.findByacademic_id(this.props.match.params.id);
    }
    
  }

  // Insert props academic_year in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      academic_year: props.academic_year
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.academic_year._id) {
      this.props.actionsAcademic_year.saveAcademic_year(this.state.academic_year).then(data => {
        this.props.history.push("/academic_years/");
      });
    } else {
      this.props.actionsAcademic_year.createAcademic_year(this.state.academic_year).then(data => {
        this.props.history.push("/academic_years/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Academic_year Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <FormControlLabel
            control={
              <Switch
                id="active_status"
                checked={this.state.academic_year.active_status || false}
                onChange={Utils.handleChangeCheck.bind(this, "academic_year", "active_status")}
                color="primary"
              />
            }
            label="active_status"
            className="mt-20"
          />
          
          <DateTimePicker
            id="ending_date"
            label="Ending_date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.academic_year.ending_date
                ? new Date(this.state.academic_year.ending_date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "academic_year", "ending_date")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <DateTimePicker
            id="starting_date"
            label="Starting_date"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.academic_year.starting_date
                ? new Date(this.state.academic_year.starting_date)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "academic_year", "starting_date")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="title"
            label="Title"
            value={this.state.academic_year.title || ""}
            onChange={Utils.handleChange.bind(this, "academic_year")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="year"
            label="Year"
            value={this.state.academic_year.year || ""}
            onChange={Utils.handleChange.bind(this, "academic_year")}
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
            <Link to="/academic_years/">Back to list</Link>

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
    actionsAcademic_year: bindActionCreators(Academic_yearActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsSection: bindActionCreators(SectionActions, dispatch),
  };
};

// Validate types
Academic_yearEdit.propTypes = { 
  actionsAcademic_year: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
  actionsSection: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    academic_year: state.Academic_yearEditReducer.academic_year,
    listUser: state.Academic_yearEditReducer.listUser,
    listSection: state.Academic_yearEditReducer.listSection,
    listStudent: state.Academic_yearEditReducer.listStudent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Academic_yearEdit);
