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
      }
    }
  });
  return user;
};
