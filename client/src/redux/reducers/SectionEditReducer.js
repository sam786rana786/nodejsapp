// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  section: {}
};

// Reducer
export default function sectionEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_SECTION_SUCCESS:
      return { ...state, section: action.payload };
    case types.UPDATE_SECTION_SUCCESS:
      return { ...state, section: action.payload };
    case types.GET_SECTION_SUCCESS:
      return { ...state, section: action.payload };
    case types.LIST_CLASSSES_SUCCESS:
      return { ...state, listClassses: action.payload };
    case types.LIST_SCHOOL_SUCCESS:
      return { ...state, listSchool: action.payload };
    case types.LIST_ACADEMIC_YEAR_SUCCESS:
      return { ...state, listAcademic_year: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}