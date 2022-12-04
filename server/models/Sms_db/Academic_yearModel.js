import Academic_yearModelGenerated from "./generated/Academic_yearModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await Academic_yearModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Academic_yearModelGenerated,
  ...customModel
};
