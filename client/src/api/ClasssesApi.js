import ClasssesApiGenerated from "./generated/ClasssesApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ClasssesApi extends ClasssesApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Classses List
  static getClasssesList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/classsess")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ClasssesApi;