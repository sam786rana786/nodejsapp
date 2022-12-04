import actionsFunction from "./generated/ReligionActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import religionApi from "../../api/religionApi";
 
 actionsFunction.loadreligionList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return religionApi
     .getreligionList()
     .then(list => {
       dispatch(actionsFunction.loadreligionSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
