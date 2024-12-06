/* eslint-disable prettier/prettier */
// lib/api.ts
export async function fetchMember() {
  const apiUrl = "https://www.wixapis.com/members/v1/members/query";
  const apiKey = process.env.WIX_API_KEY;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer OauthNG.JWS.eyJraWQiOiJZSEJzdUpwSCIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VcIjp7XCJpbnN0YW5jZUlkXCI6XCJmNjMwNmIzMC03YWUyLTRiZWEtOWYwZi1kMmM5ZjNkZjk0NmZcIixcImFwcERlZklkXCI6XCI4NjllNWVlNi02OWY3LTQ3OWMtOTkxNS01OTFiNWMyMGQyYmRcIixcInNpZ25EYXRlXCI6XCIyMDI0LTEyLTA2VDA0OjAyOjUzLjQ2N1pcIixcInVpZFwiOlwiNmE0YjYxZGItZmY1Ny00NWUyLWIyNDItYThhNGM0YzJjZDA1XCIsXCJwZXJtaXNzaW9uc1wiOlwib2ZmbGluZV9hY2Nlc3NcIixcImRlbW9Nb2RlXCI6ZmFsc2UsXCJzaXRlT3duZXJJZFwiOlwiMDgyNjVmZWQtMDgyMC00NWQzLThhNTctMGU2MzdkNzRmMTg5XCIsXCJhaWRcIjpcIjRhMmY3ODM3LWQ3ZTYtNDEyOC05YmExLWZkMjY4Y2M5MWNjNVwiLFwic2l0ZU1lbWJlcklkXCI6XCI2YTRiNjFkYi1mZjU3LTQ1ZTItYjI0Mi1hOGE0YzRjMmNkMDVcIixcIm1ldGFTaXRlSWRcIjpcIjFjZmQxZTYyLTQwMzMtNGJkMy04YWQ3LTc1ZmE3MDVjMmVmMVwiLFwiZXhwaXJhdGlvbkRhdGVcIjpcIjIwMjQtMTItMDZUMDg6MDI6NTMuNDY3WlwiLFwiaGFzVXNlclJvbGVcIjpmYWxzZSxcImFvclwiOmZhbHNlLFwic2lkXCI6XCIxZWZiMGFhYy02OThjLTQ3MDMtODQ3OS1mNGJkZmM0MTQ1YTlcIixcInNjdFwiOlwiMjAyNC0xMi0wNlQwNDowMjo0OS45MjhaXCJ9fSIsImlhdCI6MTczMzQ1Nzc3MywiZXhwIjoxNzMzNDcyMTczfQ.eYU-lbRP45xiV5gAYDua3bvLfQRHYQs4u2VkzVeVB3M`, // Make sure WIX_API_KEY is set in your environment
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
