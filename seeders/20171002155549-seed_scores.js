'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('scores', [
      {
        userId: 1,
        score: 0
      },
      {
        userId: 2,
        score: 1
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('scores', null, {});
  }
};
