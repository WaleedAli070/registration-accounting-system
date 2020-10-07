'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('international_students', [
      {
        name: 'Haseeb',
        status: 'Active',
        student_number: '256',
        gender: 'Male',
        contact_no: '090012341',
        email: 'haseeb@gmail.abc',
        sponsor: 'Public',
        fees: 2.0,
        group: 'testing',
        course: 'IELTS',
        date_from: new Date(),
        date_to: new Date(),
        mem_id: 'abc',
        password: 'abc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Murtaza',
        status: 'Active',
        student_number: '258',
        gender: 'Male',
        contact_no: '090012341',
        email: 'murtaza@gmail.abc',
        sponsor: 'Organization',
        fees: 3.0,
        group: 'testing',
        course: 'TOFEL',
        date_from: new Date(),
        date_to: new Date(),
        mem_id: 'xyz',
        password: 'xyz',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('international_students', null, {});
  }
};
