import { CloudFunctionName, ServiceAccount } from "../types/cloud";
import { Project, ProjectId } from "../types/project";

export const functionServiceAccounts: { [projectId in ProjectId]: ServiceAccount } = {
    [ProjectId.analytics]: ServiceAccount.cloudExecutor,
    [ProjectId.ha]: ServiceAccount.analyticsHa,
};

export const allFunctionNames = Object.values(CloudFunctionName);

export const getProject = (projectId: ProjectId): Project =>
    new Project(projectId);

export const projectFunctionNames: {
    [projectId in ProjectId]: CloudFunctionName[];
} = {
    [ProjectId.analytics]: allFunctionNames,
    [ProjectId.ha]: allFunctionNames,
};
