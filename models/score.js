'use strict';
module.exports = (sequelize, DataTypes) => {
  var score = sequelize.define('score', {
    userId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        this.hasMany(models.user);
      }
    }
  });
  return score;
};
