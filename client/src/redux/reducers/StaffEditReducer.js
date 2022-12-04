// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  staff: {}
};

// Reducer
export default function StaffEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_STAFF_SUCCESS:
      return { ...state, staff: action.payload };
    case types.UPDATE_STAFF_SUCCESS:
      return { ...state, staff: action.payload };
    case types.GET_STAFF_SUCCESS:
      return { ...state, staff: action.payload };
    case types.LIST_DEPARTMENT_SUCCESS:
      return { ...state, listDepartment: action.payload };
    case types.LIST_USER_SUCCESS:
      return { ...state, listUser: action.payload };
    case types.LIST_DESIGNATION_SUCCESS:
      return { ...state, listDesignation: action.payload };
    case types.LIST_RELIGION_SUCCESS:
      return { ...state, listReligion: action.payload };
    case types.LIST_ROLES_SUCCESS:
      return { ...state, listRoles: action.payload };
    case types.LIST_SCHOOL_SUCCESS:
      return { ...state, listSchool: action.payload };
    case types.LIST_GENDER_SUCCESS:
      return { ...state, listGender: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}