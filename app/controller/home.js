'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const user = this.ctx.state.user;
    this.ctx.responseClient(R.pick([ 'username', 'avatar', 'email', 'registerAt' ], user));
  }
}

module.exports = HomeController;
