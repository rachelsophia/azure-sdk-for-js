/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Principals: msRest.CompositeMapper = {
  serializedName: "Principals",
  type: {
    name: "Composite",
    className: "Principals",
    modelProperties: {
      upn: {
        serializedName: "upn",
        type: {
          name: "String"
        }
      },
      objectId: {
        serializedName: "objectId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ADCCatalogProperties: msRest.CompositeMapper = {
  serializedName: "ADCCatalogProperties",
  type: {
    name: "Composite",
    className: "ADCCatalogProperties",
    modelProperties: {
      sku: {
        serializedName: "sku",
        type: {
          name: "String"
        }
      },
      units: {
        serializedName: "units",
        type: {
          name: "Number"
        }
      },
      admins: {
        serializedName: "admins",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Principals"
            }
          }
        }
      },
      users: {
        serializedName: "users",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Principals"
            }
          }
        }
      },
      successfullyProvisioned: {
        serializedName: "successfullyProvisioned",
        type: {
          name: "Boolean"
        }
      },
      enableAutomaticUnitAdjustment: {
        serializedName: "enableAutomaticUnitAdjustment",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ADCCatalog: msRest.CompositeMapper = {
  serializedName: "ADCCatalog",
  type: {
    name: "Composite",
    className: "ADCCatalog",
    modelProperties: {
      ...Resource.type.modelProperties,
      sku: {
        serializedName: "properties.sku",
        type: {
          name: "String"
        }
      },
      units: {
        serializedName: "properties.units",
        type: {
          name: "Number"
        }
      },
      admins: {
        serializedName: "properties.admins",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Principals"
            }
          }
        }
      },
      users: {
        serializedName: "properties.users",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Principals"
            }
          }
        }
      },
      successfullyProvisioned: {
        serializedName: "properties.successfullyProvisioned",
        type: {
          name: "Boolean"
        }
      },
      enableAutomaticUnitAdjustment: {
        serializedName: "properties.enableAutomaticUnitAdjustment",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ADCCatalogsListResult: msRest.CompositeMapper = {
  serializedName: "ADCCatalogsListResult",
  type: {
    name: "Composite",
    className: "ADCCatalogsListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ADCCatalog"
            }
          }
        }
      }
    }
  }
};

export const OperationDisplayInfo: msRest.CompositeMapper = {
  serializedName: "OperationDisplayInfo",
  type: {
    name: "Composite",
    className: "OperationDisplayInfo",
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationEntity: msRest.CompositeMapper = {
  serializedName: "OperationEntity",
  type: {
    name: "Composite",
    className: "OperationEntity",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplayInfo"
        }
      }
    }
  }
};

export const OperationEntityListResult: msRest.CompositeMapper = {
  serializedName: "OperationEntityListResult",
  type: {
    name: "Composite",
    className: "OperationEntityListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationEntity"
            }
          }
        }
      }
    }
  }
};
