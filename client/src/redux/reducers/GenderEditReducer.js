// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  gender: {}
};

// Reducer
export default function genderEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_GENDER_SUCCESS:
      return { ...state, gender: action.payload };
    case types.UPDATE_GENDER_SUCCESS:
      return { ...state, gender: action.payload };
    case types.GET_GENDER_SUCCESS:
      return { ...state, gender: action.payload };
    case types.FINDBYGENDER_ID_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.FINDBYGENDER_ID_STAFF_SUCCESS:
      return { ...state, listStaff: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}