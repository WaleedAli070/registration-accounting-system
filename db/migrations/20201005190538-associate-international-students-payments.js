'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'international_students_payments', // name of Source model
      'student_id', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'international_students', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'international_students_payments', // name of Source model
      'student_id' // key we want to remove
    )
  }
};
