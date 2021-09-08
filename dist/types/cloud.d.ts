/// <reference types="node" />
import { PathLike } from "fs";
import { ProjectId } from "./project";
import { PubSubTopic } from "./pubsub";
export declare enum VPCConnector {
    vpcAccessConnector = "vpc-access-connector"
}
export declare enum ServiceAccount {
    analyticsHa = "analytics@makegoodfood-ha.iam.gserviceaccount.com",
    cloudExecutor = "cloudexecute@makegoodfood-analytics.iam.gserviceaccount.com"
}
export declare enum ResourceType {
    cloudFunction = "cloud_function"
}
export declare enum Region {
    east = "us-east1",
    central = "us-central1",
    northAmericaNorthEast = "northamerica-northeast1"
}
export declare enum CloudTaskName {
    handleScheduler = "handle-schedule"
}
export declare enum ConnectionName {
    "makegoodfood-db" = "makegoodfood-db",
    "makegoodfood-analytics" = "makegoodfood-analytics",
    "makegoodfood-ha" = "makegoodfood-ha"
}
export declare enum CloudSecretName {
    dbCreds = "cloudsql_pi_db_config",
    piDbCreds = "pi_db_creds",
    gSheetCreds = "gsheet_creds",
    top50GSheetId = "top_50_product_gsheet_id",
    apiGatewayKey = "api_gateway_key",
    apifyApiKey = "apify_api_key",
    notifierBotUrl = "analytics_pi_notifications_webhook_url",
    akeneoConfig = "pi_akeneo_config"
}
export declare enum CloudFunctionName {
    calculatePriceRecommendations = "calculate-price-recommendations",
    errorNotifier = "error-notifier",
    fetchProductDataPreProdAkeneo = "fetch-product-data-pre-prod-akeneo",
    fetchProductDataProdAkeneo = "fetch-product-data-prod-akeneo",
    fetchBasketDataAndIndexesPreProd = "fetch-basket-data-and-index-pre-prod",
    fetchBasketDataAndIndexesProd = "fetch-basket-data-and-index-prod",
    verifyBasketDataPreProd = "verify-basket-data-pre-prod",
    verifyBasketDataProd = "verify-basket-data-prod",
    handlePriceRecommendationsPreProd = "handle-price-recommendations-pre-prod",
    handlePriceRecommendationsProd = "handle-price-recommendations-prod",
    initiateApifyScrapePreProd = "initiate-apify-scrape-pre-prod",
    initiateApifyScrapeProd = "initiate-apify-scrape-prod",
    piScheduleEventHandler = "pi-schedule-event-handler",
    saveScaledPricesProd = "save-scaled-prices-prod",
    saveScaledPricesPreProd = "save-scaled-prices-pre-prod",
    saveScrapeResults = "save-scrape-results",
    taskListener = "task-listener",
    testLogger = "test-logger"
}
export declare type CloudTasks = {
    [topicName in CloudTaskName]: CloudTask;
};
export declare type CloudFunctions = {
    [functionName in CloudFunctionName]: CloudFunction;
};
export declare type CloudSecrets = {
    [secretName in CloudSecretName]: CloudSecret;
};
export declare type PiDbCredsSecret = {
    [connectionName in ConnectionName]: {
        DB_USER: string;
        DB_PASSWORD: string;
        DB_NAME: string;
        DB_HOST: string;
        DB_SOCKET_PATH: string;
    };
};
export declare type GSheetCredsSecret = {
    type: string;
    project_id: string;
    private_key_id: string;
    private_key: string;
    client_email: string;
    client_id: string;
    auth_uri: string;
    token_uri: string;
    auth_provider_x509_cert_url: string;
    client_x509_cert_url: string;
};
export interface VPCConnectorOptions {
    vpcConnector: VPCConnector;
    egressSettings: "private-ranges-only" | "all";
}
interface ICloudFunction {
    name: CloudFunctionName;
    trigger: PubSubTopic | "http";
    sourceDirRelativeToRepoRoot: PathLike;
    envVars: Record<string, string>;
    vpcConnectorOptions?: VPCConnectorOptions;
    setEnvVars(envVars: Record<string, string>): void;
    setVpcConnectorOptions(vpcOptions: VPCConnectorOptions): void;
}
interface ICloudSecret {
    name: CloudSecretName;
    relativeResourceString: string;
    getResourceStringForProject(projectId: ProjectId): string;
}
interface ICloudTask {
    name: CloudTaskName;
    relativeResourceString: string;
    getResourceStringForProjectAndRegion(projectId: ProjectId, region: Region): string;
}
export declare class CloudFunction implements ICloudFunction {
    name: CloudFunctionName;
    trigger: PubSubTopic | "http";
    sourceDirRelativeToRepoRoot: string;
    vpcConnectorOptions?: VPCConnectorOptions;
    envVars: {};
    constructor(name: CloudFunctionName, trigger?: "http" | PubSubTopic, functionDirName?: string);
    setEnvVars(envVars: Record<string, string>): void;
    setVpcConnectorOptions(vpcConnectorOptions: VPCConnectorOptions): void;
}
export declare class CloudSecret implements ICloudSecret {
    name: CloudSecretName;
    relativeResourceString: string;
    constructor(name: CloudSecretName);
    getResourceStringForProject(projectId?: ProjectId): string;
}
export declare class CloudTask implements ICloudTask {
    relativeResourceString: string;
    name: CloudTaskName;
    constructor(taskName: CloudTaskName);
    getResourceStringForProjectAndRegion(projectId: ProjectId, region: Region): string;
}
export {};
//# sourceMappingURL=cloud.d.ts.map