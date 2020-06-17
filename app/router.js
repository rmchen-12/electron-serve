'use strict';

const { initRouterMap, mountPassportToController, installPassport } = require('./util');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.resources('images', '/images', controller.image);

  installPassport(app.passport, require('./passport'));
  mountPassportToController([ 'local' ], app.passport, controller);
  initRouterMap('/api/v1', require('./api')(controller), router);
};
