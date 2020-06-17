'use strict';

module.exports = {
  async sign_token(user, remember_me) {
    return new Promise((resolve, reject) => {
      this.app.jwt.sign(user, this.app.config.jwt.secret, { expiresIn: remember_me ? '7d' : '1d' }, (err, token) => {
        err && reject(err);
        resolve(token);
      });
    });
  },
  random(len) {
    return Math.random().toString(36).slice(3, len + 3);
  },
};
