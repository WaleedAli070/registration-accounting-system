'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('international_students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      status: {
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
      group: {
        type: Sequelize.STRING
      },
      course: {
        type: Sequelize.STRING
      },
      date_from: {
        type: Sequelize.DATE
      },
      date_to: {
        type: Sequelize.DATE
      },
      mem_id: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('international_students');
  }
};