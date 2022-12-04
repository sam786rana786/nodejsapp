import ReligionApiGenerated from "./generated/ReligionApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ReligionApi extends ReligionApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Religion List
  static getReligionList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/religions")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ReligionApi;