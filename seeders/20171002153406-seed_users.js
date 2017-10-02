'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
      user_id: 1,
      username: 'beardaintweird',
      name: 'Samee Khan'
    },
    {
      user_id: 2,
      username: 'alanabanana',
      name: 'Alana Alfeche'
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
