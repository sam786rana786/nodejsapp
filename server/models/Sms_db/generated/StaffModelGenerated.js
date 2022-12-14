/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE StaffModelGenerated.js PLEASE EDIT ../StaffModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_Sms_db";
import Sequelize from "sequelize";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {

  // Start queries
    

  // CRUD METHODS


  /**
  * StaffModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.Staff.create(item);    return result;
  },
  
  /**
  * StaffModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await Database.getConnection().models.Staff.destroy({ where: { _id: id } });
  },
  
  /**
  * StaffModel.findBydepartment_id
  *   @description CRUD ACTION findBydepartment_id
  *   @param Objectid key Id of model to search for
  *
  */
  async findBydepartment_id(key) {
    return await Database.getConnection().models.Staff.findAll({ where: { "department_id": key } });
  },
  
  /**
  * StaffModel.findBydesignation_id
  *   @description CRUD ACTION findBydesignation_id
  *   @param Objectid key Id of model to search for
  *
  */
  async findBydesignation_id(key) {
    return await Database.getConnection().models.Staff.findAll({ where: { "designation_id": key } });
  },
  
  /**
  * StaffModel.findBygender_id
  *   @description CRUD ACTION findBygender_id
  *   @param Objectid key Id of model to search for
  *
  */
  async findBygender_id(key) {
    return await Database.getConnection().models.Staff.findAll({ where: { "gender_id": key } });
  },
  
  /**
  * StaffModel.findByrole_id
  *   @description CRUD ACTION findByrole_id
  *   @param Objectid key Id of model to search for
  *
  */
  async findByrole_id(key) {
    return await Database.getConnection().models.Staff.findAll({ where: { "role_id": key } });
  },
  
  /**
  * StaffModel.findByschool_id
  *   @description CRUD ACTION findByschool_id
  *   @param Objectid key Id of model to search for
  *
  */
  async findByschool_id(key) {
    return await Database.getConnection().models.Staff.findAll({ where: { "school_id": key } });
  },
  
  /**
  * StaffModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.Staff.findByPk(id);
    return result;
  },
  
  /**
  * StaffModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() { 
    return await Database.getConnection().models.Staff.findAll();
      },
  
  /**
  * StaffModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.Staff.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  


};

export default generatedModel;
