// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function DepartmentListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_DEPARTMENT_SUCCESS:
      return { ...state, department: action.payload };
    case types.LIST_DEPARTMENT_SUCCESS:
      return { ...state, listDepartment: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}