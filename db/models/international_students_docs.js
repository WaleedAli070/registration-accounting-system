'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class international_students_docs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      international_students_docs.belongsTo(models.international_students, {
        foreignKey: {
          name: 'student_id'
        }
      })
    }
  };
  international_students_docs.init({
    doc_name: DataTypes.STRING,
    doc_location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'international_students_docs',
  });
  return international_students_docs;
};