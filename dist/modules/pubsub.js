"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPubSubTopic = exports.getPubSubTopics = exports.getTopicForProject = exports.parseEvent = exports.PubSubTopic = exports.PubSubTopicName = void 0;
const pubsub_1 = require("@google-cloud/pubsub");
var PubSubTopicName;
(function (PubSubTopicName) {
    PubSubTopicName["calculatePriceRecommendations"] = "calculate_price_recommendations";
    PubSubTopicName["calculateScaledPrices"] = "calculate_scaled_prices";
    PubSubTopicName["calculateBasketIndexesPreProd"] = "calculate_basket_indexes_pre_prod";
    PubSubTopicName["calculateBasketIndexesProd"] = "calculate_basket_indexes_prod";
    PubSubTopicName["fetchProductData"] = "fetch_product_data";
    PubSubTopicName["fetchBasketData"] = "fetch_basket_data";
    PubSubTopicName["notifyError"] = "notify_error";
    PubSubTopicName["piScheduleEventHandler"] = "pi_schedule_event_handler";
    PubSubTopicName["scrapeProducts"] = "scrape_products";
    PubSubTopicName["sendPriceRecommendations"] = "send_price_recommendations";
    PubSubTopicName["testLogger"] = "test_logger";
})(PubSubTopicName = exports.PubSubTopicName || (exports.PubSubTopicName = {}));
class PubSubTopic {
    constructor(topicName) {
        this.name = topicName;
        this.relativeResourceString = `topics/${topicName}`;
    }
    getResourceStringForProject(projectId) {
        return `projects/${projectId}/${this.relativeResourceString}`;
    }
}
exports.PubSubTopic = PubSubTopic;
const parseEvent = (event) => {
    const data = JSON.parse((event === null || event === void 0 ? void 0 : event.data) ? Buffer.from(event.data, "base64").toString() : "{}");
    return { data };
};
exports.parseEvent = parseEvent;
let pubSubSingleton;
const topicMap = {};
const getTopicForProject = (projectId, topicName) => {
    if (!pubSubSingleton) {
        pubSubSingleton = new pubsub_1.PubSub();
    }
    if (!topicMap[topicName]) {
        const topicConfig = (0, exports.getPubSubTopic)(topicName);
        topicMap[topicName] = pubSubSingleton.topic(topicConfig.getResourceStringForProject(projectId));
    }
    return topicMap[topicName];
};
exports.getTopicForProject = getTopicForProject;
const getPubSubTopics = () => Object.values(PubSubTopicName).reduce((acc, topicName) => {
    acc[topicName] = new PubSubTopic(topicName);
    return acc;
}, {});
exports.getPubSubTopics = getPubSubTopics;
const getPubSubTopic = (topicName) => new PubSubTopic(topicName);
exports.getPubSubTopic = getPubSubTopic;
//# sourceMappingURL=pubsub.js.map