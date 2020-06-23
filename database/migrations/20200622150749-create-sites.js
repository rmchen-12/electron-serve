'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: Sequelize.STRING,
      site_category_id: Sequelize.INTEGER,
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deleted_at: Sequelize.DATE,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sites');
  },
};
