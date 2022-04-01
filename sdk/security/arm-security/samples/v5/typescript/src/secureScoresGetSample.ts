/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get secure score for a specific Security Center initiative within your current scope. For the ASC Default initiative, use 'ascScore'.
 *
 * @summary Get secure score for a specific Security Center initiative within your current scope. For the ASC Default initiative, use 'ascScore'.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2020-01-01/examples/secureScores/GetSecureScoresSingle_example.json
 */
async function getSingleSecureScore() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const secureScoreName = "ascScore";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.secureScores.get(secureScoreName);
  console.log(result);
}

getSingleSecureScore().catch(console.error);
