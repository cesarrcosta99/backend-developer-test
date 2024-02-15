import Sequelize from "sequelize";
import configDatabase from "../config/database.js";
import Company from "./../app/models/Company.js";
import Job from "../app/models/Job.js";

const models = [Company,Job];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);
    models.map((model) => model.init(this.connection)).map(model=>model.associate && model.associate(this.connection.models))
  }
}

export default new Database();
