'use strict';

const All = require('./all');
const R = require('ramda');

class Admin extends All {
  omit() {

  }

  normarlize(data) {
    const { ctx } = this;
    ctx.type = 'json';
    ctx.body = {
      data,
      model: Object.keys(this.ctx.model.models),
    };
  }

  async index({ query }) {
    R.mapObjIndexed((val, key) => {
      try {
        if (parseInt(val)) {
          query[key] = parseInt(val);
        }
      } catch (e) {
        return;
      }
    }, query);
    const data = await this.model.findAll(query);
    this.normarlize(data);
  }
}

module.exports = Admin;
