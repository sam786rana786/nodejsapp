import actionsFunction from "./generated/DepartmentActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import DepartmentApi from "../../api/DepartmentApi";
 
 actionsFunction.loadDepartmentList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return DepartmentApi
     .getDepartmentList()
     .then(list => {
       dispatch(actionsFunction.loadDepartmentSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
