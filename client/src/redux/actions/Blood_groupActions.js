import actionsFunction from "./generated/Blood_groupActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import blood_groupApi from "../../api/blood_groupApi";
 
 actionsFunction.loadblood_groupList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return blood_groupApi
     .getblood_groupList()
     .then(list => {
       dispatch(actionsFunction.loadblood_groupSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
