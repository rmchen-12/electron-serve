'use strict';

const REST = require('./rest');

class SiteCategory extends REST {
  constructor(ctx) {
    super(ctx, 'SiteCategory');
  }

  async index() {
    await super.index(
      this.ctx,
      {},
      [],
      [{ model: this.ctx.model.Site, as: 'sites' }]
    );
  }
}

module.exports = SiteCategory;
