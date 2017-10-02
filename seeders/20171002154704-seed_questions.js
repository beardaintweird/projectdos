'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Person', [
      {
        question: 'Is Rich Fairbank Capital One\'s founder?',
        opt1: 'True',
        opt2: 'False',
        answer: 'True'
      },
      {
        
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
