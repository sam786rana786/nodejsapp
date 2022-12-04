// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import DepartmentEdit from "./pages/DepartmentEdit";
import DepartmentList from "./pages/DepartmentList";
import DesignationEdit from "./pages/DesignationEdit";
import DesignationList from "./pages/DesignationList";
import StaffEdit from "./pages/StaffEdit";
import StaffList from "./pages/StaffList";
import Academic_yearEdit from "./pages/Academic_yearEdit";
import Academic_yearList from "./pages/Academic_yearList";
import ClasssesEdit from "./pages/ClasssesEdit";
import ClasssesList from "./pages/ClasssesList";
import GenderEdit from "./pages/GenderEdit";
import GenderList from "./pages/GenderList";
import RolesEdit from "./pages/RolesEdit";
import RolesList from "./pages/RolesList";
import SchoolEdit from "./pages/SchoolEdit";
import SchoolList from "./pages/SchoolList";
import SectionEdit from "./pages/SectionEdit";
import SectionList from "./pages/SectionList";
import StudentEdit from "./pages/StudentEdit";
import StudentList from "./pages/StudentList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/departments/:id" component={ DepartmentEdit }  />
              <PrivateRoute exact path="/departments" component={ DepartmentList }  />
              <PrivateRoute exact path="/designations/:id" component={ DesignationEdit }  />
              <PrivateRoute exact path="/designations" component={ DesignationList }  />
              <PrivateRoute exact path="/staffs/:id" component={ StaffEdit }  />
              <PrivateRoute exact path="/staffs" component={ StaffList }  />
              <PrivateRoute exact path="/academic_years/:id" component={ Academic_yearEdit }  />
              <PrivateRoute exact path="/academic_years" component={ Academic_yearList }  />
              <PrivateRoute exact path="/classseses/:id" component={ ClasssesEdit }  />
              <PrivateRoute exact path="/classseses" component={ ClasssesList }  />
              <PrivateRoute exact path="/genders/:id" component={ GenderEdit }  />
              <PrivateRoute exact path="/genders" component={ GenderList }  />
              <PrivateRoute exact path="/roleses/:id" component={ RolesEdit }  />
              <PrivateRoute exact path="/roleses" component={ RolesList }  />
              <PrivateRoute exact path="/schools/:id" component={ SchoolEdit }  />
              <PrivateRoute exact path="/schools" component={ SchoolList }  />
              <PrivateRoute exact path="/sections/:id" component={ SectionEdit }  />
              <PrivateRoute exact path="/sections" component={ SectionList }  />
              <PrivateRoute exact path="/students/:id" component={ StudentEdit }  />
              <PrivateRoute exact path="/students" component={ StudentList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;