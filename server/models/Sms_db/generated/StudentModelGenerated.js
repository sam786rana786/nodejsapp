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
 *  TO CUSTOMIZE studentModelGenerated.js PLEASE EDIT ../studentModel.js
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
  * studentModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.student.create(item);    return result;
  },
  
  /**
  * studentModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await Database.getConnection().models.student.destroy({ where: { _id: id } });
  },
  
  /**
  * studentModel.findByacademic_id
  *   @description CRUD ACTION findByacademic_id
  *   @param Objectid key Id of model to search for
  *
  */
  async findByacademic_id(key) {
    return await Database.getConnection().models.student.findAll({ where: { "academic_id": key } });
  },
  
  /**
  * studentModel.findByclasss_id
  *   @description CRUD ACTION findByclasss_id
  *   @param Objectid key Id of model to search for
  *
  */
  async findByclasss_id(key) {
    return await Database.getConnection().models.student.findAll({ where: { "classs_id": key } });
  },
  
  /**
  * studentModel.findBygender_id
  *   @description CRUD ACTION findBygender_id
  *   @param Objectid key Id of model to search for
  *
  */
  async findBygender_id(key) {
    return await Database.getConnection().models.student.findAll({ where: { "gender_id": key } });
  },
  
  /**
  * studentModel.findByrole_id
  *   @description CRUD ACTION findByrole_id
  *   @param Objectid key Id of model to search for
  *
  */
  async findByrole_id(key) {
    return await Database.getConnection().models.student.findAll({ where: { "role_id": key } });
  },
  
  /**
  * studentModel.findByschool_id
  *   @description CRUD ACTION findByschool_id
  *   @param Objectid key Id of model to search for
  *
  */
  async findByschool_id(key) {
    return await Database.getConnection().models.student.findAll({ where: { "school_id": key } });
  },
  
  /**
  * studentModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.student.findByPk(id);
    return result;
  },
  
  /**
  * studentModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() { 
    return await Database.getConnection().models.student.findAll();
      },
  
  /**
  * studentModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.student.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  


};

export default generatedModel;
