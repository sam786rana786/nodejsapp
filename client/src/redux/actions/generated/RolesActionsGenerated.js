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
 *  TO CUSTOMIZE FUNCTIONS IN RolesActionsGenerated.js PLEASE EDIT ../RolesActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import RolesApi from "../../../api/RolesApi";

let actionsFunction = {

  //CRUD METHODS

  // Create roles
  createRoles: function(roles) {
    return function(dispatch) {
      return RolesApi
        .createRoles(roles)
        .then(roles => {
          dispatch(actionsFunction.createRolesSuccess(roles));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createRolesSuccess: function(roles) {
    return { type: types.CREATE_ROLES_SUCCESS, payload: roles };
  },


  // Delete roles
  deleteRoles: function(id) {
    return function(dispatch) {
      return RolesApi
        .deleteRoles(id)
        .then(roles => {
          dispatch(actionsFunction.deleteRolesSuccess(roles));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteRolesSuccess: function(roles) {
    return { type: types.DELETE_ROLES_SUCCESS, payload: roles };
  },


  // Get roles
  loadRoles: function(id) {
    return function(dispatch) {
      return RolesApi
        .getOneRoles(id)
        .then(roles => {
          dispatch(actionsFunction.loadRolesSuccess(roles));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadRolesSuccess: function(roles) {
    return { type: types.GET_ROLES_SUCCESS, payload: roles };
  },

  // Load  list
  loadRolesList: function() {
    return function(dispatch) {
      return RolesApi
        .getRolesList()
        .then(list => {
          dispatch(actionsFunction.loadRolesListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadRolesListSuccess: function(list) {
    return { type: types.LIST_ROLES_SUCCESS, payload: list };
  },

	
  // Save roles
  saveRoles: function(roles) {
    return function(dispatch) {
      return RolesApi
        .saveRoles(roles)
        .then(roles => {
          dispatch(actionsFunction.saveRolesSuccess(roles));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveRolesSuccess: function(roles) {
    return { type: types.UPDATE_ROLES_SUCCESS, payload: roles };
  },


};

export default actionsFunction;
