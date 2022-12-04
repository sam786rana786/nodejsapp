// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function DesignationListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_DESIGNATION_SUCCESS:
      return { ...state, designation: action.payload };
    case types.LIST_DESIGNATION_SUCCESS:
      return { ...state, listDesignation: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}