"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCloudFunction = exports.getCloudFunctions = exports.functionVpcConnectorOptions = exports.functionEnvVars = exports.functionDirNames = exports.functionTriggerTopicNames = exports.cloudTasks = exports.cloudSecrets = void 0;
const cloud_1 = require("../types/cloud");
const pubsub_1 = require("../types/pubsub");
const pubsub_module_1 = require("./pubsub.module");
exports.cloudSecrets = Object.values(cloud_1.CloudSecretName).reduce((acc, secretName) => {
    acc[secretName] = new cloud_1.CloudSecret(secretName);
    return acc;
}, {});
exports.cloudTasks = Object.values(cloud_1.CloudTaskName).reduce((acc, taskName) => {
    acc[taskName] = new cloud_1.CloudTask(taskName);
    return acc;
}, {});
exports.functionTriggerTopicNames = {
    [cloud_1.CloudFunctionName.calculatePriceRecommendations]: pubsub_1.PubSubTopicName.calculatePriceRecommendations,
    [cloud_1.CloudFunctionName.fetchBasketDataAndIndexesPreProd]: pubsub_1.PubSubTopicName.calculateBasketIndexesPreProd,
    [cloud_1.CloudFunctionName.fetchBasketDataAndIndexesProd]: pubsub_1.PubSubTopicName.calculateBasketIndexesProd,
    [cloud_1.CloudFunctionName.errorNotifier]: pubsub_1.PubSubTopicName.notifyError,
    [cloud_1.CloudFunctionName.fetchProductDataPreProdAkeneo]: pubsub_1.PubSubTopicName.fetchProductData,
    [cloud_1.CloudFunctionName.fetchProductDataProdAkeneo]: pubsub_1.PubSubTopicName.fetchProductData,
    [cloud_1.CloudFunctionName.handlePriceRecommendationsPreProd]: pubsub_1.PubSubTopicName.sendPriceRecommendations,
    [cloud_1.CloudFunctionName.handlePriceRecommendationsProd]: pubsub_1.PubSubTopicName.sendPriceRecommendations,
    [cloud_1.CloudFunctionName.initiateApifyScrapeProd]: pubsub_1.PubSubTopicName.scrapeProducts,
    [cloud_1.CloudFunctionName.initiateApifyScrapePreProd]: pubsub_1.PubSubTopicName.scrapeProducts,
    [cloud_1.CloudFunctionName.piScheduleEventHandler]: pubsub_1.PubSubTopicName.piScheduleEventHandler,
    [cloud_1.CloudFunctionName.saveScaledPricesPreProd]: pubsub_1.PubSubTopicName.calculateScaledPrices,
    [cloud_1.CloudFunctionName.saveScaledPricesProd]: pubsub_1.PubSubTopicName.calculateScaledPrices,
    [cloud_1.CloudFunctionName.testLogger]: pubsub_1.PubSubTopicName.testLogger,
};
exports.functionDirNames = {
    [cloud_1.CloudFunctionName.testLogger]: "logger-test",
};
exports.functionEnvVars = {
    [cloud_1.CloudFunctionName.handlePriceRecommendationsPreProd]: {
        DO_SEND_TO_AKENEO: "0", // controls if the recommendations are sent to akeneo, must be "1" to send. Off for monitoring phase
    },
    [cloud_1.CloudFunctionName.handlePriceRecommendationsProd]: {
        DO_SEND_TO_AKENEO: "0", // controls if the recommendations are sent to akeneo, must be "1" to send. Off for monitoring phase
    },
    [cloud_1.CloudFunctionName.fetchProductDataPreProdAkeneo]: {
        SAVE_TO_DB: "1",
        USE_TCP_DB: "1", // controls if the recommendations are saved to db, must be "1" to save. Off for pre-prod
    },
    [cloud_1.CloudFunctionName.fetchProductDataProdAkeneo]: {
        SAVE_TO_DB: "1", // controls if the recommendations are saved to db, must be "1" to send. On for prod
    },
};
exports.functionVpcConnectorOptions = {
    [cloud_1.CloudFunctionName.fetchProductDataProdAkeneo]: {
        vpcConnector: cloud_1.VPCConnector.vpcAccessConnector,
        egressSettings: "private-ranges-only",
    },
    [cloud_1.CloudFunctionName.fetchProductDataPreProdAkeneo]: {
        vpcConnector: cloud_1.VPCConnector.vpcAccessConnector,
        egressSettings: "private-ranges-only",
    },
    [cloud_1.CloudFunctionName.handlePriceRecommendationsPreProd]: {
        vpcConnector: cloud_1.VPCConnector.vpcAccessConnector,
        egressSettings: "private-ranges-only",
    },
    [cloud_1.CloudFunctionName.handlePriceRecommendationsProd]: {
        vpcConnector: cloud_1.VPCConnector.vpcAccessConnector,
        egressSettings: "private-ranges-only",
    },
    [cloud_1.CloudFunctionName.fetchBasketDataAndIndexesPreProd]: {
        vpcConnector: cloud_1.VPCConnector.vpcAccessConnector,
        egressSettings: "private-ranges-only",
    },
    [cloud_1.CloudFunctionName.fetchBasketDataAndIndexesProd]: {
        vpcConnector: cloud_1.VPCConnector.vpcAccessConnector,
        egressSettings: "private-ranges-only",
    },
};
const getCloudFunctions = () => {
    const topics = (0, pubsub_module_1.getPubSubTopics)();
    return Object.values(cloud_1.CloudFunctionName).reduce((acc, functionName) => {
        const triggerTopicName = exports.functionTriggerTopicNames[functionName];
        const triggerTopic = triggerTopicName ? topics[triggerTopicName] : "http";
        acc[functionName] = new cloud_1.CloudFunction(functionName, triggerTopic);
        return acc;
    }, {});
};
exports.getCloudFunctions = getCloudFunctions;
const getCloudFunction = (functionName) => {
    const triggerTopicName = exports.functionTriggerTopicNames[functionName];
    const functionDir = exports.functionDirNames[functionName];
    const triggerTopic = triggerTopicName
        ? (0, pubsub_module_1.getPubSubTopic)(triggerTopicName)
        : "http";
    const cloudFunction = new cloud_1.CloudFunction(functionName, triggerTopic, functionDir);
    if (exports.functionEnvVars[functionName]) {
        cloudFunction.setEnvVars(exports.functionEnvVars[functionName]);
    }
    if (exports.functionVpcConnectorOptions[functionName]) {
        cloudFunction.setVpcConnectorOptions(exports.functionVpcConnectorOptions[functionName]);
    }
    return cloudFunction;
};
exports.getCloudFunction = getCloudFunction;
//# sourceMappingURL=cloud.module.js.map