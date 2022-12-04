import Blood_groupApiGenerated from "./generated/Blood_groupApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class Blood_groupApi extends Blood_groupApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Blood_group List
  static getBlood_groupList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/blood_groups")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default Blood_groupApi;