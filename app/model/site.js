'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Site = app.model.define(
    'Site',
    {
      url: STRING,
      site_category_id: INTEGER,
      description: STRING,
      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE,
    },
    {
      tableName: 'sites',
      // 开启软删除
      paranoid: true,
    }
  );

  Site.associate = function() {
    // associations can be defined here
    app.model.SiteCategory.hasMany(Site, { as: 'sites', constraints: false });
    Site.belongsTo(app.model.SiteCategory, {
      as: 'siteCategory',
      constraints: false,
    });
  };
  return Site;
};
