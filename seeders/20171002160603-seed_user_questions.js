'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_questions', [
      {
        questionId: 1,
        userId: 1
      },
      {
        questionId: 2,
        userId: 1
      },
      {
        questionId: 3,
        userId: 1
      },
      {
        questionId: 1,
        userId: 2
      },
      {
        questionId: 2,
        userId: 2
      },
      {
        questionId: 3,
        userId: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_questions', null, {});
  }
};
