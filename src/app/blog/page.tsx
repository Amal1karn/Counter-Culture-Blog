import React from "react";
import BlogPostCard from "../../components/BlogPostCard";
import { posts } from "../data/posts";

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
