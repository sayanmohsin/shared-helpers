import { Region, CloudFunctions, ServiceAccount, getCloudFunction, CloudFunctionName } from "..";

export enum ProjectId {
    analytics = "makegoodfood-analytics",
    ha = "makegoodfood-ha",
}

export interface IProject {
    id: ProjectId;
    defaultRegion: Region;
    cloudFunctions: Partial<CloudFunctions>;
    cloudFunctionExecutorServiceAccount: ServiceAccount;
}

export class Project implements IProject {
    public id;
    public defaultRegion;
    public cloudFunctions: Partial<CloudFunctions>;
    public cloudFunctionExecutorServiceAccount: ServiceAccount;
    constructor(projectId: ProjectId, defaultRegion: Region = Region.east) {
        this.id = projectId;
        this.defaultRegion = defaultRegion;
        this.cloudFunctions = projectFunctionNames[projectId].reduce(
            (cloudFunctions, functionName) => {
                cloudFunctions[functionName] = getCloudFunction(functionName);
                return cloudFunctions;
            },
            {} as Partial<CloudFunctions>
        );
        this.cloudFunctionExecutorServiceAccount =
            functionServiceAccounts[projectId];
    }
}

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
