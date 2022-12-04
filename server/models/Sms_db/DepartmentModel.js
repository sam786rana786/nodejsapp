import DepartmentModelGenerated from "./generated/DepartmentModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await DepartmentModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...DepartmentModelGenerated,
  ...customModel
};
