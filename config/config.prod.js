'use strict';

module.exports = () => {
  const config = {};
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
