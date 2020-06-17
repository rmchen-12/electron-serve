'use strict';
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Image = app.model.define('Image', {
    title: STRING(40),
    description: STRING(255),
    view: INTEGER,
    main_url: STRING(20),
    list_url: STRING(90),
    user_id: INTEGER,
  });

  Image.associate = function() {
    // associations can be defined here
    app.model.User.hasMany(Image);
    Image.belongsTo(app.model.User);
  };
  return Image;
};
