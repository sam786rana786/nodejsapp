import SectionModelGenerated from "./generated/SectionModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await SectionModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...SectionModelGenerated,
  ...customModel
};
