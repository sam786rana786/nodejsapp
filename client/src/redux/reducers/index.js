import { combineReducers } from "redux";

// START IMPORT REDUCERS
import DepartmentEditReducer from "./DepartmentEditReducer";
import DepartmentListReducer from "./DepartmentListReducer";
import DesignationEditReducer from "./DesignationEditReducer";
import DesignationListReducer from "./DesignationListReducer";
import HomeReducer from "./HomeReducer";
import StaffEditReducer from "./StaffEditReducer";
import StaffListReducer from "./StaffListReducer";
import Academic_yearEditReducer from "./Academic_yearEditReducer";
import Academic_yearListReducer from "./Academic_yearListReducer";
import ClasssesEditReducer from "./ClasssesEditReducer";
import ClasssesListReducer from "./ClasssesListReducer";
import GenderEditReducer from "./GenderEditReducer";
import GenderListReducer from "./GenderListReducer";
import RolesEditReducer from "./RolesEditReducer";
import RolesListReducer from "./RolesListReducer";
import SchoolEditReducer from "./SchoolEditReducer";
import SchoolListReducer from "./SchoolListReducer";
import SectionEditReducer from "./SectionEditReducer";
import SectionListReducer from "./SectionListReducer";
import StudentEditReducer from "./StudentEditReducer";
import StudentListReducer from "./StudentListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	DepartmentEditReducer,
	DepartmentListReducer,
	DesignationEditReducer,
	DesignationListReducer,
	HomeReducer,
	StaffEditReducer,
	StaffListReducer,
	Academic_yearEditReducer,
	Academic_yearListReducer,
	ClasssesEditReducer,
	ClasssesListReducer,
	GenderEditReducer,
	GenderListReducer,
	RolesEditReducer,
	RolesListReducer,
	SchoolEditReducer,
	SchoolListReducer,
	SectionEditReducer,
	SectionListReducer,
	StudentEditReducer,
	StudentListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
