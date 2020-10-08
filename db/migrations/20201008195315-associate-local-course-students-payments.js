'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'local_courses_payments', // name of Source model
      'student_id', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'local_courses_students', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'local_courses_payments', // name of Source model
      'student_id' // key we want to remove
    )
  }
};
