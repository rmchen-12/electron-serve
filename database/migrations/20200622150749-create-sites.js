'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sites', {
      url: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      site_category_id: Sequelize.INTEGER,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sites');
  },
};
