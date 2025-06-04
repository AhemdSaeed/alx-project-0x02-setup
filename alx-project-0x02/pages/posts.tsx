import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <Header />
      <div className="p-8 space-y-4">
        <h1 className="text-2xl font-bold text-blue-600">Posts</h1>
        {posts.map((post) => (
          <PostCard key={post.title} {...post} />
        ))}
      </div>
    </div>
  );
}


export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}
