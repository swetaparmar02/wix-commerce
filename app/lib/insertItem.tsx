/* eslint-disable prettier/prettier */
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, image, short_description, long_description } = req.body;

    const wixDataUrl = "https://www.wixapis.com/wix-data/v2/items";
    const dataCollectionId = "items"; // Replace with your actual collection ID
    
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer OauthNG.JWS.eyJraWQiOiJZSEJzdUpwSCIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VcIjp7XCJpbnN0YW5jZUlkXCI6XCJmNjMwNmIzMC03YWUyLTRiZWEtOWYwZi1kMmM5ZjNkZjk0NmZcIixcImFwcERlZklkXCI6XCI4NjllNWVlNi02OWY3LTQ3OWMtOTkxNS01OTFiNWMyMGQyYmRcIixcInNpZ25EYXRlXCI6XCIyMDI0LTEyLTEwVDA5OjQ0OjQxLjU4M1pcIixcInVpZFwiOlwiNTYwNGNiNDgtNjdlMS00NDAzLTkyY2UtZGYxMmE3ZDMwYzNjXCIsXCJwZXJtaXNzaW9uc1wiOlwib2ZmbGluZV9hY2Nlc3NcIixcImRlbW9Nb2RlXCI6ZmFsc2UsXCJzaXRlT3duZXJJZFwiOlwiMDgyNjVmZWQtMDgyMC00NWQzLThhNTctMGU2MzdkNzRmMTg5XCIsXCJhaWRcIjpcIjRmZmFjNTRiLWFlOGItNDVmZi05MzMzLTVlOTA5OTAzZDcwN1wiLFwic2l0ZU1lbWJlcklkXCI6XCI1NjA0Y2I0OC02N2UxLTQ0MDMtOTJjZS1kZjEyYTdkMzBjM2NcIixcIm1ldGFTaXRlSWRcIjpcIjFjZmQxZTYyLTQwMzMtNGJkMy04YWQ3LTc1ZmE3MDVjMmVmMVwiLFwiZXhwaXJhdGlvbkRhdGVcIjpcIjIwMjQtMTItMTBUMTM6NDQ6NDEuNTgzWlwiLFwiaGFzVXNlclJvbGVcIjpmYWxzZSxcImFvclwiOmZhbHNlLFwic2lkXCI6XCIwODA4YTE1Ni1iZjM1LTRmMDAtYTc3Ni01ZWRlN2ZkNmE1MWJcIixcInNjdFwiOlwiMjAyNC0xMi0xMFQwOTo0NDozNy45OThaXCJ9fSIsImlhdCI6MTczMzgyMzg4MSwiZXhwIjoxNzMzODM4MjgxfQ.35yCpsiYAx8iUvjZ6PJnDwxNgqmOjnfj6AsOHd0ESZ0", // Replace with your actual API key
    };

    const data = {
      dataCollectionId: dataCollectionId,
      dataItem: {
        data: {
          title,
          image,
          short_description,
          long_description,
        },
      },
    };

    try {
      const response = await axios.post(wixDataUrl, data, { headers });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
