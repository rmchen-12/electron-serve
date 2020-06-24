'use strict';
module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  const SiteCategory = app.model.define(
    'SiteCategory',
    {
      categoryName: STRING,
      createdAt: DATE,
      updatedAt: DATE,
      deletedAt: DATE,
    },
    {
      tableName: 'site_categories',
      // 开启软删除
      paranoid: true,
    }
  );

  // SiteCategory.sync({ force: true });
  // SiteCategory.sync({ alter: true });

  return SiteCategory;
};
