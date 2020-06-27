'use strict';

module.exports = ctl => ({
  post: {
    // '/signup': ctl.user.signUp, // 注册
    // '/signin': ctl.passport.local, // 登录
  },
  get: {
    '/gitLab/getProjects': ctl.gitLab.getProjects,
  },
});
