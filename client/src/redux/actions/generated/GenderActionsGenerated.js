/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN GenderActionsGenerated.js PLEASE EDIT ../GenderActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import GenderApi from "../../../api/GenderApi";

let actionsFunction = {

  //CRUD METHODS

  // Create gender
  createGender: function(gender) {
    return function(dispatch) {
      return GenderApi
        .createGender(gender)
        .then(gender => {
          dispatch(actionsFunction.createGenderSuccess(gender));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createGenderSuccess: function(gender) {
    return { type: types.CREATE_GENDER_SUCCESS, payload: gender };
  },


  // Delete gender
  deleteGender: function(id) {
    return function(dispatch) {
      return GenderApi
        .deleteGender(id)
        .then(gender => {
          dispatch(actionsFunction.deleteGenderSuccess(gender));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteGenderSuccess: function(gender) {
    return { type: types.DELETE_GENDER_SUCCESS, payload: gender };
  },


  // Get gender
  loadGender: function(id) {
    return function(dispatch) {
      return GenderApi
        .getOneGender(id)
        .then(gender => {
          dispatch(actionsFunction.loadGenderSuccess(gender));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadGenderSuccess: function(gender) {
    return { type: types.GET_GENDER_SUCCESS, payload: gender };
  },

  // Load  list
  loadGenderList: function() {
    return function(dispatch) {
      return GenderApi
        .getGenderList()
        .then(list => {
          dispatch(actionsFunction.loadGenderListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadGenderListSuccess: function(list) {
    return { type: types.LIST_GENDER_SUCCESS, payload: list };
  },

	
  // Save gender
  saveGender: function(gender) {
    return function(dispatch) {
      return GenderApi
        .saveGender(gender)
        .then(gender => {
          dispatch(actionsFunction.saveGenderSuccess(gender));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveGenderSuccess: function(gender) {
    return { type: types.UPDATE_GENDER_SUCCESS, payload: gender };
  },


};

export default actionsFunction;