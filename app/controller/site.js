'use strict';

const REST = require('./rest');

class Site extends REST {
  constructor(ctx) {
    super(ctx, 'Site');
  }
}

module.exports = Site;
