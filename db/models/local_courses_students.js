'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class local_courses_students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      local_courses_students.belongsTo(models.local_courses)
    }
  };
  local_courses_students.init({
    name_english: DataTypes.STRING,
    name_arabic: DataTypes.STRING,
    student_number: DataTypes.STRING,
    gender: DataTypes.STRING,
    contact_no: DataTypes.TEXT,
    email: DataTypes.STRING,
    sponsor: DataTypes.STRING,
    fees: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'local_courses_students',
  });
  return local_courses_students;
};