import { CloudFunction, CloudFunctionName, CloudFunctions, CloudSecrets, CloudTasks, VPCConnectorOptions } from "../types/cloud";
import { PubSubTopicName } from "../types/pubsub";
export declare const cloudSecrets: CloudSecrets;
export declare const cloudTasks: CloudTasks;
export declare const functionTriggerTopicNames: Partial<{
    [functionName in CloudFunctionName]: PubSubTopicName;
}>;
export declare const functionDirNames: Partial<{
    [functionName in CloudFunctionName]: string;
}>;
export declare const functionEnvVars: Partial<{
    [functionName in CloudFunctionName]: Record<string, string>;
}>;
export declare const functionVpcConnectorOptions: Partial<{
    [functionName in CloudFunctionName]: VPCConnectorOptions;
}>;
export declare const getCloudFunctions: () => CloudFunctions;
export declare const getCloudFunction: (functionName: CloudFunctionName) => CloudFunction;
//# sourceMappingURL=cloud.module.d.ts.map