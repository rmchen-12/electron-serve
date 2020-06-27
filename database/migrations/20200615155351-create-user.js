'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: Sequelize.STRING(40),
      businessLineId: Sequelize.INTEGER,
      displayName: Sequelize.STRING(40),
      accessLevel: {
        type: Sequelize.ENUM('100', '200', '300', '400', '500'), // 跟gitlab对齐, 500是root用户，400由root用户授权，拥有比如npm发包之类的权限，300为开发者，200，100预留
        defaultValue: '300',
      },
      avatar: Sequelize.STRING,
      password: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      registerAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};
