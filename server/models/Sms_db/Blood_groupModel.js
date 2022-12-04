import Blood_groupModelGenerated from "./generated/Blood_groupModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await Blood_groupModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Blood_groupModelGenerated,
  ...customModel
};
