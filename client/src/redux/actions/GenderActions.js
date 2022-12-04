import actionsFunction from "./generated/GenderActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import genderApi from "../../api/genderApi";
 
 actionsFunction.loadgenderList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return genderApi
     .getgenderList()
     .then(list => {
       dispatch(actionsFunction.loadgenderSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
