'use strict';

module.exports = () => {
  const config = {};
  config.logger = {
    consoleLevel: 'DEBUG', // 输出到控制台的级别
    level: 'INFO', // 输出到日志的级别
  };
  return config;
};
