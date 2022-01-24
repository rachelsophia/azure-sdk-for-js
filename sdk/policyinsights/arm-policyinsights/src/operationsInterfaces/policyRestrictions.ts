/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  CheckRestrictionsRequest,
  PolicyRestrictionsCheckAtSubscriptionScopeOptionalParams,
  PolicyRestrictionsCheckAtSubscriptionScopeResponse,
  PolicyRestrictionsCheckAtResourceGroupScopeOptionalParams,
  PolicyRestrictionsCheckAtResourceGroupScopeResponse
} from "../models";

/** Interface representing a PolicyRestrictions. */
export interface PolicyRestrictions {
  /**
   * Checks what restrictions Azure Policy will place on a resource within a subscription.
   * @param parameters The check policy restrictions parameters.
   * @param options The options parameters.
   */
  checkAtSubscriptionScope(
    parameters: CheckRestrictionsRequest,
    options?: PolicyRestrictionsCheckAtSubscriptionScopeOptionalParams
  ): Promise<PolicyRestrictionsCheckAtSubscriptionScopeResponse>;
  /**
   * Checks what restrictions Azure Policy will place on a resource within a resource group. Use this
   * when the resource group the resource will be created in is already known.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param parameters The check policy restrictions parameters.
   * @param options The options parameters.
   */
  checkAtResourceGroupScope(
    resourceGroupName: string,
    parameters: CheckRestrictionsRequest,
    options?: PolicyRestrictionsCheckAtResourceGroupScopeOptionalParams
  ): Promise<PolicyRestrictionsCheckAtResourceGroupScopeResponse>;
}
