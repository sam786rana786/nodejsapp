import DesignationModelGenerated from "./generated/DesignationModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await DesignationModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...DesignationModelGenerated,
  ...customModel
};
