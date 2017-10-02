'use strict';
module.exports = (sequelize, DataTypes) => {
  var score = sequelize.define('score', {
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return score;
};
