// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  classses: {}
};

// Reducer
export default function classsesEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_CLASSSES_SUCCESS:
      return { ...state, classses: action.payload };
    case types.UPDATE_CLASSSES_SUCCESS:
      return { ...state, classses: action.payload };
    case types.GET_CLASSSES_SUCCESS:
      return { ...state, classses: action.payload };
    case types.LIST_SCHOOL_SUCCESS:
      return { ...state, listSchool: action.payload };
    case types.FINDBYCLASSS_ID_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.FINDBYCLASSS_ID_SECTION_SUCCESS:
      return { ...state, listSection: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}