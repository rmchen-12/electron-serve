'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.type = 'json';
    this.ctx.body = this.ctx.state;
  }
}

module.exports = HomeController;
