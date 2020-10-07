'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'local_courses_docs', // name of Source model
      'course_id', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'local_courses', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'local_courses_docs', // name of Source model
      'course_id' // key we want to remove
    )
  }
};
