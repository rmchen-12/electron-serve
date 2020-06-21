'use strict';

module.exports = options => {
  return async function jwtErr(ctx, next) {
    const token = ctx.request.header.authorization;
    let decode = '';
    if (token) {
      try {
        // 解码token
        decode = await ctx.verify(token);
        // 不知道为什么 jwt 数据没有挂载到 state 上，手动绑定下
        ctx.state.user = decode;
        await next();
        info('decode======>', decode);
      } catch (error) {
        ctx.responseClient({ }, 401, '授权已过期，请重新登录');
        return;
      }
    } else {
      ctx.responseClient({ }, 401, '无授权，请登录');
      return;
    }
  };
};
