'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const ProjectTemplate = app.model.define(
    'ProjectTemplate',
    {
      ownerId: {
        allowNull: false,
        type: INTEGER,
      },
      repoUrl: {
        allowNull: false,
        type: STRING,
      },
      templateName: {
        allowNull: false,
        type: STRING,
      },
      description: STRING,
      templateTypeId: INTEGER,
      createdAt: DATE,
      updatedAt: DATE,
    },
    {
      tableName: 'project_templates',
      // 开启软删除
      paranoid: true,
    }
  );

  //   ProjectTemplate.sync({ force: true });
  //   ProjectTemplate.sync({ alter: true });


  ProjectTemplate.associate = function() {
    // associations can be defined here
    app.model.TemplateType.hasMany(ProjectTemplate, { as: 'projectTemplates', constraints: false });
    ProjectTemplate.belongsTo(app.model.TemplateType, {
      as: 'templateType',
      constraints: false,
    });
  };

  return ProjectTemplate;
};
