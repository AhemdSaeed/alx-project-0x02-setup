import React from "react";
import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border border-gray-200">
      <h2 className="text-xl font-bold text-blue-600">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
    </div>
  );
};

export default Card;
