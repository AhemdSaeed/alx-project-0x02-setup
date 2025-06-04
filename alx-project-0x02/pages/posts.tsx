// pages/posts.tsx
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import { PostCard } from '@/components/common/PostCard';

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data.slice(0, 10)); 
      
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="p-8 space-y-4">
        <h1 className="text-2xl font-bold text-red-600">Posts</h1>
        {loading ? (
          <p className="text-gray-600">Loading posts...</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))
        )}
      </div>
    </div>
  );
}
