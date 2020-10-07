'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class local_courses_docs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      local_courses_docs.belongsTo(models.local_courses)
    }
  };
  local_courses_docs.init({
    doc_name: DataTypes.STRING,
    doc_location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'local_courses_docs',
  });
  return local_courses_docs;
};