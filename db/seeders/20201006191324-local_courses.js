'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('local_courses', [
      {
        title: 'testing-abc',
        duration: 2,
        trainer: 'Tayyab',
        venue: 'Muscat',
        sponsor: 'Organization',
        org_name: 'ABC',
        language: 'English',
        fees: 2.2,
        from_date: new Date(),
        to_date: new Date(),
        certificate_type: 'English',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'testing-xyz',
        duration: 2,
        trainer: 'Waleed',
        venue: 'Islamabad',
        sponsor: 'Public',
        org_name: 'xyz',
        language: 'Arabic',
        fees: 3.1,
        from_date: new Date(),
        to_date: new Date(),
        certificate_type: 'Arabic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('local_courses', null, {});
  },
};