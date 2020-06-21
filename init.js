'use strict';

const path = require('path');
const R = require('ramda');

const check = R.curry((obj, key) => {
  return typeof obj[key] !== 'undefined';
});

const notInGlobal = key => !check({})(key);

function globalBaseInitial(baseDir) {
  const _use = dir => require(path.resolve(baseDir, dir));

  if (notInGlobal('DEV')) {
    global.DEV = process.env.NODE_ENV !== 'production';
  }

  if (notInGlobal('check')) {
    global.check = check;
  }

  if (notInGlobal('Controller')) {
    global.C = global.Controller = _use('app/controller/base');
  }

  if (notInGlobal('Service')) {
    global.S = global.Service = _use('app/service/base');
  }

  if (notInGlobal('Ramda')) {
    global.R = global.Ramda = require('ramda');
  }

  if (notInGlobal('use')) {
    global.use = dir => {
      dir = dir.replace(/\./g, path.sep);
      return _use(dir);
    };
  }
}

function globalLogger(app) {
  if (DEV) {
    global.debug = app.logger.debug.bind(app.logger);
    global.info = app.logger.info.bind(app.logger);
  } else {
    global.info = () => {};
    global.debug = () => {};
  }
}

module.exports = {
  globalBaseInitial,
  globalLogger,
};
