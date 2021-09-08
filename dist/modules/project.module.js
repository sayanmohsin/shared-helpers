"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectFunctionNames = exports.getProject = exports.allFunctionNames = exports.functionServiceAccounts = void 0;
const cloud_1 = require("../types/cloud");
const project_1 = require("../types/project");
exports.functionServiceAccounts = {
    [project_1.ProjectId.analytics]: cloud_1.ServiceAccount.cloudExecutor,
    [project_1.ProjectId.ha]: cloud_1.ServiceAccount.analyticsHa,
};
exports.allFunctionNames = Object.values(cloud_1.CloudFunctionName);
const getProject = (projectId) => new project_1.Project(projectId);
exports.getProject = getProject;
exports.projectFunctionNames = {
    [project_1.ProjectId.analytics]: exports.allFunctionNames,
    [project_1.ProjectId.ha]: exports.allFunctionNames,
};
//# sourceMappingURL=project.module.js.map