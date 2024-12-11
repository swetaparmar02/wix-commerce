/* eslint-disable prettier/prettier */

export async function fetchCollections() {
    const apiUrl = "https://www.wixapis.com/stores/v1/collections/query";
    const apiKey = process.env.WIX_API_KEY; // Ensure this environment variable is correctly set.
  
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer OauthNG.JWS.eyJraWQiOiJZSEJzdUpwSCIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VcIjp7XCJpbnN0YW5jZUlkXCI6XCJmNjMwNmIzMC03YWUyLTRiZWEtOWYwZi1kMmM5ZjNkZjk0NmZcIixcImFwcERlZklkXCI6XCI4NjllNWVlNi02OWY3LTQ3OWMtOTkxNS01OTFiNWMyMGQyYmRcIixcInNpZ25EYXRlXCI6XCIyMDI0LTEyLTEwVDA5OjQ0OjQxLjU4M1pcIixcInVpZFwiOlwiNTYwNGNiNDgtNjdlMS00NDAzLTkyY2UtZGYxMmE3ZDMwYzNjXCIsXCJwZXJtaXNzaW9uc1wiOlwib2ZmbGluZV9hY2Nlc3NcIixcImRlbW9Nb2RlXCI6ZmFsc2UsXCJzaXRlT3duZXJJZFwiOlwiMDgyNjVmZWQtMDgyMC00NWQzLThhNTctMGU2MzdkNzRmMTg5XCIsXCJhaWRcIjpcIjRmZmFjNTRiLWFlOGItNDVmZi05MzMzLTVlOTA5OTAzZDcwN1wiLFwic2l0ZU1lbWJlcklkXCI6XCI1NjA0Y2I0OC02N2UxLTQ0MDMtOTJjZS1kZjEyYTdkMzBjM2NcIixcIm1ldGFTaXRlSWRcIjpcIjFjZmQxZTYyLTQwMzMtNGJkMy04YWQ3LTc1ZmE3MDVjMmVmMVwiLFwiZXhwaXJhdGlvbkRhdGVcIjpcIjIwMjQtMTItMTBUMTM6NDQ6NDEuNTgzWlwiLFwiaGFzVXNlclJvbGVcIjpmYWxzZSxcImFvclwiOmZhbHNlLFwic2lkXCI6XCIwODA4YTE1Ni1iZjM1LTRmMDAtYTc3Ni01ZWRlN2ZkNmE1MWJcIixcInNjdFwiOlwiMjAyNC0xMi0xMFQwOTo0NDozNy45OThaXCJ9fSIsImlhdCI6MTczMzgyMzg4MSwiZXhwIjoxNzMzODM4MjgxfQ.35yCpsiYAx8iUvjZ6PJnDwxNgqmOjnfj6AsOHd0ESZ0`,
        // Ensure "Bearer" prefix is included
      },
      body: JSON.stringify({
        query: {},
         // Add filters or pagination if necessary
         includeNumberOfProducts: true,
          // Limit and offset for collections
      }),
    });
  
    if (!response.ok) {
      throw new Error(`Error fetching collections: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data.collections; // The collections are returned in this field.
  }



