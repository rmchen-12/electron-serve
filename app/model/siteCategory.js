'use strict';
module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  const SiteCategory = app.model.define(
    'SiteCategory',
    {
      category_name: STRING,
      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE,
    },
    {
      tableName: 'site_categories',
      // 开启软删除
      paranoid: true,
    }
  );

  return SiteCategory;
};
