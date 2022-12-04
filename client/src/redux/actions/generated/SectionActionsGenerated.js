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
 *  TO CUSTOMIZE FUNCTIONS IN SectionActionsGenerated.js PLEASE EDIT ../SectionActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import SectionApi from "../../../api/SectionApi";

let actionsFunction = {

  //CRUD METHODS

  // Create section
  createSection: function(section) {
    return function(dispatch) {
      return SectionApi
        .createSection(section)
        .then(section => {
          dispatch(actionsFunction.createSectionSuccess(section));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createSectionSuccess: function(section) {
    return { type: types.CREATE_SECTION_SUCCESS, payload: section };
  },


  // Delete section
  deleteSection: function(id) {
    return function(dispatch) {
      return SectionApi
        .deleteSection(id)
        .then(section => {
          dispatch(actionsFunction.deleteSectionSuccess(section));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteSectionSuccess: function(section) {
    return { type: types.DELETE_SECTION_SUCCESS, payload: section };
  },


  // Find by academic_id
  findByacademic_id: function(key) {
    return function(dispatch) {
      return SectionApi
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
    return { type: types.FINDBYACADEMIC_ID_SECTION_SUCCESS, payload: item };
  },


  // Find by classs_id
  findByclasss_id: function(key) {
    return function(dispatch) {
      return SectionApi
        .findByclasss_id(key)
        .then(item => {
          dispatch(actionsFunction.findByclasss_idSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByclasss_idSuccess: function(item) {
    return { type: types.FINDBYCLASSS_ID_SECTION_SUCCESS, payload: item };
  },


  // Find by school_id
  findByschool_id: function(key) {
    return function(dispatch) {
      return SectionApi
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
    return { type: types.FINDBYSCHOOL_ID_SECTION_SUCCESS, payload: item };
  },


  // Get section
  loadSection: function(id) {
    return function(dispatch) {
      return SectionApi
        .getOneSection(id)
        .then(section => {
          dispatch(actionsFunction.loadSectionSuccess(section));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadSectionSuccess: function(section) {
    return { type: types.GET_SECTION_SUCCESS, payload: section };
  },

  // Load  list
  loadSectionList: function() {
    return function(dispatch) {
      return SectionApi
        .getSectionList()
        .then(list => {
          dispatch(actionsFunction.loadSectionListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadSectionListSuccess: function(list) {
    return { type: types.LIST_SECTION_SUCCESS, payload: list };
  },

	
  // Save section
  saveSection: function(section) {
    return function(dispatch) {
      return SectionApi
        .saveSection(section)
        .then(section => {
          dispatch(actionsFunction.saveSectionSuccess(section));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveSectionSuccess: function(section) {
    return { type: types.UPDATE_SECTION_SUCCESS, payload: section };
  },


};

export default actionsFunction;
