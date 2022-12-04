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
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import SectionActions from "../redux/actions/SectionActions";
import ClasssesActions from "../redux/actions/ClasssesActions";
import SchoolActions from "../redux/actions/SchoolActions";
import Academic_yearActions from "../redux/actions/Academic_yearActions";

// END IMPORT ACTIONS

/** APIs

* actionsSection.create
*	@description CRUD ACTION create
*
* actionsSection.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsSection.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsClassses.list
*	@description CRUD ACTION list
*
* actionsSchool.list
*	@description CRUD ACTION list
*
* actionsAcademic_year.list
*	@description CRUD ACTION list
*

**/

class SectionEdit extends Component {
  // Init section
  constructor(props) {
    super(props);
    this.state = {
      section: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsSection.loadSection(this.props.match.params.id);
    }
    
    this.props.actionsAcademic_year.loadAcademic_yearList();
    this.props.actionsClassses.loadClasssesList();
    this.props.actionsSchool.loadSchoolList();
  }

  // Insert props section in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      section: props.section
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.section._id) {
      this.props.actionsSection.saveSection(this.state.section).then(data => {
        this.props.history.push("/sections/");
      });
    } else {
      this.props.actionsSection.createSection(this.state.section).then(data => {
        this.props.history.push("/sections/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Section Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <FormControlLabel
            control={
              <Switch
                id="active_status"
                checked={this.state.section.active_status || false}
                onChange={Utils.handleChangeCheck.bind(this, "section", "active_status")}
                color="primary"
              />
            }
            label="active_status"
            className="mt-20"
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.section.name || ""}
            onChange={Utils.handleChange.bind(this, "section")}
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
              value={this.state.section.academic_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "section")}
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
          
          
          {/* Relation m:m classs_id with classses */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="classs_id">Classs_id</InputLabel>
            <Select
              multiple
              value={this.state.section.classs_id || []}
              onChange={Utils.handleChangeSelect.bind(this, "section")}
              input={<Input id="classs_id" name="classs_id" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listClassses && this.props.listClassses.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.section.classs_id &&
                      this.state.section.classs_id.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
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
              value={this.state.section.school_id || ""}
              onChange={Utils.handleChangeSelect.bind(this, "section")}
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
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/sections/">Back to list</Link>

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
    actionsSection: bindActionCreators(SectionActions, dispatch),
    actionsClassses: bindActionCreators(ClasssesActions, dispatch),
    actionsSchool: bindActionCreators(SchoolActions, dispatch),
    actionsAcademic_year: bindActionCreators(Academic_yearActions, dispatch),
  };
};

// Validate types
SectionEdit.propTypes = { 
  actionsSection: PropTypes.object.isRequired,
  actionsClassses: PropTypes.object.isRequired,
  actionsSchool: PropTypes.object.isRequired,
  actionsAcademic_year: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    section: state.SectionEditReducer.section,
    listAcademic_year: state.SectionEditReducer.listAcademic_year,
    listClassses: state.SectionEditReducer.listClassses,
    listSchool: state.SectionEditReducer.listSchool
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SectionEdit);
