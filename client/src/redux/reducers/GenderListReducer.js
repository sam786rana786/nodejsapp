// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function genderListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_GENDER_SUCCESS:
      return { ...state, gender: action.payload };
    case types.LIST_GENDER_SUCCESS:
      return { ...state, listGender: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}