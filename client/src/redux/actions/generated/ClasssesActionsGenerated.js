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
 *  TO CUSTOMIZE FUNCTIONS IN ClasssesActionsGenerated.js PLEASE EDIT ../ClasssesActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import ClasssesApi from "../../../api/ClasssesApi";

let actionsFunction = {

  //CRUD METHODS

  // Create classses
  createClassses: function(classses) {
    return function(dispatch) {
      return ClasssesApi
        .createClassses(classses)
        .then(classses => {
          dispatch(actionsFunction.createClasssesSuccess(classses));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createClasssesSuccess: function(classses) {
    return { type: types.CREATE_CLASSSES_SUCCESS, payload: classses };
  },


  // Delete classses
  deleteClassses: function(id) {
    return function(dispatch) {
      return ClasssesApi
        .deleteClassses(id)
        .then(classses => {
          dispatch(actionsFunction.deleteClasssesSuccess(classses));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteClasssesSuccess: function(classses) {
    return { type: types.DELETE_CLASSSES_SUCCESS, payload: classses };
  },


  // Find by school_id
  findByschool_id: function(key) {
    return function(dispatch) {
      return ClasssesApi
        .findByschool_id(key)
        .then(item => {
          dispatch(actionsFunction.findByschool_idSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByschool_idSuccess: function(item) {
    return { type: types.FINDBYSCHOOL_ID_CLASSSES_SUCCESS, payload: item };
  },


  // Get classses
  loadClassses: function(id) {
    return function(dispatch) {
      return ClasssesApi
        .getOneClassses(id)
        .then(classses => {
          dispatch(actionsFunction.loadClasssesSuccess(classses));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadClasssesSuccess: function(classses) {
    return { type: types.GET_CLASSSES_SUCCESS, payload: classses };
  },

  // Load  list
  loadClasssesList: function() {
    return function(dispatch) {
      return ClasssesApi
        .getClasssesList()
        .then(list => {
          dispatch(actionsFunction.loadClasssesListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadClasssesListSuccess: function(list) {
    return { type: types.LIST_CLASSSES_SUCCESS, payload: list };
  },

	
  // Save classses
  saveClassses: function(classses) {
    return function(dispatch) {
      return ClasssesApi
        .saveClassses(classses)
        .then(classses => {
          dispatch(actionsFunction.saveClasssesSuccess(classses));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveClasssesSuccess: function(classses) {
    return { type: types.UPDATE_CLASSSES_SUCCESS, payload: classses };
  },


};

export default actionsFunction;
