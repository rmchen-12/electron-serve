'use strict';

const REST = require('./rest');

class User extends REST {
  constructor(ctx) {
    super(ctx, 'User');
  }

  async index() {
    await super.index(
      this.ctx,
      {},
      [],
      [{ model: this.ctx.model.BusinessLine, as: 'businessLine' }]
    );
  }

  /**
   * * 注册
   * @memberof User
   */
  async signUp() {
    await this.ctx.verify('user.signup', 'body');
    const json = await this.ctx.service.user.signUp();
    this.ctx.body = json;
  }

  async logout() {
    const json = await this.ctx.service.user.signUp();
    this.ctx.body = json;
  }
}

module.exports = User;
