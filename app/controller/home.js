'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const user = this.ctx.state.user;
    const currentUser = await this.ctx.model.User.findOne({
      where: {
        id: user.id,
      },
      include:
       [{ model: this.ctx.model.BusinessLine, as: 'businessLine' }],
    });
    this.ctx.responseClient(R.pick([ 'username', 'displayName', 'id', 'accessLevel', 'avatar', 'email', 'registerAt', 'businessLineId', 'businessLine' ], currentUser));
  }
}

module.exports = HomeController;
