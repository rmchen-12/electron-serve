'use strict';

const Base = require('./base');
const R = require('ramda');

class AllModelController extends Base {
  get model() {
    const model = this.ctx.model.models[this.ctx.params.model];
    info(model);
    if (!model) {
      return this.ctx.throw(400, '没有' + this.ctx.params.model + '!');
    }
    return model;
  }

  omit(filterArray = [ 'FM', 'Order', 'Team', 'User' ]) {
    console.log(R.contains(this.ctx.params.model, filterArray));
    return this.ctx.throw(403);
  }

  normarlize(data) {
    const { ctx } = this;
    ctx.type = 'json';
    ctx.body = {
      data,
      model: R.without(
        [ 'FM', 'Order', 'Team', 'User' ],
        Object.keys(this.ctx.model.models)
      ),
    };
  }

  /**
   * 留下的修改和删除的验证接口
   * @param {number} id model ID
   * @return {model} model instance
   */
  async getInstance(id) {
    return await this.model.findOne({ where: { id } });
  }

  /**
   * get list
   * @param {object} ctx Context
   * @return {Promise<void>}
   */
  async index(ctx) {
    const where = ctx.request.body.where || {};
    this.omit([ 'Order', 'Team', 'User' ]);
    info(where);
    const data = await this.model.findAll(where);
    this.normarlize(data);
  }

  /**
   * Post
   */
  async create() {
    const { ctx } = this;
    this.omit();
    const data = await this.model.create(ctx.request.body);
    this.normarlize(data);
  }

  /**
   * Get
   */
  async show() {
    const { ctx } = this;
    this.omit([ 'Order' ]);
    const data = await this.model.findOne({
      where: {
        id: ctx.params.id,
      },
    });
    this.normarlize(data);
  }

  /**
   * Put
   */
  async update() {
    const { id } = this.ctx.params;
    this.omit();
    const instance = await this.getInstance(id);
    Object.assign(instance, this.ctx.request.body);
    const data = await instance.save();
    this.normarlize(data);
  }

  /**
   * Delete
   */
  async destroy() {
    const { id } = this.ctx.params;
    this.omit();
    const instance = await this.getInstance(id);
    const data = await instance.destory();
    this.normarlize(data);
  }
}

module.exports = AllModelController;
