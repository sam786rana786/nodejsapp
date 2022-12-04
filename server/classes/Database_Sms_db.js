// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_sms_db";
import UserModel from "../models/Sms_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.sms_db.host +
        ":" +
        properties.sms_db.port +
        "//" +
        properties.sms_db.user +
        "@" +
        properties.sms_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.sms_db.name,
      properties.sms_db.user,
      properties.sms_db.password,
      {
        host: properties.sms_db.host,
        dialect: properties.sms_db.dialect,
        port: properties.sms_db.port,
        logging: false
      }
    );
    this.dbConnection_sms_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_sms_db;
  }
}

export default new Database();
