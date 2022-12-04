// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function StaffListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_STAFF_SUCCESS:
      return { ...state, staff: action.payload };
    case types.LIST_STAFF_SUCCESS:
      return { ...state, listStaff: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}