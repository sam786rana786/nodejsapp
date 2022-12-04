// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  department: {}
};

// Reducer
export default function DepartmentEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_DEPARTMENT_SUCCESS:
      return { ...state, department: action.payload };
    case types.UPDATE_DEPARTMENT_SUCCESS:
      return { ...state, department: action.payload };
    case types.GET_DEPARTMENT_SUCCESS:
      return { ...state, department: action.payload };
    case types.LIST_SCHOOL_SUCCESS:
      return { ...state, listSchool: action.payload };
    case types.FINDBYDEPARTMENT_ID_STAFF_SUCCESS:
      return { ...state, listStaff: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}