'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class international_students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  international_students.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    student_number: DataTypes.STRING,
    gender: DataTypes.STRING,
    contact_no: DataTypes.TEXT,
    email: DataTypes.STRING,
    sponsor: DataTypes.STRING,
    fees: DataTypes.DOUBLE,
    group: DataTypes.STRING,
    course: DataTypes.STRING,
    date_from: DataTypes.DATE,
    date_to: DataTypes.DATE,
    mem_id: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'international_students',
  });
  return international_students;
};