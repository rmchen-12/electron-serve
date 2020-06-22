'use strict';
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Site = app.model.define('Site', {
    url: STRING,
    site_category_id: INTEGER,
  });

  Site.sync({ force: true });
  Site.associate = function() {
    // associations can be defined here
    app.model.SiteCategory.hasMany(Site);
    Site.belongsTo(app.model.SiteCategory);
  };
  return Site;
};
