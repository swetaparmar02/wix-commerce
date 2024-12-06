/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
"use client"


import React, { useState } from "react";

// Define the interface for each member with necessary properties
interface Member {
  id: string;
  profile: {
    nickname: string;
    slug: string;
    photo?: {
      url: string;
      height: number;
      width: number;
    };
  };
}

export default function MemberList({ members }: { members: Member[] }) {
  const [clickedMember, setClickedMember] = useState<string | null>(null);

  // Handle click event
  const handleCardClick = (id: string) => {
    setClickedMember(id);
    alert(`Member ID: ${id} clicked!`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {members.map((member) => (
        <div
          key={member.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          onClick={() => handleCardClick(member.id)}
        >
          {/* Profile photo at the top */}
          {member.profile.photo?.url ? (
            <div className="relative w-full h-56">
              <img
                src={member.profile.photo.url}
                alt={member.profile.nickname}
                className="object-cover w-full h-full"
              />
            </div>
          ) : (
            <div className="bg-gray-300 w-full h-56 flex items-center justify-center">
              <p className="text-white">No photo available</p>
            </div>
          )}

          {/* Content Section */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800">{member.profile.nickname}</h2>
            <p className="text-gray-500 text-sm">{member.profile.slug}</p>
            <p className="text-gray-700 mt-4">
              <strong>Member ID:</strong> {member.id}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
