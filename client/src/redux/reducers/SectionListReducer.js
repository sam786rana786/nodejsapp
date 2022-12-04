// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function sectionListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_SECTION_SUCCESS:
      return { ...state, section: action.payload };
    case types.LIST_SECTION_SUCCESS:
      return { ...state, listSection: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}