// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function schoolListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_SCHOOL_SUCCESS:
      return { ...state, school: action.payload };
    case types.LIST_SCHOOL_SUCCESS:
      return { ...state, listSchool: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}