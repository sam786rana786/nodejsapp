import actionsFunction from "./generated/SectionActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import sectionApi from "../../api/sectionApi";
 
 actionsFunction.loadsectionList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return sectionApi
     .getsectionList()
     .then(list => {
       dispatch(actionsFunction.loadsectionSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
