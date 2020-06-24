'use strict';

const BASE = require('./base');

class Site extends BASE {
  get model() {
    const model = this.ctx.model.models[this.ctx.params.model];
    info(model);
    if (!model) {
      return this.ctx.throw(400, '没有' + this.ctx.params.model + '!');
    }
    return model;
  }
}

module.exports = Site;
