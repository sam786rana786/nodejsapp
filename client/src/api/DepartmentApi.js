import DepartmentApiGenerated from "./generated/DepartmentApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class DepartmentApi extends DepartmentApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Department List
  static getDepartmentList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/departments")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default DepartmentApi;