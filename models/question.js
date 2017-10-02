'use strict';
module.exports = (sequelize, DataTypes) => {
  var question = sequelize.define('question', {
    question: DataTypes.TEXT,
    opt1: DataTypes.TEXT,
    opt2: DataTypes.TEXT,
    answer: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        this.belongsToMany(models.user, through: {'user_question'})
      }
    }
  });
  return question;
};
