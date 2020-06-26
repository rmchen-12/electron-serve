'use strict';

const R = require('ramda');

module.exports = async (ctx, user) => {
  const data = {
    uid: user.id,
    provider: user.provider,
  };
  const auth = (
    await ctx.model.Auth.findOrCreate({
      where: data,
      default: data,
    })
  )[0];


  if (auth.userId) {
    const existsUser = await ctx.model.User.findOne({
      where: { id: auth.userId },
    });
    const raw_user = R.omit([ 'password' ], existsUser.toJSON());
    console.log(raw_user);
    const token = await ctx.sign_token(raw_user);
    ctx.body = token;
    ctx.set('token', token);
    return token;
  }

  const newUser = await ctx.model.User.create({
    displayName: user.profile.displayName,
    username: user.profile.username,
    avatar: user.profile.avatarUrl,
    email: user.profile.emails ? user.profile.emails[0].value : '',
    registerAt: user.profile._json.created_at,
  });
  auth.userId = newUser.id;
  await auth.save();
  const raw_user = R.omit([ 'password' ], newUser.toJSON());
  const token = await ctx.sign_token(raw_user);
  ctx.body = token;
  ctx.set('token', token);
  return token;
};
