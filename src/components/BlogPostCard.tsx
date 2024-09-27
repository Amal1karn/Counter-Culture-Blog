import React from "react";
import { Post } from "../app/data/posts";

interface BlogPostCardProps {
  post: Post;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.summary}</p>
      <p className="text-gray-400 text-sm">{post.date}</p>
    </div>
  );
};

export default BlogPostCard;
