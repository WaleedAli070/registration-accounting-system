'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class international_students_exams extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      international_students_exams.belongsTo(models.international_students)
    }
  };
  international_students_exams.init({
    exam_name: DataTypes.STRING,
    date: DataTypes.DATE,
    result: DataTypes.STRING,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'international_students_exams',
  });
  return international_students_exams;
};