'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Site = app.model.define(
    'Site',
    {
      url: STRING,
      siteCategoryId: INTEGER,
      description: STRING,
      createdAt: DATE,
      updatedAt: DATE,
      deletedAt: DATE,
    },
    {
      tableName: 'sites',
      // 开启软删除
      paranoid: true,
    }
  );

  // Site.sync({ force: true });
  // Site.sync({ alter: true });

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
