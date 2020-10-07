'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('local_courses_students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_english: {
        type: Sequelize.STRING
      },
      name_arabic: {
        type: Sequelize.STRING
      },
      student_number: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      contact_no: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.STRING
      },
      sponsor: {
        type: Sequelize.STRING
      },
      fees: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('local_courses_students');
  }
};