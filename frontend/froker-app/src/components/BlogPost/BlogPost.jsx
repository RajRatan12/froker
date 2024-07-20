import React from 'react';
import { useParams } from 'react-router-dom';
import RecentPosts, { posts } from '../RecentPosts/RecentPosts'; // Ensure this path is correct based on your project structure
import LikeButton from '../LikeButton/LikeButton';

const BlogPost = () => {
  const { postId } = useParams();
  const post = posts[postId];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-left space-x-1 text-gray-700 text-sm py-4 mt-20 ml-20">
          <span className="font-bold">Blog</span>
          <span className="text-gray-500">&gt;</span>
          <span>{post.title}</span>
        </div>
      </div>
      <div className="relative mx-auto w-3/4">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover rounded-[30px] shadow-lg" 
          style={{ filter: 'brightness(0.8)' }} 
        />
        <div className="absolute bottom-4 left-4 bg-opacity-50 p-2 rounded">
          <h1 className="text-white text-2xl font-bold uppercase">{post.title}</h1>
        </div>
      </div>
      <div className="container mx-auto px-20 py-6">
        <div className="flex items-center space-x-2 text-gray-700 text-sm">
          <span className="text-orange-400">by {post.author}</span>
          <span className="text-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </span>
          <span className="text-orange-400">{post.readTime} minute read</span>
        </div>
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
          <LikeButton postId={postId} initialLikes={post.likes} />
        </div>
        <div className="mt-4">
          {post.description.map((section, index) => (
            <div key={index} className="mt-8">
              <h3 className="text-xl font-semibold mb-2">{section.subtitle}</h3>
              <p className="text-gray-700 leading-loose">{section.content}</p>
              {section.blockquote && (
                <blockquote className="border-l-4 border-orange-400 pl-4 italic text-gray-700 mt-4">
                  {section.blockquote}
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </div>
      <RecentPosts />
    </div>
  );
};

export default BlogPost;
