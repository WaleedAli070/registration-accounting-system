'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('local_courses_students', [
      {
        name_english: 'Tayyab',
        name_arabic: 'Tayyab in Arabic',
        student_number: '123',
        gender: 'Male',
        contact_no: '021391312',
        email: 'tayyab@test.com',
        sponsor: 'Public',
        fees: 5.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        course_id: 1
      },
      {
        name_english: 'Waleed',
        name_arabic: 'Waleed in Arabic',
        student_number: '312',
        gender: 'Male',
        contact_no: '051391312',
        email: 'waleed@test.pk',
        sponsor: 'Organization',
        fees: 3.1,
        createdAt: new Date(),
        updatedAt: new Date(),
        course_id: 2
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('local_courses_students', null, {});
  }
};
