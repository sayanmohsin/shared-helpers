import { CloudFunction, CloudFunctionName, CloudFunctions, CloudSecret, CloudSecretName, CloudSecrets, CloudTask, CloudTaskName, CloudTasks, VPCConnector, VPCConnectorOptions } from "../types/cloud";
import { PubSubTopicName } from "../types/pubsub";
import { getPubSubTopic, getPubSubTopics } from "./pubsub.module";

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