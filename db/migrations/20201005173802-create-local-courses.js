'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('local_courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.INTEGER
      },
      trainer: {
        type: Sequelize.STRING
      },
      venue: {
        type: Sequelize.STRING
      },
      sponsor: {
        type: Sequelize.STRING
      },
      org_name: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      fees: {
        type: Sequelize.DOUBLE
      },
      from_date: {
        type: Sequelize.DATE
      },
      to_date: {
        type: Sequelize.DATE
      },
      certificate_type: {
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
    await queryInterface.dropTable('local_courses');
  }
};