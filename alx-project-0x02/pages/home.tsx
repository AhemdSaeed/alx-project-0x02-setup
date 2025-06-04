import Header from "@/components/layout/Header";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";
import { useState } from "react";
import { CardProps } from "@/interfaces";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<CardProps[]>([]);

  const handleAddPost = (newPost: CardProps) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div>
      <Header />
      <div className="p-8 space-y-6">
        <h1 className="text-2xl font-bold text-green-600">Welcome to the Home Page</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add New Post
        </button>
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
}
