'use strict';
module.exports = (sequelize, DataTypes) => {
  var score = sequelize.define('score', {
    userId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  });
  score.associate = function(models){
    score.hasMany(models.user);
  }
  return score;
};
