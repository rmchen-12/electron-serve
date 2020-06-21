'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  validator: {
    enable: true,
    package: 'egg-y-validator',
  },
  passport: {
    enable: true,
    package: 'egg-passport',
  },
  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  passportLocal: {
    enable: true,
    package: 'egg-passport-local',
  },
  passportGitlab: {
    enable: true,
    package: 'egg-passport-gitlab',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};
