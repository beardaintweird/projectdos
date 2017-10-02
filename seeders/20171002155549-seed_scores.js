'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('scores', [
      {
        user_id: 1,
        score: 0
      },
      {
        user_id: 2,
        score: 1
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('scores', null, {});
  }
};
