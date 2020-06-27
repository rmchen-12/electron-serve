'use strict';

const REST = require('./rest');

class BusinessLine extends REST {
  constructor(ctx) {
    super(ctx, 'BusinessLine');
  }

  async index() {
    await super.index(
      this.ctx,
      {},
      [],
      [{ model: this.ctx.model.User, as: 'users' }]
    );
  }
}

module.exports = BusinessLine;
