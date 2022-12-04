// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function classsesListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_CLASSSES_SUCCESS:
      return { ...state, classses: action.payload };
    case types.LIST_CLASSSES_SUCCESS:
      return { ...state, listClassses: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}