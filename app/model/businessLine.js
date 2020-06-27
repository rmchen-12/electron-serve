'use strict';
module.exports = app => {
  const { STRING, DATE } = app.Sequelize;

  const BusinessLine = app.model.define(
    'BusinessLine',
    {
      lineName: STRING,
      createdAt: DATE,
      updatedAt: DATE,
      deletedAt: DATE,
    },
    {
      tableName: 'business_lines',
      // 开启软删除
      paranoid: true,
    }
  );

  // BusinessLine.sync({ force: true });
  // BusinessLine.sync({ alter: true });

  return BusinessLine;
};
