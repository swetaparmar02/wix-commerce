/* eslint-disable prettier/prettier */
// app/member/page.tsx
import React from "react";
import MemberList from "../components/Member/MemberList";
import { fetchMember } from "../lib/api";

export default async function MembersPage() {
  try {
    const members = await fetchMember();

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Members</h1>
        <MemberList members={members} />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch members:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Members</h1>
        <p className="text-red-500">Failed to load members. Please try again later.</p>
      </div>
    );
  }
}
