// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  roles: {}
};

// Reducer
export default function rolesEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ROLES_SUCCESS:
      return { ...state, roles: action.payload };
    case types.UPDATE_ROLES_SUCCESS:
      return { ...state, roles: action.payload };
    case types.GET_ROLES_SUCCESS:
      return { ...state, roles: action.payload };
    case types.FINDBYROLE_ID_USER_SUCCESS:
      return { ...state, listUser: action.payload };
    case types.FINDBYROLE_ID_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.FINDBYROLE_ID_STAFF_SUCCESS:
      return { ...state, listStaff: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}