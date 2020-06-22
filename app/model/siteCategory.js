'use strict';
module.exports = app => {
  const { STRING } = app.Sequelize;

  const SiteCategory = app.model.define('SiteCategory', {
    category_name: STRING,
  }, { timestamps: false });

  return SiteCategory;
};
