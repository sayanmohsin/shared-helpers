"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCloudFunction = exports.getCloudFunctions = exports.functionVpcConnectorOptions = exports.functionEnvVars = exports.functionDirNames = exports.functionTriggerTopicNames = exports.cloudTasks = exports.cloudSecrets = exports.CloudTask = exports.CloudSecret = exports.CloudFunction = exports.CloudFunctionName = exports.CloudSecretName = exports.ConnectionName = exports.CloudTaskName = exports.Region = exports.ResourceType = exports.ServiceAccount = exports.VPCConnector = void 0;
const path_1 = __importDefault(require("path"));
const pubsub_1 = require("./pubsub");
var VPCConnector;
(function (VPCConnector) {
    VPCConnector["vpcAccessConnector"] = "vpc-access-connector";
})(VPCConnector = exports.VPCConnector || (exports.VPCConnector = {}));
var ServiceAccount;
(function (ServiceAccount) {
    ServiceAccount["analyticsHa"] = "analytics@makegoodfood-ha.iam.gserviceaccount.com";
    ServiceAccount["cloudExecutor"] = "cloudexecute@makegoodfood-analytics.iam.gserviceaccount.com";
})(ServiceAccount = exports.ServiceAccount || (exports.ServiceAccount = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["cloudFunction"] = "cloud_function";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var Region;
(function (Region) {
    Region["east"] = "us-east1";
    Region["central"] = "us-central1";
    Region["northAmericaNorthEast"] = "northamerica-northeast1";
})(Region = exports.Region || (exports.Region = {}));
var CloudTaskName;
(function (CloudTaskName) {
    CloudTaskName["handleScheduler"] = "handle-schedule";
})(CloudTaskName = exports.CloudTaskName || (exports.CloudTaskName = {}));
var ConnectionName;
(function (ConnectionName) {
    ConnectionName["makegoodfood-db"] = "makegoodfood-db";
    ConnectionName["makegoodfood-analytics"] = "makegoodfood-analytics";
    ConnectionName["makegoodfood-ha"] = "makegoodfood-ha";
})(ConnectionName = exports.ConnectionName || (exports.ConnectionName = {}));
var CloudSecretName;
(function (CloudSecretName) {
    CloudSecretName["dbCreds"] = "cloudsql_pi_db_config";
    CloudSecretName["piDbCreds"] = "pi_db_creds";
    CloudSecretName["gSheetCreds"] = "gsheet_creds";
    CloudSecretName["top50GSheetId"] = "top_50_product_gsheet_id";
    CloudSecretName["apiGatewayKey"] = "api_gateway_key";
    CloudSecretName["apifyApiKey"] = "apify_api_key";
    CloudSecretName["notifierBotUrl"] = "analytics_pi_notifications_webhook_url";
    CloudSecretName["akeneoConfig"] = "pi_akeneo_config";
})(CloudSecretName = exports.CloudSecretName || (exports.CloudSecretName = {}));
var CloudFunctionName;
(function (CloudFunctionName) {
    CloudFunctionName["calculatePriceRecommendations"] = "calculate-price-recommendations";
    CloudFunctionName["errorNotifier"] = "error-notifier";
    CloudFunctionName["fetchProductDataPreProdAkeneo"] = "fetch-product-data-pre-prod-akeneo";
    CloudFunctionName["fetchProductDataProdAkeneo"] = "fetch-product-data-prod-akeneo";
    CloudFunctionName["fetchBasketDataAndIndexesPreProd"] = "fetch-basket-data-and-index-pre-prod";
    CloudFunctionName["fetchBasketDataAndIndexesProd"] = "fetch-basket-data-and-index-prod";
    CloudFunctionName["verifyBasketDataPreProd"] = "verify-basket-data-pre-prod";
    CloudFunctionName["verifyBasketDataProd"] = "verify-basket-data-prod";
    CloudFunctionName["handlePriceRecommendationsPreProd"] = "handle-price-recommendations-pre-prod";
    CloudFunctionName["handlePriceRecommendationsProd"] = "handle-price-recommendations-prod";
    CloudFunctionName["initiateApifyScrapePreProd"] = "initiate-apify-scrape-pre-prod";
    CloudFunctionName["initiateApifyScrapeProd"] = "initiate-apify-scrape-prod";
    CloudFunctionName["piScheduleEventHandler"] = "pi-schedule-event-handler";
    CloudFunctionName["saveScaledPricesProd"] = "save-scaled-prices-prod";
    CloudFunctionName["saveScaledPricesPreProd"] = "save-scaled-prices-pre-prod";
    CloudFunctionName["saveScrapeResults"] = "save-scrape-results";
    CloudFunctionName["taskListener"] = "task-listener";
    CloudFunctionName["testLogger"] = "test-logger";
})(CloudFunctionName = exports.CloudFunctionName || (exports.CloudFunctionName = {}));
class CloudFunction {
    constructor(name, trigger = "http", functionDirName) {
        this.envVars = {};
        this.name = name;
        this.trigger = trigger;
        this.sourceDirRelativeToRepoRoot = path_1.default.join("gcp/cloudFunctions", functionDirName || name);
    }
    setEnvVars(envVars) {
        this.envVars = Object.assign(Object.assign({}, this.envVars), envVars);
    }
    setVpcConnectorOptions(vpcConnectorOptions) {
        this.vpcConnectorOptions = vpcConnectorOptions;
    }
}
exports.CloudFunction = CloudFunction;
class CloudSecret {
    constructor(name) {
        this.name = name;
        this.relativeResourceString = `secrets/${name}/versions/latest`;
    }
    getResourceStringForProject(projectId) {
        return `projects/${projectId || process.env.GCP_PROJECT}/${this.relativeResourceString}`;
    }
}
exports.CloudSecret = CloudSecret;
class CloudTask {
    constructor(taskName) {
        this.name = taskName;
        this.relativeResourceString = `/queues/${taskName}`;
    }
    getResourceStringForProjectAndRegion(projectId, region) {
        return `projects/${projectId}/locations/${region}/queues/handle-schedule`;
    }
}
exports.CloudTask = CloudTask;
exports.cloudSecrets = Object.values(CloudSecretName).reduce((acc, secretName) => {
    acc[secretName] = new CloudSecret(secretName);
    return acc;
}, {});
exports.cloudTasks = Object.values(CloudTaskName).reduce((acc, taskName) => {
    acc[taskName] = new CloudTask(taskName);
    return acc;
}, {});
exports.functionTriggerTopicNames = {
    [CloudFunctionName.calculatePriceRecommendations]: pubsub_1.PubSubTopicName.calculatePriceRecommendations,
    [CloudFunctionName.fetchBasketDataAndIndexesPreProd]: pubsub_1.PubSubTopicName.calculateBasketIndexesPreProd,
    [CloudFunctionName.fetchBasketDataAndIndexesProd]: pubsub_1.PubSubTopicName.calculateBasketIndexesProd,
    [CloudFunctionName.errorNotifier]: pubsub_1.PubSubTopicName.notifyError,
    [CloudFunctionName.fetchProductDataPreProdAkeneo]: pubsub_1.PubSubTopicName.fetchProductData,
    [CloudFunctionName.fetchProductDataProdAkeneo]: pubsub_1.PubSubTopicName.fetchProductData,
    [CloudFunctionName.handlePriceRecommendationsPreProd]: pubsub_1.PubSubTopicName.sendPriceRecommendations,
    [CloudFunctionName.handlePriceRecommendationsProd]: pubsub_1.PubSubTopicName.sendPriceRecommendations,
    [CloudFunctionName.initiateApifyScrapeProd]: pubsub_1.PubSubTopicName.scrapeProducts,
    [CloudFunctionName.initiateApifyScrapePreProd]: pubsub_1.PubSubTopicName.scrapeProducts,
    [CloudFunctionName.piScheduleEventHandler]: pubsub_1.PubSubTopicName.piScheduleEventHandler,
    [CloudFunctionName.saveScaledPricesPreProd]: pubsub_1.PubSubTopicName.calculateScaledPrices,
    [CloudFunctionName.saveScaledPricesProd]: pubsub_1.PubSubTopicName.calculateScaledPrices,
    [CloudFunctionName.testLogger]: pubsub_1.PubSubTopicName.testLogger,
};
exports.functionDirNames = {
    [CloudFunctionName.testLogger]: "logger-test",
};
exports.functionEnvVars = {
    [CloudFunctionName.handlePriceRecommendationsPreProd]: {
        DO_SEND_TO_AKENEO: "0", // controls if the recommendations are sent to akeneo, must be "1" to send. Off for monitoring phase
    },
    [CloudFunctionName.handlePriceRecommendationsProd]: {
        DO_SEND_TO_AKENEO: "0", // controls if the recommendations are sent to akeneo, must be "1" to send. Off for monitoring phase
    },
    [CloudFunctionName.fetchProductDataPreProdAkeneo]: {
        SAVE_TO_DB: "1",
        USE_TCP_DB: "1", // controls if the recommendations are saved to db, must be "1" to save. Off for pre-prod
    },
    [CloudFunctionName.fetchProductDataProdAkeneo]: {
        SAVE_TO_DB: "1", // controls if the recommendations are saved to db, must be "1" to send. On for prod
    },
};
exports.functionVpcConnectorOptions = {
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
const getCloudFunctions = () => {
    const topics = (0, pubsub_1.getPubSubTopics)();
    return Object.values(CloudFunctionName).reduce((acc, functionName) => {
        const triggerTopicName = exports.functionTriggerTopicNames[functionName];
        const triggerTopic = triggerTopicName ? topics[triggerTopicName] : "http";
        acc[functionName] = new CloudFunction(functionName, triggerTopic);
        return acc;
    }, {});
};
exports.getCloudFunctions = getCloudFunctions;
const getCloudFunction = (functionName) => {
    const triggerTopicName = exports.functionTriggerTopicNames[functionName];
    const functionDir = exports.functionDirNames[functionName];
    const triggerTopic = triggerTopicName
        ? (0, pubsub_1.getPubSubTopic)(triggerTopicName)
        : "http";
    const cloudFunction = new CloudFunction(functionName, triggerTopic, functionDir);
    if (exports.functionEnvVars[functionName]) {
        cloudFunction.setEnvVars(exports.functionEnvVars[functionName]);
    }
    if (exports.functionVpcConnectorOptions[functionName]) {
        cloudFunction.setVpcConnectorOptions(exports.functionVpcConnectorOptions[functionName]);
    }
    return cloudFunction;
};
exports.getCloudFunction = getCloudFunction;
//# sourceMappingURL=cloud.js.map