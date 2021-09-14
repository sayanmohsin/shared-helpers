import { Region, CloudFunctions, ServiceAccount, CloudFunctionName } from "..";
export declare enum ProjectId {
    analytics = "makegoodfood-analytics",
    ha = "makegoodfood-ha"
}
export interface IProject {
    id: ProjectId;
    defaultRegion: Region;
    cloudFunctions: Partial<CloudFunctions>;
    cloudFunctionExecutorServiceAccount: ServiceAccount;
}
export declare class Project implements IProject {
    id: ProjectId;
    defaultRegion: Region;
    cloudFunctions: Partial<CloudFunctions>;
    cloudFunctionExecutorServiceAccount: ServiceAccount;
    constructor(projectId: ProjectId, defaultRegion?: Region);
}
export declare const functionServiceAccounts: {
    [projectId in ProjectId]: ServiceAccount;
};
export declare const allFunctionNames: CloudFunctionName[];
export declare const getProject: (projectId: ProjectId) => Project;
export declare const projectFunctionNames: {
    [projectId in ProjectId]: CloudFunctionName[];
};
//# sourceMappingURL=project.d.ts.map