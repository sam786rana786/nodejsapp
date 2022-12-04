import DesignationApiGenerated from "./generated/DesignationApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class DesignationApi extends DesignationApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Designation List
  static getDesignationList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/designations")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default DesignationApi;