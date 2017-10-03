'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    userId: DataTypes.INTEGER,
    facebookId: DataTypes.STRING,
    displayName: DataTypes.TEXT,
    scoreId: DataTypes.INTEGER
  });
  user.associate = function(models) {
    user.belongsToMany(models.question, {
      through: 'user_question',
      underscored: true
    });
    user.hasOne(models.score, {
      underscored: true
    });
  }
  return user;
};
