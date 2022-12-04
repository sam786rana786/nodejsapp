import ClasssesModelGenerated from "./generated/ClasssesModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ClasssesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ClasssesModelGenerated,
  ...customModel
};
