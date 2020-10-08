'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class international_students_payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      international_students_payments.belongsTo(models.international_students, {
        foreignKey: {
          name: 'student_id'
        }
      })
    }
  };
  international_students_payments.init({
    date: DataTypes.DATE,
    amount: DataTypes.DOUBLE,
    balance: DataTypes.DOUBLE,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'international_students_payments',
  });
  return international_students_payments;
};