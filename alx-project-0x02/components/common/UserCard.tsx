// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow border border-gray-200">
      <h2 className="text-xl font-bold text-green-700 mb-1">{name}</h2>
      <p className="text-gray-700 mb-1">📧 {email}</p>
      <p className="text-gray-500 text-sm">
          {address.street}, {address.suite}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
