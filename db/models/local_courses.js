'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class local_courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  local_courses.init({
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    trainer: DataTypes.STRING,
    venue: DataTypes.STRING,
    sponsor: DataTypes.STRING,
    org_name: DataTypes.STRING,
    language: DataTypes.STRING,
    fees: DataTypes.DOUBLE,
    from_date: DataTypes.DATE,
    to_date: DataTypes.DATE,
    certificate_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'local_courses',
  });
  return local_courses;
};