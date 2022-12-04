import actionsFunction from "./generated/RolesActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import rolesApi from "../../api/rolesApi";
 
 actionsFunction.loadrolesList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return rolesApi
     .getrolesList()
     .then(list => {
       dispatch(actionsFunction.loadrolesSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
