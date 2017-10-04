'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('questions', [
      {
        question: 'Rich Fairbank is Capital One\'s founder.',
        opt1: 'True',
        opt2: 'False',
        answer: 'True',
        img: 'https://media.bizj.us/view/img/4117591/richfairbankmclean*1024xx864-487-0-102.jpg'
      },
      {
        question: 'Capital One\'s marketing team is the best',
        opt1: 'True',
        opt2: 'False',
        answer: 'True',
        img: 'https://3qdigital.com/wp-content/uploads/2013/02/visigoth-capital-one.png'
      },
      {
        question: 'Capital One\'s famous marketing line is "your wallet is ours"',
        opt1: 'True',
        opt2: 'False',
        answer: 'False',
        img: 'https://cdn.shopify.com/s/files/1/1035/5531/products/EPT223-WALLET-2_2048x2048.jpg'
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('questions', null, {});
  }
};
