'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    user_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    name: DataTypes.TEXT
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        this.belongsToMany(models.question, through: {'user_question'});
      }
    }
  });
  return user;
};
