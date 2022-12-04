import SchoolModelGenerated from "./generated/SchoolModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await SchoolModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...SchoolModelGenerated,
  ...customModel
};
