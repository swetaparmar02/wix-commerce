/* eslint-disable prettier/prettier */
// app/api/dataCollection.js
import axios from "axios";
import { WIX_API_KEY, WIX_BASE_URL } from "../datacollection/config";

export async function POST(req: { json: () => PromiseLike<{ collectionId: any; displayName: any; displayField: any; fields: any; permissions: any; }> | { collectionId: any; displayName: any; displayField: any; fields: any; permissions: any; }; }) {
  try {
    const { collectionId, displayName, displayField, fields, permissions } = await req.json();

    const response = await axios.post(
      `${WIX_BASE_URL}/collections`,
      {
        id: collectionId,
        displayName,
        displayField,
        fields,
        permissions,
      },
      {
        headers: {
          Authorization: WIX_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    return new Response(JSON.stringify({ success: true, data: response.data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
