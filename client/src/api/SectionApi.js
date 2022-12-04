import SectionApiGenerated from "./generated/SectionApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class SectionApi extends SectionApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Section List
  static getSectionList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/sections")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default SectionApi;