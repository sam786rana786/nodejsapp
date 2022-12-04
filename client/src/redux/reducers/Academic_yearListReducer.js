// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function academic_yearListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ACADEMIC_YEAR_SUCCESS:
      return { ...state, academic_year: action.payload };
    case types.LIST_ACADEMIC_YEAR_SUCCESS:
      return { ...state, listAcademic_year: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}