import { CloudFunctions, Region, ServiceAccount } from "./cloud";
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
//# sourceMappingURL=project.d.ts.map