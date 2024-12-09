/* eslint-disable prettier/prettier */
// lib/api.ts
export async function fetchMember() {
  const apiUrl = "https://www.wixapis.com/members/v1/members/query";
  const apiKey = process.env.WIX_API_KEY;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer OauthNG.JWS.eyJraWQiOiJZSEJzdUpwSCIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VcIjp7XCJpbnN0YW5jZUlkXCI6XCJmNjMwNmIzMC03YWUyLTRiZWEtOWYwZi1kMmM5ZjNkZjk0NmZcIixcImFwcERlZklkXCI6XCI4NjllNWVlNi02OWY3LTQ3OWMtOTkxNS01OTFiNWMyMGQyYmRcIixcInNpZ25EYXRlXCI6XCIyMDI0LTEyLTA5VDA0OjE0OjQ4LjQ2MFpcIixcInVpZFwiOlwiZDg0NDU0ZjQtZTRlMS00YjBiLWE4NDMtYTQzY2IxMmUxMDllXCIsXCJwZXJtaXNzaW9uc1wiOlwib2ZmbGluZV9hY2Nlc3NcIixcImRlbW9Nb2RlXCI6ZmFsc2UsXCJzaXRlT3duZXJJZFwiOlwiMDgyNjVmZWQtMDgyMC00NWQzLThhNTctMGU2MzdkNzRmMTg5XCIsXCJhaWRcIjpcIjFkZDM0MTEzLTk2ODEtNGIwNC05ZDRiLWY1ZTM4NmJiNTAxOFwiLFwic2l0ZU1lbWJlcklkXCI6XCJkODQ0NTRmNC1lNGUxLTRiMGItYTg0My1hNDNjYjEyZTEwOWVcIixcIm1ldGFTaXRlSWRcIjpcIjFjZmQxZTYyLTQwMzMtNGJkMy04YWQ3LTc1ZmE3MDVjMmVmMVwiLFwiZXhwaXJhdGlvbkRhdGVcIjpcIjIwMjQtMTItMDlUMDg6MTQ6NDguNDYwWlwiLFwiaGFzVXNlclJvbGVcIjpmYWxzZSxcImFvclwiOmZhbHNlLFwic2lkXCI6XCJlYzVjZjQwZC01MGM5LTQ5OGYtOWJkNy0wMjY1NjNiOGFhNDhcIixcInNjdFwiOlwiMjAyNC0xMi0wOVQwNDoxNDo0NS43MjNaXCJ9fSIsImlhdCI6MTczMzcxNzY4OCwiZXhwIjoxNzMzNzMyMDg4fQ.M40e205E3mdFAk8EBvPachJJUnl-eIqiaJah4OzJtQM`, // Make sure WIX_API_KEY is set in your environment
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
