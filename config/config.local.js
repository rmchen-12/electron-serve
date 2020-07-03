'use strict';

module.exports = () => {
  const config = {};
  config.logger = {
    consoleLevel: 'DEBUG', // 输出到控制台的级别
    level: 'INFO', // 输出到日志的级别
  };
  // config.sequelize = {
  //   dialect: 'mysql',
  //   database: 'database_development',
  //   host: 'localhost',
  //   port: '3306',
  //   username: 'root',
  //   password: '123789Qweop[',
  //   timezone: '+08:00',
  //   define: {
  //     // 默认创建表有 createAt, updateAt
  //     timestamps: true,
  //     // 可以给表设置别名
  //     freezeTableName: true,
  //     // 字段以下划线（_）来分割（默认是驼峰命名风格）
  //     underscored: false,
  //   },
  // };
  config.sequelize = {
    dialect: 'mysql',
    database: 'swim',
    host: 'db',
    port: '3306',
    username: 'root',
    password: '123456',
    timezone: '+08:00',
    define: {
      // 默认创建表有 createAt, updateAt
      timestamps: true,
      // 可以给表设置别名
      freezeTableName: true,
      // 字段以下划线（_）来分割（默认是驼峰命名风格）
      underscored: false,
    },
  };
  return config;
};
