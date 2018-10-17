/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/topicsMappers";
import * as Parameters from "../models/parameters";
import { ServiceBusManagementClientContext } from "../serviceBusManagementClientContext";

/** Class representing a Topics. */
export class Topics {
  private readonly client: ServiceBusManagementClientContext;

  /**
   * Create a Topics.
   * @param {ServiceBusManagementClientContext} client Reference to the service client.
   */
  constructor(client: ServiceBusManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the topics in a namespace.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsListByNamespaceResponse>
   */
  listByNamespace(resourceGroupName: string, namespaceName: string, options?: Models.TopicsListByNamespaceOptionalParams): Promise<Models.TopicsListByNamespaceResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param callback The callback
   */
  listByNamespace(resourceGroupName: string, namespaceName: string, callback: msRest.ServiceCallback<Models.SBTopicListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByNamespace(resourceGroupName: string, namespaceName: string, options: Models.TopicsListByNamespaceOptionalParams, callback: msRest.ServiceCallback<Models.SBTopicListResult>): void;
  listByNamespace(resourceGroupName: string, namespaceName: string, options?: Models.TopicsListByNamespaceOptionalParams, callback?: msRest.ServiceCallback<Models.SBTopicListResult>): Promise<Models.TopicsListByNamespaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        options
      },
      listByNamespaceOperationSpec,
      callback) as Promise<Models.TopicsListByNamespaceResponse>;
  }

  /**
   * Creates a topic in the specified namespace.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param parameters Parameters supplied to create a topic resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, topicName: string, parameters: Models.SBTopic, options?: msRest.RequestOptionsBase): Promise<Models.TopicsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param parameters Parameters supplied to create a topic resource.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, topicName: string, parameters: Models.SBTopic, callback: msRest.ServiceCallback<Models.SBTopic>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param parameters Parameters supplied to create a topic resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, topicName: string, parameters: Models.SBTopic, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SBTopic>): void;
  createOrUpdate(resourceGroupName: string, namespaceName: string, topicName: string, parameters: Models.SBTopic, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SBTopic>): Promise<Models.TopicsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.TopicsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a topic from the specified namespace and resource group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, topicName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, topicName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, topicName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, namespaceName: string, topicName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Returns a description for the specified topic.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsGetResponse>
   */
  get(resourceGroupName: string, namespaceName: string, topicName: string, options?: msRest.RequestOptionsBase): Promise<Models.TopicsGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param callback The callback
   */
  get(resourceGroupName: string, namespaceName: string, topicName: string, callback: msRest.ServiceCallback<Models.SBTopic>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, namespaceName: string, topicName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SBTopic>): void;
  get(resourceGroupName: string, namespaceName: string, topicName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SBTopic>): Promise<Models.TopicsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TopicsGetResponse>;
  }

  /**
   * Gets authorization rules for a topic.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsListAuthorizationRulesResponse>
   */
  listAuthorizationRules(resourceGroupName: string, namespaceName: string, topicName: string, options?: msRest.RequestOptionsBase): Promise<Models.TopicsListAuthorizationRulesResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param callback The callback
   */
  listAuthorizationRules(resourceGroupName: string, namespaceName: string, topicName: string, callback: msRest.ServiceCallback<Models.SBAuthorizationRuleListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAuthorizationRules(resourceGroupName: string, namespaceName: string, topicName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SBAuthorizationRuleListResult>): void;
  listAuthorizationRules(resourceGroupName: string, namespaceName: string, topicName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SBAuthorizationRuleListResult>): Promise<Models.TopicsListAuthorizationRulesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        options
      },
      listAuthorizationRulesOperationSpec,
      callback) as Promise<Models.TopicsListAuthorizationRulesResponse>;
  }

  /**
   * Creates an authorizatio rule for the specified topic.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param parameters The shared access authorization rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsCreateOrUpdateAuthorizationRuleResponse>
   */
  createOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, parameters: Models.SBAuthorizationRule, options?: msRest.RequestOptionsBase): Promise<Models.TopicsCreateOrUpdateAuthorizationRuleResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param parameters The shared access authorization rule.
   * @param callback The callback
   */
  createOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, parameters: Models.SBAuthorizationRule, callback: msRest.ServiceCallback<Models.SBAuthorizationRule>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param parameters The shared access authorization rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, parameters: Models.SBAuthorizationRule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SBAuthorizationRule>): void;
  createOrUpdateAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, parameters: Models.SBAuthorizationRule, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SBAuthorizationRule>): Promise<Models.TopicsCreateOrUpdateAuthorizationRuleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        authorizationRuleName,
        parameters,
        options
      },
      createOrUpdateAuthorizationRuleOperationSpec,
      callback) as Promise<Models.TopicsCreateOrUpdateAuthorizationRuleResponse>;
  }

  /**
   * Returns the specified authorization rule.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsGetAuthorizationRuleResponse>
   */
  getAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.TopicsGetAuthorizationRuleResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param callback The callback
   */
  getAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, callback: msRest.ServiceCallback<Models.SBAuthorizationRule>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param options The optional parameters
   * @param callback The callback
   */
  getAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SBAuthorizationRule>): void;
  getAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SBAuthorizationRule>): Promise<Models.TopicsGetAuthorizationRuleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        authorizationRuleName,
        options
      },
      getAuthorizationRuleOperationSpec,
      callback) as Promise<Models.TopicsGetAuthorizationRuleResponse>;
  }

  /**
   * Deletes a topic authorization rule.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param callback The callback
   */
  deleteAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteAuthorizationRule(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        authorizationRuleName,
        options
      },
      deleteAuthorizationRuleOperationSpec,
      callback);
  }

  /**
   * Gets the primary and secondary connection strings for the topic.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsListKeysResponse>
   */
  listKeys(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase): Promise<Models.TopicsListKeysResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, callback: msRest.ServiceCallback<Models.AccessKeys>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listKeys(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessKeys>): void;
  listKeys(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AccessKeys>): Promise<Models.TopicsListKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        authorizationRuleName,
        options
      },
      listKeysOperationSpec,
      callback) as Promise<Models.TopicsListKeysResponse>;
  }

  /**
   * Regenerates primary or secondary connection strings for the topic.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param parameters Parameters supplied to regenerate the authorization rule.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsRegenerateKeysResponse>
   */
  regenerateKeys(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, parameters: Models.RegenerateAccessKeyParameters, options?: msRest.RequestOptionsBase): Promise<Models.TopicsRegenerateKeysResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param parameters Parameters supplied to regenerate the authorization rule.
   * @param callback The callback
   */
  regenerateKeys(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, parameters: Models.RegenerateAccessKeyParameters, callback: msRest.ServiceCallback<Models.AccessKeys>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param topicName The topic name.
   * @param authorizationRuleName The authorizationrule name.
   * @param parameters Parameters supplied to regenerate the authorization rule.
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateKeys(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, parameters: Models.RegenerateAccessKeyParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessKeys>): void;
  regenerateKeys(resourceGroupName: string, namespaceName: string, topicName: string, authorizationRuleName: string, parameters: Models.RegenerateAccessKeyParameters, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.AccessKeys>): Promise<Models.TopicsRegenerateKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        topicName,
        authorizationRuleName,
        parameters,
        options
      },
      regenerateKeysOperationSpec,
      callback) as Promise<Models.TopicsRegenerateKeysResponse>;
  }

  /**
   * Gets all the topics in a namespace.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsListByNamespaceNextResponse>
   */
  listByNamespaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TopicsListByNamespaceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByNamespaceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SBTopicListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByNamespaceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SBTopicListResult>): void;
  listByNamespaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SBTopicListResult>): Promise<Models.TopicsListByNamespaceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByNamespaceNextOperationSpec,
      callback) as Promise<Models.TopicsListByNamespaceNextResponse>;
  }

  /**
   * Gets authorization rules for a topic.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsListAuthorizationRulesNextResponse>
   */
  listAuthorizationRulesNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.TopicsListAuthorizationRulesNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listAuthorizationRulesNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SBAuthorizationRuleListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listAuthorizationRulesNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SBAuthorizationRuleListResult>): void;
  listAuthorizationRulesNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SBAuthorizationRuleListResult>): Promise<Models.TopicsListAuthorizationRulesNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listAuthorizationRulesNextOperationSpec,
      callback) as Promise<Models.TopicsListAuthorizationRulesNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByNamespaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SBTopicListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SBTopic,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SBTopic
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SBTopic
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listAuthorizationRulesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SBAuthorizationRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateAuthorizationRuleOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.authorizationRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SBAuthorizationRule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SBAuthorizationRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getAuthorizationRuleOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.authorizationRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SBAuthorizationRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteAuthorizationRuleOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.authorizationRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}/ListKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.authorizationRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccessKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const regenerateKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/topics/{topicName}/authorizationRules/{authorizationRuleName}/regenerateKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.topicName,
    Parameters.authorizationRuleName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.RegenerateAccessKeyParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccessKeys
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByNamespaceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SBTopicListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listAuthorizationRulesNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SBAuthorizationRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
