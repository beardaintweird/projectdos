'use strict';
module.exports = (sequelize, DataTypes) => {
  var question = sequelize.define('question', {
    question: DataTypes.TEXT,
    opt1: DataTypes.TEXT,
    opt2: DataTypes.TEXT,
    answer: DataTypes.TEXT
  });
  question.associate = function(models) {
    question.belongsToMany(models.user, {
      through: 'user_question',
      underscored: true
    })
  }
  return question;
};
