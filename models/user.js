'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    userId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    name: DataTypes.TEXT
  });
  user.associate = function(models) {
    user.belongsToMany(models.question, {through: 'user_question', underscored: true});
  }
  return user;
};
