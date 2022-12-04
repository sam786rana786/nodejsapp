import StaffModelGenerated from "./generated/StaffModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await StaffModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...StaffModelGenerated,
  ...customModel
};
