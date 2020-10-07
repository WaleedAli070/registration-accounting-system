'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('international_students_payments', [
      {
        date: new Date(),
        amount: 2.0,
        balance: 2.0,
        student_id: 1,
        note: 'some note here',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: new Date(),
        amount: 3.0,
        balance: 0.0,
        student_id: 2,
        note: 'some note here',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('international_students_payments', null, {});
  }
};
