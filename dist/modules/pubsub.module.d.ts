import { Topic } from "@google-cloud/pubsub";
import { ProjectId } from "../types/project";
import { ParsedMessage, PubSubEvent, PubSubTopic, PubSubTopicName, PubSubTopics } from "../types/pubsub";
export declare const parseEvent: (event: PubSubEvent) => ParsedMessage;
export declare const getTopicForProject: (projectId: ProjectId, topicName: PubSubTopicName) => Topic;
export declare const getPubSubTopics: () => PubSubTopics;
export declare const getPubSubTopic: (topicName: PubSubTopicName) => PubSubTopic;
//# sourceMappingURL=pubsub.module.d.ts.map