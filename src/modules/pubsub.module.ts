import { PubSub, Topic } from "@google-cloud/pubsub";
import { ProjectId } from "../types/project";
import { ParsedMessage, PubSubEvent, PubSubTopic, PubSubTopicName, PubSubTopics } from "../types/pubsub";

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