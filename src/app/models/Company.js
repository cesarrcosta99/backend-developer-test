import Sequelize, { Model } from "sequelize";

class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: 'companies',
      }
    );
  }
}

export default Company
