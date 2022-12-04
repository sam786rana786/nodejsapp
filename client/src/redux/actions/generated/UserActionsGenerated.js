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
 *  TO CUSTOMIZE FUNCTIONS IN UserActionsGenerated.js PLEASE EDIT ../UserActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import UserApi from "../../../api/UserApi";

let actionsFunction = {

  //CRUD METHODS

  // Create user
  createUser: function(user) {
    return function(dispatch) {
      return UserApi
        .createUser(user)
        .then(user => {
          dispatch(actionsFunction.createUserSuccess(user));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createUserSuccess: function(user) {
    return { type: types.CREATE_USER_SUCCESS, payload: user };
  },


  // Delete user
  deleteUser: function(id) {
    return function(dispatch) {
      return UserApi
        .deleteUser(id)
        .then(user => {
          dispatch(actionsFunction.deleteUserSuccess(user));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteUserSuccess: function(user) {
    return { type: types.DELETE_USER_SUCCESS, payload: user };
  },


  // Find by academic_id
  findByacademic_id: function(key) {
    return function(dispatch) {
      return UserApi
        .findByacademic_id(key)
        .then(item => {
          dispatch(actionsFunction.findByacademic_idSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByacademic_idSuccess: function(item) {
    return { type: types.FINDBYACADEMIC_ID_USER_SUCCESS, payload: item };
  },


  // Find by role_id
  findByrole_id: function(key) {
    return function(dispatch) {
      return UserApi
        .findByrole_id(key)
        .then(item => {
          dispatch(actionsFunction.findByrole_idSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByrole_idSuccess: function(item) {
    return { type: types.FINDBYROLE_ID_USER_SUCCESS, payload: item };
  },


  // Find by school_id
  findByschool_id: function(key) {
    return function(dispatch) {
      return UserApi
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
    return { type: types.FINDBYSCHOOL_ID_USER_SUCCESS, payload: item };
  },


  // Get user
  loadUser: function(id) {
    return function(dispatch) {
      return UserApi
        .getOneUser(id)
        .then(user => {
          dispatch(actionsFunction.loadUserSuccess(user));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadUserSuccess: function(user) {
    return { type: types.GET_USER_SUCCESS, payload: user };
  },

  // Load  list
  loadUserList: function() {
    return function(dispatch) {
      return UserApi
        .getUserList()
        .then(list => {
          dispatch(actionsFunction.loadUserListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadUserListSuccess: function(list) {
    return { type: types.LIST_USER_SUCCESS, payload: list };
  },

	
  // Save user
  saveUser: function(user) {
    return function(dispatch) {
      return UserApi
        .saveUser(user)
        .then(user => {
          dispatch(actionsFunction.saveUserSuccess(user));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveUserSuccess: function(user) {
    return { type: types.UPDATE_USER_SUCCESS, payload: user };
  },


  /*
  Name: changePassword
  Description: Change password of user from admin
  Params: 
  */
  changePassword: function(...params) {
    return function(dispatch) {
      return UserApi
        .changePassword(params)
        .then( result => {
          dispatch(actionsFunction.changePasswordSuccess(result));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  changePasswordSuccess: function(result) {
    return { type: types.CHANGEPASSWORD_USER_SUCCESS, payload: result };
  },
		
};

export default actionsFunction;
