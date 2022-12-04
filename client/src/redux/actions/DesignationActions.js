import actionsFunction from "./generated/DesignationActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import DesignationApi from "../../api/DesignationApi";
 
 actionsFunction.loadDesignationList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return DesignationApi
     .getDesignationList()
     .then(list => {
       dispatch(actionsFunction.loadDesignationSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
