'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING(40),
    avatar: DataTypes.STRING(100),
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
