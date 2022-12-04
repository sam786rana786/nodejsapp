import ReligionModelGenerated from "./generated/ReligionModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ReligionModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ReligionModelGenerated,
  ...customModel
};
