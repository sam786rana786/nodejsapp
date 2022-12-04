import React, { Component } from "react";
import { Link } from "react-router-dom";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions
import UserActions from '../redux/actions/UserActions';

// START IMPORT ACTIONS

// END IMPORT ACTIONS

/** APIs

**/

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>

        <h3>Sitemap</h3>
                    
        <div>
          <Link to="/schools">Link to schoolList</Link>
        </div>
        <div>
          <Link to="/roleses">Link to rolesList</Link>
        </div>
        <div>
          <Link to="/students">Link to studentList</Link>
        </div>
        <div>
          <Link to="/genders">Link to genderList</Link>
        </div>
        <div>
          <Link to="/classseses">Link to classsesList</Link>
        </div>
        <div>
          <Link to="/academic_years">Link to academic_yearList</Link>
        </div>
        <div>
          <Link to="/sections">Link to sectionList</Link>
        </div>
        <div>
          <Link to="/departments">Link to DepartmentList</Link>
        </div>
        <div>
          <Link to="/designations">Link to DesignationList</Link>
        </div>
        <div>
          <Link to="/staffs">Link to StaffList</Link>
        </div>
        
            
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsUser: bindActionCreators(UserActions, dispatch)
  };
};

// Validate types
Home.propTypes = {
  actionsUser: PropTypes.object.isRequired
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    user: state.LoginReducer.user
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
