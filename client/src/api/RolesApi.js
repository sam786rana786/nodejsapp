import RolesApiGenerated from "./generated/RolesApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class RolesApi extends RolesApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Roles List
  static getRolesList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/roless")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default RolesApi;