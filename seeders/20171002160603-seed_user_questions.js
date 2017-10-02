'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_questions', [
      {
        question_id: 1,
        user_id: 1
      },
      {
        question_id: 2,
        user_id: 1
      },
      {
        question_id: 3,
        user_id: 1
      },
      {
        question_id: 1,
        user_id: 2
      },
      {
        question_id: 2,
        user_id: 2
      },
      {
        question_id: 3,
        user_id: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_questions', null, {});
  }
};
