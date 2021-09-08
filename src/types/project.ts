import { getCloudFunction } from "../modules/cloud.module";
import { functionServiceAccounts, projectFunctionNames } from "../modules/project.module";
import { CloudFunctions, Region, ServiceAccount } from "./cloud";

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
