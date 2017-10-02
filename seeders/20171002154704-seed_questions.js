'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('questions', [
      {
        question: 'Rich Fairbank is Capital One\'s founder.',
        opt1: 'True',
        opt2: 'False',
        answer: 'True'
      },
      {
        question: 'Capital One\'s marketing team the best',
        opt1: 'True',
        opt2: 'False',
        answer: 'True'
      },
      {
        question: 'Capital One\'s famous marketing line is "your wallet is ours"',
        opt1: 'True',
        opt2: 'False',
        answer: 'False'
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('questions', null, {});
  }
};
