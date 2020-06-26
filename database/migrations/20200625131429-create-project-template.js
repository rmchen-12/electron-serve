'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('project_templates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      templateName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      repoUrl: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: Sequelize.STRING,
      templateTypeId: Sequelize.INTEGER,
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
    return queryInterface.dropTable('project_templates');
  },
};
