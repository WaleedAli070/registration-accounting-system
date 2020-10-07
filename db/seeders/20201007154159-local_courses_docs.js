'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('local_courses_docs', [
      {
        doc_name: 'doc-abc',
        doc_location: 'path/to/folder',
        course_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        doc_name: 'doc-xyz',
        doc_location: 'path/to/folder',
        course_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('local_courses_docs', null, {});
  }
};
