// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  school: {}
};

// Reducer
export default function schoolEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_SCHOOL_SUCCESS:
      return { ...state, school: action.payload };
    case types.UPDATE_SCHOOL_SUCCESS:
      return { ...state, school: action.payload };
    case types.GET_SCHOOL_SUCCESS:
      return { ...state, school: action.payload };
    case types.FINDBYSCHOOL_ID_CLASSSES_SUCCESS:
      return { ...state, listClassses: action.payload };
    case types.FINDBYSCHOOL_ID_USER_SUCCESS:
      return { ...state, listUser: action.payload };
    case types.FINDBYSCHOOL_ID_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.FINDBYSCHOOL_ID_SECTION_SUCCESS:
      return { ...state, listSection: action.payload };
    case types.FINDBYSCHOOL_ID_DEPARTMENT_SUCCESS:
      return { ...state, listDepartment: action.payload };
    case types.FINDBYSCHOOL_ID_DESIGNATION_SUCCESS:
      return { ...state, listDesignation: action.payload };
    case types.FINDBYSCHOOL_ID_STAFF_SUCCESS:
      return { ...state, listStaff: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}