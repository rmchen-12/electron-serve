'use strict';

const { initRouterMap, mountPassportToController, installPassport, getModelCount, getModelConfig } = require('./util');
const auth = require('koa-basic-auth');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const jwtErr = middleware.jwtErr();
  router.get('/', jwtErr, controller.home.index);

  /** 用户 */
  router.resources('users', '/users', controller.user);

  /** 网址导航 */
  router.resources('siteCategories', '/siteCategories', controller.siteCategory);
  router.resources('sites', '/sites', controller.site);

  /** 业务线 */
  router.resources('businessLines', '/businessLines', controller.businessLine);

  /** 项目模板 */
  router.resources('projectTemplates', '/projectTemplates', controller.projectTemplate);
  router.resources('templateTypes', '/templateTypes', controller.templateType);

  router.get('/admin', auth({ name: 'dd', pass: '888888' }), ctx => ctx.render('admin'));
  router.get('/api/v1/admin_count', auth({ name: 'dd', pass: '888888' }), getModelCount);
  router.get('/api/v1/admin_table', auth({ name: 'dd', pass: '888888' }), getModelConfig);
  router.resources('admin', '/api/v1/admin/:model', auth({ name: 'dd', pass: '888888' }), controller.admin);

  installPassport(app.passport, require('./passport'));
  mountPassportToController([ 'local', 'gitlab' ], app.passport, controller);
  router.get('/passport/gitlab', controller.passport.gitlab);
  router.get('/passport/gitlab/callback', controller.passport.gitlab);

  initRouterMap('/api/v1', require('./api')(controller), router);
};
