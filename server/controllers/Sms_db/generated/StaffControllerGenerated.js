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
 *  TO CUSTOMIZE StaffControllerGenerated.js PLEASE EDIT ../StaffController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import StaffModel from "../../../models/Sms_db/StaffModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import StaffController from "../StaffController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/staff`;
    router.post(baseUrl + "", authorize([]), StaffController.create);
    router.delete(baseUrl + "/:id", authorize([]), StaffController.delete);
    router.get(baseUrl + "/findBydepartment_id/:key", authorize([]), StaffController.findBydepartment_id);
    router.get(baseUrl + "/findBydesignation_id/:key", authorize([]), StaffController.findBydesignation_id);
    router.get(baseUrl + "/findBygender_id/:key", authorize([]), StaffController.findBygender_id);
    router.get(baseUrl + "/findByrole_id/:key", authorize([]), StaffController.findByrole_id);
    router.get(baseUrl + "/findByschool_id/:key", authorize([]), StaffController.findByschool_id);
    router.get(baseUrl + "/:id", authorize([]), StaffController.get);
    router.get(baseUrl + "", authorize([]), StaffController.list);
    router.post(baseUrl + "/:id", authorize([]), StaffController.update);
  },


  // CRUD METHODS


  /**
  * StaffModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await StaffModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * StaffModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await StaffModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * StaffModel.findBydepartment_id
  *   @description CRUD ACTION findBydepartment_id
  *   @param Objectid key Id of model to search for
  *
  */
  findBydepartment_id: async (req, res) => {
    try {
      const result = await StaffModel.findBydepartment_id(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * StaffModel.findBydesignation_id
  *   @description CRUD ACTION findBydesignation_id
  *   @param Objectid key Id of model to search for
  *
  */
  findBydesignation_id: async (req, res) => {
    try {
      const result = await StaffModel.findBydesignation_id(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * StaffModel.findBygender_id
  *   @description CRUD ACTION findBygender_id
  *   @param Objectid key Id of model to search for
  *
  */
  findBygender_id: async (req, res) => {
    try {
      const result = await StaffModel.findBygender_id(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * StaffModel.findByrole_id
  *   @description CRUD ACTION findByrole_id
  *   @param Objectid key Id of model to search for
  *
  */
  findByrole_id: async (req, res) => {
    try {
      const result = await StaffModel.findByrole_id(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * StaffModel.findByschool_id
  *   @description CRUD ACTION findByschool_id
  *   @param Objectid key Id of model to search for
  *
  */
  findByschool_id: async (req, res) => {
    try {
      const result = await StaffModel.findByschool_id(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * StaffModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await StaffModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * StaffModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await StaffModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * StaffModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await StaffModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
