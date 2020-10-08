'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('local_courses_payments', [
      {
        payment_type: 'Organization',
        date: new Date(),
        amount: 2.3,
        balance: 2.3,
        note: 'some note here',
        createdAt: new Date(),
        updatedAt: new Date(),
        student_id: 1
      },
      {
        payment_type: 'Public',
        date: new Date(),
        amount: 3.3,
        balance: 0.3,
        note: 'some more note here',
        createdAt: new Date(),
        updatedAt: new Date(),
        student_id: 2
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('local_courses_payments', null, {});
  }
};
