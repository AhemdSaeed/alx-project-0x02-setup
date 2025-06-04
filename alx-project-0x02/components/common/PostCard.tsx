// components/common/PostCard.tsx
import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, body }) => {
  return (
    <div className="bg-white shadow p-4 rounded-md border border-gray-100">
      <h2 className="text-xl font-semibold mb-2 text-blue-700">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
