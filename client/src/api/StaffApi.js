import StaffApiGenerated from "./generated/StaffApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class StaffApi extends StaffApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Staff List
  static getStaffList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/staffs")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default StaffApi;