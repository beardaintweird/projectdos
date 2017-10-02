'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_question = sequelize.define('user_question', {
    question_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_question;
};