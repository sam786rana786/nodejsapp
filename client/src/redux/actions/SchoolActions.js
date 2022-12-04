import actionsFunction from "./generated/SchoolActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import schoolApi from "../../api/schoolApi";
 
 actionsFunction.loadschoolList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return schoolApi
     .getschoolList()
     .then(list => {
       dispatch(actionsFunction.loadschoolSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
