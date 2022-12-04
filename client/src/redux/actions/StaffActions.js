import actionsFunction from "./generated/StaffActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import StaffApi from "../../api/StaffApi";
 
 actionsFunction.loadStaffList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return StaffApi
     .getStaffList()
     .then(list => {
       dispatch(actionsFunction.loadStaffSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
