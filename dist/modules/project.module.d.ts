import { CloudFunctionName, ServiceAccount } from "../types/cloud";
import { Project, ProjectId } from "../types/project";
export declare const functionServiceAccounts: {
    [projectId in ProjectId]: ServiceAccount;
};
export declare const allFunctionNames: CloudFunctionName[];
export declare const getProject: (projectId: ProjectId) => Project;
export declare const projectFunctionNames: {
    [projectId in ProjectId]: CloudFunctionName[];
};
//# sourceMappingURL=project.module.d.ts.map