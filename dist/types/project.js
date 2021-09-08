"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.ProjectId = void 0;
const cloud_module_1 = require("../modules/cloud.module");
const project_module_1 = require("../modules/project.module");
const cloud_1 = require("./cloud");
var ProjectId;
(function (ProjectId) {
    ProjectId["analytics"] = "makegoodfood-analytics";
    ProjectId["ha"] = "makegoodfood-ha";
})(ProjectId = exports.ProjectId || (exports.ProjectId = {}));
class Project {
    constructor(projectId, defaultRegion = cloud_1.Region.east) {
        this.id = projectId;
        this.defaultRegion = defaultRegion;
        this.cloudFunctions = project_module_1.projectFunctionNames[projectId].reduce((cloudFunctions, functionName) => {
            cloudFunctions[functionName] = (0, cloud_module_1.getCloudFunction)(functionName);
            return cloudFunctions;
        }, {});
        this.cloudFunctionExecutorServiceAccount =
            project_module_1.functionServiceAccounts[projectId];
    }
}
exports.Project = Project;
//# sourceMappingURL=project.js.map