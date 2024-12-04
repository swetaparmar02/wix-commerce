/* eslint-disable prettier/prettier */
export async function fetchCollections() {
    const apiUrl = "https://www.wixapis.com/stores/v1/collections/query";
    const apiKey = process.env.WIX_API_KEY; // Ensure this environment variable is correctly set.
  
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer OauthNG.JWS.eyJraWQiOiJZSEJzdUpwSCIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VcIjp7XCJpbnN0YW5jZUlkXCI6XCJmNjMwNmIzMC03YWUyLTRiZWEtOWYwZi1kMmM5ZjNkZjk0NmZcIixcImFwcERlZklkXCI6XCI4NjllNWVlNi02OWY3LTQ3OWMtOTkxNS01OTFiNWMyMGQyYmRcIixcInNpZ25EYXRlXCI6XCIyMDI0LTEyLTA0VDA0OjE4OjAwLjAxN1pcIixcInVpZFwiOlwiNjk3NmU5MWItNTk2Ny00NWU4LThjZjYtZDIwZTI1NTliM2QyXCIsXCJwZXJtaXNzaW9uc1wiOlwib2ZmbGluZV9hY2Nlc3NcIixcImRlbW9Nb2RlXCI6ZmFsc2UsXCJzaXRlT3duZXJJZFwiOlwiMDgyNjVmZWQtMDgyMC00NWQzLThhNTctMGU2MzdkNzRmMTg5XCIsXCJhaWRcIjpcImFlMWM2YTZiLWI2MTAtNDM2Ni1hMjQ1LWZlZjA5ZDNhYzNjZlwiLFwic2l0ZU1lbWJlcklkXCI6XCI2OTc2ZTkxYi01OTY3LTQ1ZTgtOGNmNi1kMjBlMjU1OWIzZDJcIixcIm1ldGFTaXRlSWRcIjpcIjFjZmQxZTYyLTQwMzMtNGJkMy04YWQ3LTc1ZmE3MDVjMmVmMVwiLFwiZXhwaXJhdGlvbkRhdGVcIjpcIjIwMjQtMTItMDRUMDg6MTg6MDAuMDE3WlwiLFwiaGFzVXNlclJvbGVcIjpmYWxzZSxcImFvclwiOmZhbHNlLFwic2lkXCI6XCI4MjI3MmJmYy04OGRiLTRiMGUtOWZhOC1jMDQ0OTJiZWNiYjZcIixcInNjdFwiOlwiMjAyNC0xMi0wNFQwNDoxNzo1Ny43OTBaXCJ9fSIsImlhdCI6MTczMzI4NTg4MCwiZXhwIjoxNzMzMzAwMjgwfQ.sSJqYSPQHAtSY0TKzSjcxEOSTsQr722MUMtGQcLZsfg`, // Ensure "Bearer" prefix is included
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



