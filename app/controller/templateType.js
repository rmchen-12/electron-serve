'use strict';

const REST = require('./rest');

class TemplateType extends REST {
  constructor(ctx) {
    super(ctx, 'TemplateType');
  }

  async index() {
    await super.index(
      this.ctx,
      {},
      [],
      [{ model: this.ctx.model.ProjectTemplate, as: 'projectTemplates' }]
    );
  }
}

module.exports = TemplateType;
