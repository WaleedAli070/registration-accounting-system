'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class local_courses_payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      local_courses_payments.belongsTo(models.local_courses)
    }
  };
  local_courses_payments.init({
    payment_type: DataTypes.STRING,
    date: DataTypes.DATE,
    amount: DataTypes.DOUBLE,
    balance: DataTypes.DOUBLE,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'local_courses_payments',
  });
  return local_courses_payments;
};