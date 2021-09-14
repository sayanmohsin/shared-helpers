"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectFunctionNames = exports.getProject = exports.allFunctionNames = exports.functionServiceAccounts = exports.Project = exports.ProjectId = void 0;
const __1 = require("..");
var ProjectId;
(function (ProjectId) {
    ProjectId["analytics"] = "makegoodfood-analytics";
    ProjectId["ha"] = "makegoodfood-ha";
})(ProjectId = exports.ProjectId || (exports.ProjectId = {}));
class Project {
    constructor(projectId, defaultRegion = __1.Region.east) {
        this.id = projectId;
        this.defaultRegion = defaultRegion;
        this.cloudFunctions = exports.projectFunctionNames[projectId].reduce((cloudFunctions, functionName) => {
            cloudFunctions[functionName] = (0, __1.getCloudFunction)(functionName);
            return cloudFunctions;
        }, {});
        this.cloudFunctionExecutorServiceAccount =
            exports.functionServiceAccounts[projectId];
    }
}
exports.Project = Project;
exports.functionServiceAccounts = {
    [ProjectId.analytics]: __1.ServiceAccount.cloudExecutor,
    [ProjectId.ha]: __1.ServiceAccount.analyticsHa,
};
exports.allFunctionNames = Object.values(__1.CloudFunctionName);
const getProject = (projectId) => new Project(projectId);
exports.getProject = getProject;
exports.projectFunctionNames = {
    [ProjectId.analytics]: exports.allFunctionNames,
    [ProjectId.ha]: exports.allFunctionNames,
};
//# sourceMappingURL=project.js.map