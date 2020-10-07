'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('international_students_exams', [
      {
        exam_name: 'IELTS',
        date: new Date(),
        result: 'PASS',
        note: 'some note here',
        student_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        exam_name: 'TOFEL',
        date: new Date(),
        result: 'FAIL',
        note: 'some more note here',
        student_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('international_students_exams', null, {});
  }
};
