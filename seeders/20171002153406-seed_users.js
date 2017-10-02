'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
      userId: 1,
      scoreId: 1,
      username: 'beardaintweird',
      name: 'Samee Khan'
    },
    {
      userId: 2,
      scoreId: 2,
      username: 'alanabanana',
      name: 'Alana Alfeche'
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
