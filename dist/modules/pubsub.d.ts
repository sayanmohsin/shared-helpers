import { Topic } from "@google-cloud/pubsub";
import { ProjectId } from "./project";
export declare enum PubSubTopicName {
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
    testLogger = "test_logger"
}
export declare type PubSubTopics = {
    [topicName in PubSubTopicName]: PubSubTopic;
};
export declare type PubSubCallback = (error?: any, returnValue?: any) => void;
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
export declare class PubSubTopic implements IPubSubTopic {
    relativeResourceString: string;
    name: PubSubTopicName;
    constructor(topicName: PubSubTopicName);
    getResourceStringForProject(projectId: ProjectId): string;
}
export declare const parseEvent: (event: PubSubEvent) => ParsedMessage;
export declare const getTopicForProject: (projectId: ProjectId, topicName: PubSubTopicName) => Topic;
export declare const getPubSubTopics: () => PubSubTopics;
export declare const getPubSubTopic: (topicName: PubSubTopicName) => PubSubTopic;
//# sourceMappingURL=pubsub.d.ts.map