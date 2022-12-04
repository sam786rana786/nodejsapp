// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  student: {}
};

// Reducer
export default function studentEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_STUDENT_SUCCESS:
      return { ...state, student: action.payload };
    case types.UPDATE_STUDENT_SUCCESS:
      return { ...state, student: action.payload };
    case types.GET_STUDENT_SUCCESS:
      return { ...state, student: action.payload };
    case types.LIST_RELIGION_SUCCESS:
      return { ...state, listReligion: action.payload };
    case types.LIST_ROLES_SUCCESS:
      return { ...state, listRoles: action.payload };
    case types.LIST_BLOOD_GROUP_SUCCESS:
      return { ...state, listBlood_group: action.payload };
    case types.LIST_ACADEMIC_YEAR_SUCCESS:
      return { ...state, listAcademic_year: action.payload };
    case types.LIST_CLASSSES_SUCCESS:
      return { ...state, listClassses: action.payload };
    case types.LIST_USER_SUCCESS:
      return { ...state, listUser: action.payload };
    case types.LIST_SCHOOL_SUCCESS:
      return { ...state, listSchool: action.payload };
    case types.LIST_GENDER_SUCCESS:
      return { ...state, listGender: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}