import actionsFunction from "./generated/ClasssesActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import classsesApi from "../../api/classsesApi";
 
 actionsFunction.loadclasssesList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return classsesApi
     .getclasssesList()
     .then(list => {
       dispatch(actionsFunction.loadclasssesSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
