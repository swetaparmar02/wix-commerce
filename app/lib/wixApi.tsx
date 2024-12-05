/* eslint-disable prettier/prettier */
export async function fetchCollections() {
    const apiUrl = "https://www.wixapis.com/stores/v1/collections/query";
    const apiKey = process.env.WIX_API_KEY; // Ensure this environment variable is correctly set.
  
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer OauthNG.JWS.eyJraWQiOiJZSEJzdUpwSCIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VcIjp7XCJpbnN0YW5jZUlkXCI6XCJmNjMwNmIzMC03YWUyLTRiZWEtOWYwZi1kMmM5ZjNkZjk0NmZcIixcImFwcERlZklkXCI6XCI4NjllNWVlNi02OWY3LTQ3OWMtOTkxNS01OTFiNWMyMGQyYmRcIixcInNpZ25EYXRlXCI6XCIyMDI0LTEyLTA1VDEwOjUzOjA1LjM5NFpcIixcInVpZFwiOlwiNjM1M2JjOGItN2Q0NS00ZTNiLTk0ZWItYzZkODEyNzlhMWNiXCIsXCJwZXJtaXNzaW9uc1wiOlwib2ZmbGluZV9hY2Nlc3NcIixcImRlbW9Nb2RlXCI6ZmFsc2UsXCJzaXRlT3duZXJJZFwiOlwiMDgyNjVmZWQtMDgyMC00NWQzLThhNTctMGU2MzdkNzRmMTg5XCIsXCJhaWRcIjpcImYzMTBlYjNiLThjMDktNDIxNS05Y2E4LTMzNmQzZjhlZTk0ZlwiLFwic2l0ZU1lbWJlcklkXCI6XCI2MzUzYmM4Yi03ZDQ1LTRlM2ItOTRlYi1jNmQ4MTI3OWExY2JcIixcIm1ldGFTaXRlSWRcIjpcIjFjZmQxZTYyLTQwMzMtNGJkMy04YWQ3LTc1ZmE3MDVjMmVmMVwiLFwiZXhwaXJhdGlvbkRhdGVcIjpcIjIwMjQtMTItMDVUMTQ6NTM6MDUuMzk0WlwiLFwiaGFzVXNlclJvbGVcIjpmYWxzZSxcImFvclwiOmZhbHNlLFwic2lkXCI6XCI1ZWQyY2M0MC05NTgwLTRhZDQtOWU3ZS05OWYzZjM1ODljNWFcIixcInNjdFwiOlwiMjAyNC0xMi0wNVQxMDozNDowMy40MzRaXCJ9fSIsImlhdCI6MTczMzM5NTk4NSwiZXhwIjoxNzMzNDEwMzg1fQ.kcvexjl574yHTXesjSDDCox-NA3aQZALWXXYKqvh0N8`, // Ensure "Bearer" prefix is included
      },
      body: JSON.stringify({
        query: {}, // Add filters or pagination if necessary
        paging: { limit: 10, offset: 0 }, // Limit and offset for collections
      }),
    });
  
    if (!response.ok) {
      throw new Error(`Error fetching collections: ${response.statusText}`);
    }
  
    const data = await response.json();
    return data.collections; // The collections are returned in this field.
  }



