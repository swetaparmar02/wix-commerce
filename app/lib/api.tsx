/* eslint-disable prettier/prettier */
// lib/api.ts
export async function fetchMember() {
  const apiUrl = "https://www.wixapis.com/members/v1/members/query";
  const apiKey = process.env.WIX_API_KEY;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer OauthNG.JWS.eyJraWQiOiJZSEJzdUpwSCIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VcIjp7XCJpbnN0YW5jZUlkXCI6XCJmNjMwNmIzMC03YWUyLTRiZWEtOWYwZi1kMmM5ZjNkZjk0NmZcIixcImFwcERlZklkXCI6XCI4NjllNWVlNi02OWY3LTQ3OWMtOTkxNS01OTFiNWMyMGQyYmRcIixcInNpZ25EYXRlXCI6XCIyMDI0LTEyLTEwVDA5OjQ0OjQxLjU4M1pcIixcInVpZFwiOlwiNTYwNGNiNDgtNjdlMS00NDAzLTkyY2UtZGYxMmE3ZDMwYzNjXCIsXCJwZXJtaXNzaW9uc1wiOlwib2ZmbGluZV9hY2Nlc3NcIixcImRlbW9Nb2RlXCI6ZmFsc2UsXCJzaXRlT3duZXJJZFwiOlwiMDgyNjVmZWQtMDgyMC00NWQzLThhNTctMGU2MzdkNzRmMTg5XCIsXCJhaWRcIjpcIjRmZmFjNTRiLWFlOGItNDVmZi05MzMzLTVlOTA5OTAzZDcwN1wiLFwic2l0ZU1lbWJlcklkXCI6XCI1NjA0Y2I0OC02N2UxLTQ0MDMtOTJjZS1kZjEyYTdkMzBjM2NcIixcIm1ldGFTaXRlSWRcIjpcIjFjZmQxZTYyLTQwMzMtNGJkMy04YWQ3LTc1ZmE3MDVjMmVmMVwiLFwiZXhwaXJhdGlvbkRhdGVcIjpcIjIwMjQtMTItMTBUMTM6NDQ6NDEuNTgzWlwiLFwiaGFzVXNlclJvbGVcIjpmYWxzZSxcImFvclwiOmZhbHNlLFwic2lkXCI6XCIwODA4YTE1Ni1iZjM1LTRmMDAtYTc3Ni01ZWRlN2ZkNmE1MWJcIixcInNjdFwiOlwiMjAyNC0xMi0xMFQwOTo0NDozNy45OThaXCJ9fSIsImlhdCI6MTczMzgyMzg4MSwiZXhwIjoxNzMzODM4MjgxfQ.35yCpsiYAx8iUvjZ6PJnDwxNgqmOjnfj6AsOHd0ESZ0`,
       // Make sure WIX_API_KEY is set in your environment
    },
    body: JSON.stringify({
      query: {}, // Adjust query filters if needed
      paging: { limit: 50, offset: 0 }, // Increase the limit as per your requirement
    }),
  });

  if (!response.ok) {
    throw new Error(`Error fetching members: ${response.statusText}`);
  }

  const data = await response.json();
  return data.members; // Ensure this matches the API's response format
}
