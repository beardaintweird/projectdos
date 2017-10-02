'use strict';
module.exports = (sequelize, DataTypes) => {
  var score = sequelize.define('score', {
    user_id: DataTypes.INTEGER,
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
