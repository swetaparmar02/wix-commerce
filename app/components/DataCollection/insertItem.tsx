/* eslint-disable prettier/prettier */


"use client";

import { useState } from "react";

export default function InsertItem({ onSuccess }: { onSuccess: () => void }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      dataCollectionId: "Items", // Adjust to match your Wix Data Collection
      dataItem: {
        data: {
          id: crypto.randomUUID(), // Generate a unique ID for the item
          title,
          image,
          short_description: shortDescription,
          long_description: longDescription,
        },
      },
    };

    try {
      const response = await fetch("https://www.wixapis.com/wix-data/v2/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer OauthNG.JWS.eyJraWQiOiJZSEJzdUpwSCIsImFsZyI6IkhTMjU2In0.eyJkYXRhIjoie1wiaW5zdGFuY2VcIjp7XCJpbnN0YW5jZUlkXCI6XCJmNjMwNmIzMC03YWUyLTRiZWEtOWYwZi1kMmM5ZjNkZjk0NmZcIixcImFwcERlZklkXCI6XCI4NjllNWVlNi02OWY3LTQ3OWMtOTkxNS01OTFiNWMyMGQyYmRcIixcInNpZ25EYXRlXCI6XCIyMDI0LTEyLTEwVDA5OjQ0OjQxLjU4M1pcIixcInVpZFwiOlwiNTYwNGNiNDgtNjdlMS00NDAzLTkyY2UtZGYxMmE3ZDMwYzNjXCIsXCJwZXJtaXNzaW9uc1wiOlwib2ZmbGluZV9hY2Nlc3NcIixcImRlbW9Nb2RlXCI6ZmFsc2UsXCJzaXRlT3duZXJJZFwiOlwiMDgyNjVmZWQtMDgyMC00NWQzLThhNTctMGU2MzdkNzRmMTg5XCIsXCJhaWRcIjpcIjRmZmFjNTRiLWFlOGItNDVmZi05MzMzLTVlOTA5OTAzZDcwN1wiLFwic2l0ZU1lbWJlcklkXCI6XCI1NjA0Y2I0OC02N2UxLTQ0MDMtOTJjZS1kZjEyYTdkMzBjM2NcIixcIm1ldGFTaXRlSWRcIjpcIjFjZmQxZTYyLTQwMzMtNGJkMy04YWQ3LTc1ZmE3MDVjMmVmMVwiLFwiZXhwaXJhdGlvbkRhdGVcIjpcIjIwMjQtMTItMTBUMTM6NDQ6NDEuNTgzWlwiLFwiaGFzVXNlclJvbGVcIjpmYWxzZSxcImFvclwiOmZhbHNlLFwic2lkXCI6XCIwODA4YTE1Ni1iZjM1LTRmMDAtYTc3Ni01ZWRlN2ZkNmE1MWJcIixcInNjdFwiOlwiMjAyNC0xMi0xMFQwOTo0NDozNy45OThaXCJ9fSIsImlhdCI6MTczMzgyMzg4MSwiZXhwIjoxNzMzODM4MjgxfQ.35yCpsiYAx8iUvjZ6PJnDwxNgqmOjnfj6AsOHd0ESZ0", // Replace with your Wix API token
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Item created successfully!");
        onSuccess(); // Close the modal or trigger a re-render
      } else {
        const errorData = await response.json();
        console.error("Error creating item:", errorData);
        alert("Failed to create item. Please check your data and try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the item.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Short Description</label>
        <input
          type="text"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Long Description</label>
        <textarea
          value={longDescription}
          onChange={(e) => setLongDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded-lg ${
            loading ? "opacity-50" : "hover:bg-blue-600"
          } transition`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

