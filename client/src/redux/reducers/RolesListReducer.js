// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function rolesListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ROLES_SUCCESS:
      return { ...state, roles: action.payload };
    case types.LIST_ROLES_SUCCESS:
      return { ...state, listRoles: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}