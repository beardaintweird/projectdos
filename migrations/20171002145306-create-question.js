'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.TEXT
      },
      opt1: {
        type: Sequelize.TEXT
      },
      opt2: {
        type: Sequelize.TEXT
      },
      answer: {
        type: Sequelize.TEXT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('questions');
  }
};
