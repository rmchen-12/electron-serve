'use strict';

const R = require('ramda');

module.exports = async (ctx, user) => {
  const data = { uid: user.id, provider: user.provider };
  const auth = (await ctx.model.Auth.findOrCreate({
    where: data,
    default: data,
  }))[0];

  if (auth.user_id) {
    const existsUser = await ctx.model.User.findOne({
      where: { id: auth.user_id },
    });
    const raw_user = R.omit([ 'password' ], existsUser.toJSON());
    console.log(raw_user);
    const token = await ctx.sign_token(raw_user);
    ctx.body = token;
    ctx.set('token', token);
    return token;
  }


  const newUser = await ctx.model.User.create({
    username: user.profile.username,
    avatar: user.profile.avatarUrl,
    email: user.profile.emails ? user.profile.emails[0].value : '',
    register_at: user.profile._json.created_at,
  });
  auth.user_id = newUser.id;
  await auth.save();
  const raw_user = R.omit([ 'password' ], newUser.toJSON());
  const token = await ctx.sign_token(raw_user);
  ctx.body = token;
  return token;
};
