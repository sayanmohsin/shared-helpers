import { PathLike } from "fs";
import path from "path";
import { ProjectId } from "./project";
import { PubSubTopic, PubSubTopicName, getPubSubTopics, getPubSubTopic } from "./pubsub";

export enum VPCConnector {
    vpcAccessConnector = "vpc-access-connector",
}

export enum ServiceAccount {
    analyticsHa = "analytics@makegoodfood-ha.iam.gserviceaccount.com",
    cloudExecutor = "cloudexecute@makegoodfood-analytics.iam.gserviceaccount.com",
}

export enum ResourceType {
    cloudFunction = "cloud_function",
}

export enum Region {
    east = "us-east1",
    central = "us-central1",
    northAmericaNorthEast = "northamerica-northeast1",
}

export enum CloudTaskName {
    handleScheduler = "handle-schedule",
}

export enum ConnectionName {
    "makegoodfood-db" = "makegoodfood-db",
    "makegoodfood-analytics" = "makegoodfood-analytics",
    "makegoodfood-ha" = "makegoodfood-ha",
}

export enum CloudSecretName {
    dbCreds = "cloudsql_pi_db_config",
    piDbCreds = "pi_db_creds",
    gSheetCreds = "gsheet_creds",
    top50GSheetId = "top_50_product_gsheet_id",
    apiGatewayKey = "api_gateway_key",
    apifyApiKey = "apify_api_key",
    notifierBotUrl = "analytics_pi_notifications_webhook_url",
    akeneoConfig = "pi_akeneo_config",
}

export enum CloudFunctionName {
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
    testLogger = "test-logger",
}

export type CloudTasks = {
    [topicName in CloudTaskName]: CloudTask;
};

export type CloudFunctions = {
    [functionName in CloudFunctionName]: CloudFunction;
};

export type CloudSecrets = {
    [secretName in CloudSecretName]: CloudSecret;
};

export type PiDbCredsSecret = {
    [connectionName in ConnectionName]: {
        DB_USER: string;
        DB_PASSWORD: string;
        DB_NAME: string;
        DB_HOST: string;
        DB_SOCKET_PATH: string;
    };
};

