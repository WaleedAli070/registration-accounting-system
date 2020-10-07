'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('international_students_docs', [
      {
        doc_name: 'doc-international-abc',
        doc_location: 'path/to/file',
        createdAt: new Date(),
        updatedAt: new Date(),
        student_id: 1
      },
      {
        doc_name: 'doc-international-xyz',
        doc_location: 'path/to/file',
        createdAt: new Date(),
        student_id: 2,
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('international_students_docs', null, {});
  }
};
