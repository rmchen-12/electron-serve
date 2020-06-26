'use strict';
module.exports = app => {
  const { STRING, DATE, INTEGER } = app.Sequelize;

  const TemplateType = app.model.define(
    'TemplateType',
    {
      typeName: {
        allowNull: false,
        type: STRING,
      },
      ownerId: {
        allowNull: false,
        type: INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DATE,
      },
      deletedAt: DATE,
    },
    {
      tableName: 'template_types',
      // 开启软删除
      paranoid: true,
    }
  );

  //   TemplateType.sync({ force: true });
  //   TemplateType.sync({ alter: true });

  return TemplateType;
};
