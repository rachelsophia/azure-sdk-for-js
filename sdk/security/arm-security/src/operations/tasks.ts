/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Tasks } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  SecurityTask,
  TasksListNextOptionalParams,
  TasksListOptionalParams,
  TasksListByHomeRegionNextOptionalParams,
  TasksListByHomeRegionOptionalParams,
  TasksListByResourceGroupNextOptionalParams,
  TasksListByResourceGroupOptionalParams,
  TasksListResponse,
  TasksListByHomeRegionResponse,
  TasksGetSubscriptionLevelTaskOptionalParams,
  TasksGetSubscriptionLevelTaskResponse,
  TaskUpdateActionType,
  TasksUpdateSubscriptionLevelTaskStateOptionalParams,
  TasksListByResourceGroupResponse,
  TasksGetResourceGroupLevelTaskOptionalParams,
  TasksGetResourceGroupLevelTaskResponse,
  TasksUpdateResourceGroupLevelTaskStateOptionalParams,
  TasksListNextResponse,
  TasksListByHomeRegionNextResponse,
  TasksListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Tasks operations. */
export class TasksImpl implements Tasks {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class Tasks class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param options The options parameters.
   */
  public list(
    options?: TasksListOptionalParams
  ): PagedAsyncIterableIterator<SecurityTask> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: TasksListOptionalParams
  ): AsyncIterableIterator<SecurityTask[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: TasksListOptionalParams
  ): AsyncIterableIterator<SecurityTask> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  public listByHomeRegion(
    ascLocation: string,
    options?: TasksListByHomeRegionOptionalParams
  ): PagedAsyncIterableIterator<SecurityTask> {
    const iter = this.listByHomeRegionPagingAll(ascLocation, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByHomeRegionPagingPage(ascLocation, options);
      }
    };
  }

  private async *listByHomeRegionPagingPage(
    ascLocation: string,
    options?: TasksListByHomeRegionOptionalParams
  ): AsyncIterableIterator<SecurityTask[]> {
    let result = await this._listByHomeRegion(ascLocation, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByHomeRegionNext(
        ascLocation,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByHomeRegionPagingAll(
    ascLocation: string,
    options?: TasksListByHomeRegionOptionalParams
  ): AsyncIterableIterator<SecurityTask> {
    for await (const page of this.listByHomeRegionPagingPage(
      ascLocation,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    ascLocation: string,
    options?: TasksListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<SecurityTask> {
    const iter = this.listByResourceGroupPagingAll(
      resourceGroupName,
      ascLocation,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          ascLocation,
          options
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    ascLocation: string,
    options?: TasksListByResourceGroupOptionalParams
  ): AsyncIterableIterator<SecurityTask[]> {
    let result = await this._listByResourceGroup(
      resourceGroupName,
      ascLocation,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        ascLocation,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    ascLocation: string,
    options?: TasksListByResourceGroupOptionalParams
  ): AsyncIterableIterator<SecurityTask> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      ascLocation,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param options The options parameters.
   */
  private _list(options?: TasksListOptionalParams): Promise<TasksListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  private _listByHomeRegion(
    ascLocation: string,
    options?: TasksListByHomeRegionOptionalParams
  ): Promise<TasksListByHomeRegionResponse> {
    return this.client.sendOperationRequest(
      { ascLocation, options },
      listByHomeRegionOperationSpec
    );
  }

  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param taskName Name of the task object, will be a GUID
   * @param options The options parameters.
   */
  getSubscriptionLevelTask(
    ascLocation: string,
    taskName: string,
    options?: TasksGetSubscriptionLevelTaskOptionalParams
  ): Promise<TasksGetSubscriptionLevelTaskResponse> {
    return this.client.sendOperationRequest(
      { ascLocation, taskName, options },
      getSubscriptionLevelTaskOperationSpec
    );
  }

  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param taskName Name of the task object, will be a GUID
   * @param taskUpdateActionType Type of the action to do on the task
   * @param options The options parameters.
   */
  updateSubscriptionLevelTaskState(
    ascLocation: string,
    taskName: string,
    taskUpdateActionType: TaskUpdateActionType,
    options?: TasksUpdateSubscriptionLevelTaskStateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { ascLocation, taskName, taskUpdateActionType, options },
      updateSubscriptionLevelTaskStateOperationSpec
    );
  }

  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    ascLocation: string,
    options?: TasksListByResourceGroupOptionalParams
  ): Promise<TasksListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ascLocation, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param taskName Name of the task object, will be a GUID
   * @param options The options parameters.
   */
  getResourceGroupLevelTask(
    resourceGroupName: string,
    ascLocation: string,
    taskName: string,
    options?: TasksGetResourceGroupLevelTaskOptionalParams
  ): Promise<TasksGetResourceGroupLevelTaskResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ascLocation, taskName, options },
      getResourceGroupLevelTaskOperationSpec
    );
  }

  /**
   * Recommended tasks that will help improve the security of the subscription proactively
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param taskName Name of the task object, will be a GUID
   * @param taskUpdateActionType Type of the action to do on the task
   * @param options The options parameters.
   */
  updateResourceGroupLevelTaskState(
    resourceGroupName: string,
    ascLocation: string,
    taskName: string,
    taskUpdateActionType: TaskUpdateActionType,
    options?: TasksUpdateResourceGroupLevelTaskStateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        ascLocation,
        taskName,
        taskUpdateActionType,
        options
      },
      updateResourceGroupLevelTaskStateOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: TasksListNextOptionalParams
  ): Promise<TasksListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByHomeRegionNext
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param nextLink The nextLink from the previous successful call to the ListByHomeRegion method.
   * @param options The options parameters.
   */
  private _listByHomeRegionNext(
    ascLocation: string,
    nextLink: string,
    options?: TasksListByHomeRegionNextOptionalParams
  ): Promise<TasksListByHomeRegionNextResponse> {
    return this.client.sendOperationRequest(
      { ascLocation, nextLink, options },
      listByHomeRegionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved from
   *                    Get locations
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    ascLocation: string,
    nextLink: string,
    options?: TasksListByResourceGroupNextOptionalParams
  ): Promise<TasksListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ascLocation, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Security/tasks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityTaskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion6],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHomeRegionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/tasks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityTaskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getSubscriptionLevelTaskOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/tasks/{taskName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityTask
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.taskName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateSubscriptionLevelTaskStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/tasks/{taskName}/{taskUpdateActionType}",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation,
    Parameters.taskName,
    Parameters.taskUpdateActionType
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/tasks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityTaskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getResourceGroupLevelTaskOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/tasks/{taskName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityTask
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation,
    Parameters.taskName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateResourceGroupLevelTaskStateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/tasks/{taskName}/{taskUpdateActionType}",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation,
    Parameters.taskName,
    Parameters.taskUpdateActionType
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityTaskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHomeRegionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityTaskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.ascLocation
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityTaskList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.filter, Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.ascLocation
  ],
  headerParameters: [Parameters.accept],
  serializer
};
