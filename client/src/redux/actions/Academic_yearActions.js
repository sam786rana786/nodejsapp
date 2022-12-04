import actionsFunction from "./generated/Academic_yearActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import academic_yearApi from "../../api/academic_yearApi";
 
 actionsFunction.loadacademic_yearList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return academic_yearApi
     .getacademic_yearList()
     .then(list => {
       dispatch(actionsFunction.loadacademic_yearSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
