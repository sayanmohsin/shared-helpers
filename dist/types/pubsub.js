"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubSubTopic = exports.PubSubTopicName = void 0;
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
//# sourceMappingURL=pubsub.js.map