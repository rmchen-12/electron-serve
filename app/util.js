'use strict';

const { forEachObjIndexed, forEach, pipe, map, zipObj, keys, values } = require('ramda');
const chalk = require('chalk');

function initRouterMap(prefix, maps, router) {
  forEachObjIndexed((map, method) => {
    forEachObjIndexed((controller, url) => {
      info('[%s] -> %s', method, chalk.red(prefix + url));
      router[method](prefix + url, controller);
    }, map);
  }, maps);
}

function mountPassportToController(keys, passport, controller) {
  if (!controller.passport) {
    controller.passport = {};
  }
  forEach(value => {
    info('[passport] -> %s', chalk.red('controller.passport.' + value));
    controller.passport[value] = passport.authenticate(value, {
      session: false,
      successRedirect: undefined,
    });
  }, keys);
}

function installPassport(passport, { verify }) {
  passport.verify(verify);
}

// async function getModelCount(ctx) {
//   const models = ctx.app.model.models;
//   const names = keys(models);
//   const toCountPromises = map(m => m.count(), values(models));
//   const _values = await Promise.all(toCountPromises);
//   ctx.body = zipObj(names, _values);
// }

// function mapToInputType(type) {
//   const _maps = { integer: 'number', string: 'text', text: 'textarea' };
//   return _maps[type];
// }

// function getModelConfig(ctx) {
//   const config = {};
//   forEachObjIndexed((model, modelName) => {
//     config[modelName] = {};
//     forEachObjIndexed((attr, attrName) => {
//       config[modelName][attrName] = mapToInputType(attr.type.key.toLowerCase());
//     }, model.tableAttributes);
//   }, ctx.app.model.models);
//   ctx.body = config;
// }

module.exports = {
  initRouterMap,
  mountPassportToController,
  installPassport,
//   getModelCount,
//   getModelConfig,
};
