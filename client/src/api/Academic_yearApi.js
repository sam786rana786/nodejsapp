import Academic_yearApiGenerated from "./generated/Academic_yearApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class Academic_yearApi extends Academic_yearApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Academic_year List
  static getAcademic_yearList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/academic_years")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default Academic_yearApi;