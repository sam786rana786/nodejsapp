// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  designation: {}
};

// Reducer
export default function DesignationEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_DESIGNATION_SUCCESS:
      return { ...state, designation: action.payload };
    case types.UPDATE_DESIGNATION_SUCCESS:
      return { ...state, designation: action.payload };
    case types.GET_DESIGNATION_SUCCESS:
      return { ...state, designation: action.payload };
    case types.LIST_SCHOOL_SUCCESS:
      return { ...state, listSchool: action.payload };
    case types.FINDBYDESIGNATION_ID_STAFF_SUCCESS:
      return { ...state, listStaff: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}