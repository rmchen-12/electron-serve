'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('template_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      typeName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('template_types');
  },
};
