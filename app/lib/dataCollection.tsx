/* eslint-disable prettier/prettier */


export async function fetchSingleCollection(dataCollectionId: string) {
  const API_URL = `https://www.wixapis.com/wix-data/v2/collections/${dataCollectionId}`;
  
  const API_KEY = "OauthNG.JWS.eyJraWQiOiJZSEJzdUpwSCIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VcIjp7XCJpbnN0YW5jZUlkXCI6XCJmNjMwNmIzMC03YWUyLTRiZWEtOWYwZi1kMmM5ZjNkZjk0NmZcIixcImFwcERlZklkXCI6XCI4NjllNWVlNi02OWY3LTQ3OWMtOTkxNS01OTFiNWMyMGQyYmRcIixcInNpZ25EYXRlXCI6XCIyMDI0LTEyLTEwVDA5OjQ0OjQxLjU4M1pcIixcInVpZFwiOlwiNTYwNGNiNDgtNjdlMS00NDAzLTkyY2UtZGYxMmE3ZDMwYzNjXCIsXCJwZXJtaXNzaW9uc1wiOlwib2ZmbGluZV9hY2Nlc3NcIixcImRlbW9Nb2RlXCI6ZmFsc2UsXCJzaXRlT3duZXJJZFwiOlwiMDgyNjVmZWQtMDgyMC00NWQzLThhNTctMGU2MzdkNzRmMTg5XCIsXCJhaWRcIjpcIjRmZmFjNTRiLWFlOGItNDVmZi05MzMzLTVlOTA5OTAzZDcwN1wiLFwic2l0ZU1lbWJlcklkXCI6XCI1NjA0Y2I0OC02N2UxLTQ0MDMtOTJjZS1kZjEyYTdkMzBjM2NcIixcIm1ldGFTaXRlSWRcIjpcIjFjZmQxZTYyLTQwMzMtNGJkMy04YWQ3LTc1ZmE3MDVjMmVmMVwiLFwiZXhwaXJhdGlvbkRhdGVcIjpcIjIwMjQtMTItMTBUMTM6NDQ6NDEuNTgzWlwiLFwiaGFzVXNlclJvbGVcIjpmYWxzZSxcImFvclwiOmZhbHNlLFwic2lkXCI6XCIwODA4YTE1Ni1iZjM1LTRmMDAtYTc3Ni01ZWRlN2ZkNmE1MWJcIixcInNjdFwiOlwiMjAyNC0xMi0xMFQwOTo0NDozNy45OThaXCJ9fSIsImlhdCI6MTczMzgyMzg4MSwiZXhwIjoxNzMzODM4MjgxfQ.35yCpsiYAx8iUvjZ6PJnDwxNgqmOjnfj6AsOHd0ESZ0"

  // Replace with your API Key

  const headers = {
    Authorization: API_KEY,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(API_URL, { method: "GET", headers });

    if (!response.ok) {
      throw new Error(`API returned status ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    const { id, displayName, fields } = data.collection;

    // Exclude Wix system fields
    const excludedKeys = ["_createdDate", "_updatedDate","_owner","link-items-title","link-items-all"];
    const customFields = fields.filter((field: { key: string; }) => !excludedKeys.includes(field.key));

    return {
      id,
      displayName,
      fields: customFields.map((field: { key: any; }) => field.key), // Map custom field keys
    };
  } catch (error) {
    console.error("Error fetching single data collection:", error);
    return null;
  }
}

