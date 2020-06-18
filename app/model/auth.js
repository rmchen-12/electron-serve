'use strict';
module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const Auth = app.model.define('Auth', {
    provider: STRING,
    uid: STRING,
    user_id: INTEGER,
  }, { timestamps: false });

  return Auth;
};
