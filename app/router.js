'use strict';

const { initRouterMap, mountPassportToController, installPassport, getModelCount } = require('./util');
const auth = require('koa-basic-auth');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.resources('images', '/images', controller.image);
  router.resources('admin', '/api/v1/admin/:model', auth({ name: 'dd', pass: '888888' }), controller.admin);

  router.get('/api/v1/admin_count', auth({ name: 'dd', pass: '888888' }), getModelCount);
  //   router.get('/api/v1/admin_table', auth({ name: 'dd', pass: '888888' }), adminRouter);

  installPassport(app.passport, require('./passport'));
  mountPassportToController([ 'local', 'github', 'gitlab' ], app.passport, controller);
  router.get('/passport/github', controller.passport.github);
  router.get('/passport/github/callback', controller.passport.github);
  router.get('/passport/gitlab', controller.passport.gitlab);
  router.get('/passport/gitlab/callback', controller.passport.gitlab);

  initRouterMap('/api/v1', require('./api')(controller), router);
};
