'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('auths', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      provider: {
        type: Sequelize.STRING,
      },
      uid: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.STRING,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('auths');
  },
};
