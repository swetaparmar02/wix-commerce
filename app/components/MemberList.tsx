/* eslint-disable prettier/prettier */
// components/MemberList.js
import React from "react";

const MemberList = ({ members = [] }) => {
  if (!Array.isArray(members) || members.length === 0) {
    return <p>No members found.</p>;
  }

  return (
    <ul>
      {members.map((member) => (
        <li key={member.id}>
          <strong>Member ID:</strong> {member.id} <br />
          <strong>Email:</strong> {member.loginEmail || "No email provided"}
        </li>
      ))}
    </ul>
  );
};

export default MemberList;
