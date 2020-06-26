'use strict';

const BASE = require('./base');

class GitLab extends BASE {


  async getProjects() {
    const { ctx } = this;
    const a = await ctx.curl('http://10.1.1.217/api/v4/projects', { dataType: 'json', headers: {
      authorization: 'Bearer KovzR9rvD4oD3WyrbgTS',
    } });

    console.log(R.keys(a));
  }
}

module.exports = GitLab;
