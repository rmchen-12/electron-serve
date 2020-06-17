/* eslint valid-jsdoc: "off" */

'use strict';

const chalk = require('chalk');
const R = require('ramda');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    security: {
      csrf: {
        // ignore: () => true,
        ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
      },
    //   domainWhiteList: [ 'http://localhost:4000' ],
    },
    sequelize: {
      dialect: 'mysql',
      database: 'database_development',
      host: 'localhost',
      port: '3306',
      username: 'root',
      password: '123789Qweop[',
    },
    validator: {
      open: 'zh-CN',
      language: {
        'zh-CN': {
          required: '%s 必填',
        },
      },
      superstruct: false,
      types() {},
      async formatter(ctx, error) {
        console.log('[egg-y-validator] -> %s', JSON.stringify(error, ' '));
        ctx.type = 'json';
        ctx.status = 400;
        ctx.body = error;
        if (Array.isArray(error)) throw new Error(error[0].message);
        throw error;
      },
    },
    jwt: {
      secret: '123456',
      enable: true,
      ignore(ctx) {
        // return [ /\/passport/i, /\/api/ ];
        const paths = [ '/api/v1/signin', '/api/v1/signup' ];
        if (DEV) {
          const tip = `${chalk.yellow('[JWT]')} --> ${
            R.contains(ctx.path, paths) ? chalk.green(ctx.path) : chalk.red(ctx.path)
          }`;
          console.log(tip);
        }
        return R.contains(ctx.path, paths);
      },
    },
    passportLocal: {
      usernameField: 'email',
      passwordField: 'password',
    },
    // redis: {
    //   client: {
    //     port: 6379,
    //     host: '127.0.0.1',
    //     password: '',
    //     db: 0,
    //   },
    // },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574567640896_9873';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
