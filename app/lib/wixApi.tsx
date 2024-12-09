/* eslint-disable prettier/prettier */

export async function fetchCollections() {
    const apiUrl = "https://www.wixapis.com/stores/v1/collections/query";
    const apiKey = process.env.WIX_API_KEY; // Ensure this environment variable is correctly set.
  
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer OauthNG.JWS.eyJraWQiOiJZSEJzdUpwSCIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VcIjp7XCJpbnN0YW5jZUlkXCI6XCJmNjMwNmIzMC03YWUyLTRiZWEtOWYwZi1kMmM5ZjNkZjk0NmZcIixcImFwcERlZklkXCI6XCI4NjllNWVlNi02OWY3LTQ3OWMtOTkxNS01OTFiNWMyMGQyYmRcIixcInNpZ25EYXRlXCI6XCIyMDI0LTEyLTA5VDA0OjE0OjQ4LjQ2MFpcIixcInVpZFwiOlwiZDg0NDU0ZjQtZTRlMS00YjBiLWE4NDMtYTQzY2IxMmUxMDllXCIsXCJwZXJtaXNzaW9uc1wiOlwib2ZmbGluZV9hY2Nlc3NcIixcImRlbW9Nb2RlXCI6ZmFsc2UsXCJzaXRlT3duZXJJZFwiOlwiMDgyNjVmZWQtMDgyMC00NWQzLThhNTctMGU2MzdkNzRmMTg5XCIsXCJhaWRcIjpcIjFkZDM0MTEzLTk2ODEtNGIwNC05ZDRiLWY1ZTM4NmJiNTAxOFwiLFwic2l0ZU1lbWJlcklkXCI6XCJkODQ0NTRmNC1lNGUxLTRiMGItYTg0My1hNDNjYjEyZTEwOWVcIixcIm1ldGFTaXRlSWRcIjpcIjFjZmQxZTYyLTQwMzMtNGJkMy04YWQ3LTc1ZmE3MDVjMmVmMVwiLFwiZXhwaXJhdGlvbkRhdGVcIjpcIjIwMjQtMTItMDlUMDg6MTQ6NDguNDYwWlwiLFwiaGFzVXNlclJvbGVcIjpmYWxzZSxcImFvclwiOmZhbHNlLFwic2lkXCI6XCJlYzVjZjQwZC01MGM5LTQ5OGYtOWJkNy0wMjY1NjNiOGFhNDhcIixcInNjdFwiOlwiMjAyNC0xMi0wOVQwNDoxNDo0NS43MjNaXCJ9fSIsImlhdCI6MTczMzcxNzY4OCwiZXhwIjoxNzMzNzMyMDg4fQ.M40e205E3mdFAk8EBvPachJJUnl-eIqiaJah4OzJtQM`,
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



