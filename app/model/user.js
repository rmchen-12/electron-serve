'use strict';

const bcrypt = require('bcrypt');

module.exports = app => {
  const { STRING, INTEGER, DATE, ENUM } = app.Sequelize;

  const User = app.model.define(
    'User',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: STRING(40),
      displayName: STRING(40),
      businessLineId: INTEGER,
      accessLevel: {
        type: ENUM('100', '200', '300', '400', '500'), // 跟gitlab对齐, 500是root用户，400由root用户授权，拥有比如npm发包之类的权限，300为开发者，200，100预留
        defaultValue: '300',
      },
      avatar: STRING,
      password: STRING,
      email: {
        type: STRING,
        unique: true,
      },
      registerAt: DATE,
      createdAt: DATE,
      updatedAt: DATE,
    },
    {
      tableName: 'users',
    }
  );

  // User.sync({ force: true });
  // User.sync({ alter: true });

  User.associate = function() {
    // associations can be defined here
    app.model.BusinessLine.hasMany(User, { as: 'users', constraints: false });
    User.belongsTo(app.model.BusinessLine, {
      as: 'businessLine',
      constraints: false,
    });
  };

  /**
   * * 哈希加密
   * @param {User} user 用户实例
   * @return {void}
   */
  async function hashPwd(user) {
    if (!user.changed('password')) {
      return;
    }
    user.password = await bcrypt.hash(user.password, 10);
  }

  User.beforeSave(hashPwd);

  /**
   * * 用户登录方法
   * @param {string} email 邮箱
   * @param {string} password 密码
   * @return {(User|boolean)} 登录成功的用户
   */
  User.Auth = async function(email, password) {
    const user = await this.findOne({ where: { email } });
    if (await bcrypt.compare(password, user.password)) {
      return user;
    }
    return false;
  };

  User.findByEmail = async function(email) {
    return await this.findOne({ where: { email } });
  };


  return User;
};
