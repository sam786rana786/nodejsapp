// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  academic_year: {}
};

// Reducer
export default function academic_yearEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ACADEMIC_YEAR_SUCCESS:
      return { ...state, academic_year: action.payload };
    case types.UPDATE_ACADEMIC_YEAR_SUCCESS:
      return { ...state, academic_year: action.payload };
    case types.GET_ACADEMIC_YEAR_SUCCESS:
      return { ...state, academic_year: action.payload };
    case types.FINDBYACADEMIC_ID_USER_SUCCESS:
      return { ...state, listUser: action.payload };
    case types.FINDBYACADEMIC_ID_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.FINDBYACADEMIC_ID_SECTION_SUCCESS:
      return { ...state, listSection: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}