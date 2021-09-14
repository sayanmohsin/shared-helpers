import { PubSub, Topic } from "@google-cloud/pubsub";
import { ProjectId } from "./project";

export enum PubSubTopicName {
    calculatePriceRecommendations = "calculate_price_recommendations",
    calculateScaledPrices = "calculate_scaled_prices",
    calculateBasketIndexesPreProd = "calculate_basket_indexes_pre_prod",
    calculateBasketIndexesProd = "calculate_basket_indexes_prod",
    fetchProductData = "fetch_product_data",
    fetchBasketData = "fetch_basket_data",
    notifyError = "notify_error",
    piScheduleEventHandler = "pi_schedule_event_handler",
    scrapeProducts = "scrape_products",
    sendPriceRecommendations = "send_price_recommendations",
    testLogger = "test_logger",
}

export type PubSubTopics = {
    [topicName in PubSubTopicName]: PubSubTopic;
};

export type PubSubCallback = (error?: any, returnValue?: any) => void;

export interface IPubSubTopic {
    name: PubSubTopicName;
    relativeResourceString: string;
    getResourceStringForProject(projectId: ProjectId): string;
}

export interface PubSubEvent extends Record<string, unknown> {
    data: string;
    attributes: {
        string: string;
    };
    messageId: string;
    publishTime: string;
    orderingKey: string;
}

export interface PubSubContext extends Record<string, unknown> {
    eventId: string;
    timestamp: string;
    eventType: string;
    resource: Record<string, unknown>;
}

export interface ParsedMessage {
    data: Record<string, unknown>;
}

export class PubSubTopic implements IPubSubTopic {
    public relativeResourceString: string;
    public name;
    constructor(topicName: PubSubTopicName) {
        this.name = topicName;
        this.relativeResourceString = `topics/${topicName}`;
    }
    getResourceStringForProject(projectId: ProjectId): string {
        return `projects/${projectId}/${this.relativeResourceString}`;
    }
}

export const parseEvent = (event: PubSubEvent): ParsedMessage => {
    const data: Record<string, unknown> = JSON.parse(
        event?.data ? Buffer.from(event.data, "base64").toString() : "{}"
    );
    return { data };
};

let pubSubSingleton: PubSub;

const topicMap: { [topicName in PubSubTopicName]?: Topic } = {};

export const getTopicForProject = (
    projectId: ProjectId,
    topicName: PubSubTopicName
): Topic => {
    if (!pubSubSingleton) {
        pubSubSingleton = new PubSub();
    }
    if (!topicMap[topicName]) {
        const topicConfig = getPubSubTopic(topicName);
        topicMap[topicName] = pubSubSingleton.topic(
            topicConfig.getResourceStringForProject(projectId)
        );
    }
    return topicMap[topicName] as Topic;
};

export const getPubSubTopics = (): PubSubTopics =>
    Object.values(PubSubTopicName).reduce(
        (acc: Partial<PubSubTopics>, topicName: PubSubTopicName) => {
            acc[topicName] = new PubSubTopic(topicName);
            return acc;
        },
        {} as Partial<PubSubTopics>
    ) as PubSubTopics;

export const getPubSubTopic = (topicName: PubSubTopicName): PubSubTopic =>
    new PubSubTopic(topicName);