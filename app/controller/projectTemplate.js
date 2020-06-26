'use strict';

const REST = require('./rest');

class ProjectTemplate extends REST {
  constructor(ctx) {
    super(ctx, 'ProjectTemplate');
  }
}

module.exports = ProjectTemplate;
