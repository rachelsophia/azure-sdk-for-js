/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  Remediation as RemediationMapper,
  CheckRestrictionsRequest as CheckRestrictionsRequestMapper,
  Attestation as AttestationMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const managementGroupsNamespace: OperationURLParameter = {
  parameterPath: "managementGroupsNamespace",
  mapper: {
    defaultValue: "Microsoft.Management",
    isConstant: true,
    serializedName: "managementGroupsNamespace",
    type: {
      name: "String"
    }
  }
};

export const managementGroupName: OperationURLParameter = {
  parameterPath: "managementGroupName",
  mapper: {
    serializedName: "managementGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const policyTrackedResourcesResource: OperationURLParameter = {
  parameterPath: "policyTrackedResourcesResource",
  mapper: {
    defaultValue: "default",
    isConstant: true,
    serializedName: "policyTrackedResourcesResource",
    type: {
      name: "String"
    }
  }
};

export const top: OperationQueryParameter = {
  parameterPath: ["options", "queryOptions", "top"],
  mapper: {
    constraints: {
      InclusiveMinimum: 0
    },
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "queryOptions", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2018-07-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceId: OperationURLParameter = {
  parameterPath: "resourceId",
  mapper: {
    serializedName: "resourceId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const managementGroupId: OperationURLParameter = {
  parameterPath: "managementGroupId",
  mapper: {
    serializedName: "managementGroupId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const remediationName: OperationURLParameter = {
  parameterPath: "remediationName",
  mapper: {
    serializedName: "remediationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-10-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: RemediationMapper
};

export const policyEventsResource: OperationURLParameter = {
  parameterPath: "policyEventsResource",
  mapper: {
    defaultValue: "default",
    isConstant: true,
    serializedName: "policyEventsResource",
    type: {
      name: "String"
    }
  }
};

export const apiVersion2: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2019-10-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const orderBy: OperationQueryParameter = {
  parameterPath: ["options", "queryOptions", "orderBy"],
  mapper: {
    serializedName: "$orderby",
    type: {
      name: "String"
    }
  }
};

export const select: OperationQueryParameter = {
  parameterPath: ["options", "queryOptions", "select"],
  mapper: {
    serializedName: "$select",
    type: {
      name: "String"
    }
  }
};

export const fromParam: OperationQueryParameter = {
  parameterPath: ["options", "queryOptions", "fromParam"],
  mapper: {
    serializedName: "$from",
    type: {
      name: "DateTime"
    }
  }
};

export const to: OperationQueryParameter = {
  parameterPath: ["options", "queryOptions", "to"],
  mapper: {
    serializedName: "$to",
    type: {
      name: "DateTime"
    }
  }
};

export const apply: OperationQueryParameter = {
  parameterPath: ["options", "queryOptions", "apply"],
  mapper: {
    serializedName: "$apply",
    type: {
      name: "String"
    }
  }
};

export const skipToken: OperationQueryParameter = {
  parameterPath: ["options", "queryOptions", "skipToken"],
  mapper: {
    serializedName: "$skiptoken",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId1: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "queryOptions", "expand"],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const authorizationNamespace: OperationURLParameter = {
  parameterPath: "authorizationNamespace",
  mapper: {
    defaultValue: "Microsoft.Authorization",
    isConstant: true,
    serializedName: "authorizationNamespace",
    type: {
      name: "String"
    }
  }
};

export const policySetDefinitionName: OperationURLParameter = {
  parameterPath: "policySetDefinitionName",
  mapper: {
    serializedName: "policySetDefinitionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const policyDefinitionName: OperationURLParameter = {
  parameterPath: "policyDefinitionName",
  mapper: {
    serializedName: "policyDefinitionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const policyAssignmentName: OperationURLParameter = {
  parameterPath: "policyAssignmentName",
  mapper: {
    serializedName: "policyAssignmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const policyStatesResource: OperationURLParameter = {
  parameterPath: "policyStatesResource",
  mapper: {
    serializedName: "policyStatesResource",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const policyStatesSummaryResource: OperationURLParameter = {
  parameterPath: "policyStatesSummaryResource",
  mapper: {
    defaultValue: "latest",
    isConstant: true,
    serializedName: "policyStatesSummaryResource",
    type: {
      name: "String"
    }
  }
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: CheckRestrictionsRequestMapper
};

export const apiVersion3: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-07-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName1: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion4: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-01-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: AttestationMapper
};

export const attestationName: OperationURLParameter = {
  parameterPath: "attestationName",
  mapper: {
    serializedName: "attestationName",
    required: true,
    type: {
      name: "String"
    }
  }
};
