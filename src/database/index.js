import Sequelize from "sequelize";
import configDatabase from "../config/database.js";
import Company from "./../app/models/Company.js";

const models = [Company];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
