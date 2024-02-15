import Sequelize, { Model } from "sequelize";

class Job extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.TEXT,
        location: Sequelize.STRING,
        notes: Sequelize.TEXT,
        status: Sequelize.STRING,
      },
      {
        sequelize,
        tableName: "jobs",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Company, { foreignKey: "company_id", as: "company" });
  }
}

export default Job;
