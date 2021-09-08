"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudTask = exports.CloudSecret = exports.CloudFunction = exports.CloudFunctionName = exports.CloudSecretName = exports.ConnectionName = exports.CloudTaskName = exports.Region = exports.ResourceType = exports.ServiceAccount = exports.VPCConnector = void 0;
const path_1 = __importDefault(require("path"));
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
//# sourceMappingURL=cloud.js.map