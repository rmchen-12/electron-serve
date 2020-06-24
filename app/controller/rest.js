'use strict';

const { defaultTo } = require('ramda');
const Base = require('./base.js');

class RESTController extends Base {
  constructor(ctx, modelName) {
    super(ctx);
    this.model = ctx.model[modelName];
    console.log(this.model);
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
   * @param {object} where 所有条件但排除order和include
   * @param {array} order 排序
   * @param {object} include 表连接
   * @return {Promise<void>}
   */
  async index(ctx, where, order, include) {
    const { page, split } = ctx.query;
    where = defaultTo({}, where);
    where.order = defaultTo([], order);
    where.include = defaultTo([], include);
    where.offset = defaultTo(0, parseInt(page) * parseInt(split));
    where.limit = defaultTo(10, split);
    info(where);
    const result = await this.model.findAll(where);
    ctx.responseClient(result);
  }

  /**
   * Post
   * @return {Promise<void>}
   */
  async create() {
    const { ctx } = this;
    const row = await this.model.create(ctx.request.body);
    ctx.responseClient(row);
  }

  /**
   * GET one
   * @return {Promise<void>}
   */
  async show() {
    const { ctx } = this;
    ctx.body = await this.model.findOne({
      where: {
        id: ctx.params.id,
      },
    });
  }

  /**
   * Put
   * @return {Promise<void>}
   */
  async update() {
    const { id } = this.ctx.params;

    const instance = await this.getInstance(id);
    Object.assign(instance, this.ctx.request.body);
    const row = await instance.save();
    this.ctx.responseClient(row);
  }

  /**
   * delete
   * @return {Promise<void>}
   */
  async destroy() {
    const { id } = this.ctx.params;

    const instance = await this.getInstance(id);
    const row = await instance.destroy();
    this.ok(true);
  }
}

module.exports = RESTController;
