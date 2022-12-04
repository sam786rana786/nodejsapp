import GenderApiGenerated from "./generated/GenderApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class GenderApi extends GenderApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Gender List
  static getGenderList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/genders")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default GenderApi;