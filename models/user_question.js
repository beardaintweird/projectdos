'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_question = sequelize.define('user_question', {
    questionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  });
  return user_question;
};
