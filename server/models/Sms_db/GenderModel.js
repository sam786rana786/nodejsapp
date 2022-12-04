import GenderModelGenerated from "./generated/GenderModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await GenderModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...GenderModelGenerated,
  ...customModel
};