export type GSheetCredsSecret = {
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

export interface ICloudFunction {
    name: CloudFunctionName;
    trigger: PubSubTopic | "http";
    sourceDirRelativeToRepoRoot: PathLike;
    envVars: Record<string, string>;
    vpcConnectorOptions?: VPCConnectorOptions;
    setEnvVars(envVars: Record<string, string>): void;
    setVpcConnectorOptions(vpcOptions: VPCConnectorOptions): void;
}

export interface ICloudSecret {
    name: CloudSecretName;
    relativeResourceString: string;
    getResourceStringForProject(projectId: ProjectId): string;
}

export interface ICloudTask {
    name: CloudTaskName;
    relativeResourceString: string;
    getResourceStringForProjectAndRegion(
        projectId: ProjectId,
        region: Region
    ): string;
}

export class CloudFunction implements ICloudFunction {
    public name;
    public trigger;
    public sourceDirRelativeToRepoRoot;
    public vpcConnectorOptions?: VPCConnectorOptions;
    public envVars = {};
    constructor(
        name: CloudFunctionName,
        trigger: "http" | PubSubTopic = "http",
        functionDirName?: string
    ) {
        this.name = name;
        this.trigger = trigger;
        this.sourceDirRelativeToRepoRoot = path.join(
            "gcp/cloudFunctions",
            functionDirName || name
        );
    }
    setEnvVars(envVars: Record<string, string>): void {
        this.envVars = {
            ...this.envVars,
            ...envVars,
        };
    }
    setVpcConnectorOptions(vpcConnectorOptions: VPCConnectorOptions): void {
        this.vpcConnectorOptions = vpcConnectorOptions;
    }
}

export class CloudSecret implements ICloudSecret {
    public name;
    public relativeResourceString: string;
    constructor(name: CloudSecretName) {
        this.name = name;
        this.relativeResourceString = `secrets/${name}/versions/latest`;
    }
    getResourceStringForProject(projectId?: ProjectId): string {
        return `projects/${projectId || process.env.GCP_PROJECT}/${this.relativeResourceString
            }`;
    }
}

export class CloudTask implements ICloudTask {
    public relativeResourceString: string;
    public name;
    constructor(taskName: CloudTaskName) {
        this.name = taskName;
        this.relativeResourceString = `/queues/${taskName}`;
    }
    getResourceStringForProjectAndRegion(
        projectId: ProjectId,
        region: Region
    ): string {
        return `projects/${projectId}/locations/${region}/queues/handle-schedule`;
    }
}

export const cloudSecrets: CloudSecrets = Object.values(CloudSecretName).reduce(
    (acc: Partial<CloudSecrets>, secretName: CloudSecretName) => {
        acc[secretName] = new CloudSecret(secretName);
        return acc;
    },
    {} as Partial<CloudSecrets>
) as CloudSecrets;

export const cloudTasks: CloudTasks = Object.values(CloudTaskName).reduce(
    (acc: Partial<CloudTasks>, taskName: CloudTaskName) => {
        acc[taskName] = new CloudTask(taskName);
        return acc;
    },
    {} as Partial<CloudTasks>
) as CloudTasks;

export const functionTriggerTopicNames: Partial<
    { [functionName in CloudFunctionName]: PubSubTopicName }
> = {
    [CloudFunctionName.calculatePriceRecommendations]:
        PubSubTopicName.calculatePriceRecommendations,
    [CloudFunctionName.fetchBasketDataAndIndexesPreProd]:
        PubSubTopicName.calculateBasketIndexesPreProd,
    [CloudFunctionName.fetchBasketDataAndIndexesProd]:
        PubSubTopicName.calculateBasketIndexesProd,
    [CloudFunctionName.errorNotifier]: PubSubTopicName.notifyError,
    [CloudFunctionName.fetchProductDataPreProdAkeneo]:
        PubSubTopicName.fetchProductData,
    [CloudFunctionName.fetchProductDataProdAkeneo]:
        PubSubTopicName.fetchProductData,
    [CloudFunctionName.handlePriceRecommendationsPreProd]:
        PubSubTopicName.sendPriceRecommendations,
    [CloudFunctionName.handlePriceRecommendationsProd]:
        PubSubTopicName.sendPriceRecommendations,
    [CloudFunctionName.initiateApifyScrapeProd]: PubSubTopicName.scrapeProducts,
    [CloudFunctionName.initiateApifyScrapePreProd]:
        PubSubTopicName.scrapeProducts,
    [CloudFunctionName.piScheduleEventHandler]:
        PubSubTopicName.piScheduleEventHandler,
    [CloudFunctionName.saveScaledPricesPreProd]: PubSubTopicName.calculateScaledPrices,
    [CloudFunctionName.saveScaledPricesProd]: PubSubTopicName.calculateScaledPrices,
    [CloudFunctionName.testLogger]: PubSubTopicName.testLogger,
};

export const functionDirNames: Partial<
    { [functionName in CloudFunctionName]: string }
> = {
    [CloudFunctionName.testLogger]: "logger-test",
};

export const functionEnvVars: Partial<
    { [functionName in CloudFunctionName]: Record<string, string> }
> = {
    [CloudFunctionName.handlePriceRecommendationsPreProd]: {
        DO_SEND_TO_AKENEO: "0", // controls if the recommendations are sent to akeneo, must be "1" to send. Off for monitoring phase
    },
    [CloudFunctionName.handlePriceRecommendationsProd]: {
        DO_SEND_TO_AKENEO: "0", // controls if the recommendations are sent to akeneo, must be "1" to send. Off for monitoring phase
    },
    [CloudFunctionName.fetchProductDataPreProdAkeneo]: {
        SAVE_TO_DB: "1", // controls if the recommendations are saved to db, must be "1" to save. Off for pre-prod
        USE_TCP_DB: "1", // controls if the recommendations are saved to db, must be "1" to save. Off for pre-prod
    },
    [CloudFunctionName.fetchProductDataProdAkeneo]: {
        SAVE_TO_DB: "1", // controls if the recommendations are saved to db, must be "1" to send. On for prod
    },
};

export const functionVpcConnectorOptions: Partial<
    { [functionName in CloudFunctionName]: VPCConnectorOptions }
> = {
    [CloudFunctionName.fetchProductDataProdAkeneo]: {
        vpcConnector: VPCConnector.vpcAccessConnector,
        egressSettings: "private-ranges-only",
    },
    [CloudFunctionName.fetchProductDataPreProdAkeneo]: {
        vpcConnector: VPCConnector.vpcAccessConnector,
        egressSettings: "private-ranges-only",
    },
    [CloudFunctionName.handlePriceRecommendationsPreProd]: {
        vpcConnector: VPCConnector.vpcAccessConnector,
        egressSettings: "private-ranges-only",
    },
    [CloudFunctionName.handlePriceRecommendationsProd]: {
        vpcConnector: VPCConnector.vpcAccessConnector,
        egressSettings: "private-ranges-only",
    },
    [CloudFunctionName.fetchBasketDataAndIndexesPreProd]: {
        vpcConnector: VPCConnector.vpcAccessConnector,
        egressSettings: "private-ranges-only",
    },
    [CloudFunctionName.fetchBasketDataAndIndexesProd]: {
        vpcConnector: VPCConnector.vpcAccessConnector,
        egressSettings: "private-ranges-only",
    },
};

export const getCloudFunctions = (): CloudFunctions => {
    const topics = getPubSubTopics();
    return Object.values(CloudFunctionName).reduce(
        (acc: Partial<CloudFunctions>, functionName: CloudFunctionName) => {
            const triggerTopicName = functionTriggerTopicNames[functionName];
            const triggerTopic = triggerTopicName ? topics[triggerTopicName] : "http";
            acc[functionName] = new CloudFunction(functionName, triggerTopic);
            return acc;
        },
        {} as Partial<CloudFunctions>
    ) as CloudFunctions;
};

export const getCloudFunction = (
    functionName: CloudFunctionName
): CloudFunction => {
    const triggerTopicName = functionTriggerTopicNames[functionName];
    const functionDir = functionDirNames[functionName];
    const triggerTopic = triggerTopicName
        ? getPubSubTopic(triggerTopicName)
        : "http";
    const cloudFunction = new CloudFunction(
        functionName,
        triggerTopic,
        functionDir
    );
    if (functionEnvVars[functionName]) {
        cloudFunction.setEnvVars(
            functionEnvVars[functionName] as Record<string, string>
        );
    }
    if (functionVpcConnectorOptions[functionName]) {
        cloudFunction.setVpcConnectorOptions(
            functionVpcConnectorOptions[functionName] as VPCConnectorOptions
        );
    }
    return cloudFunction;
};