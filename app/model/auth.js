'use strict';
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Auth = app.model.define(
    'Auth',
    {
      provider: STRING,
      uid: STRING,
      userId: INTEGER,
    },
    { timestamps: false, tableName: 'auths' }
  );

  // Auth.sync({ force: true });
  // Auth.sync({ alter: true });

  return Auth;
};
