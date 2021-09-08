"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPubSubTopic = exports.getPubSubTopics = exports.getTopicForProject = exports.parseEvent = void 0;
const pubsub_1 = require("@google-cloud/pubsub");
const pubsub_2 = require("../types/pubsub");
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
const getPubSubTopics = () => Object.values(pubsub_2.PubSubTopicName).reduce((acc, topicName) => {
    acc[topicName] = new pubsub_2.PubSubTopic(topicName);
    return acc;
}, {});
exports.getPubSubTopics = getPubSubTopics;
const getPubSubTopic = (topicName) => new pubsub_2.PubSubTopic(topicName);
exports.getPubSubTopic = getPubSubTopic;
//# sourceMappingURL=pubsub.module.js.map