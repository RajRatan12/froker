import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../RecentPosts/RecentPosts';  
import LikeButton from '../LikeButton/LikeButton';
import RecentPosts from '../RecentPosts/RecentPosts';

import './index.css';

const BlogPost = () => {
  const { postId } = useParams();
  const post = posts[postId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

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
        <div className="flex justify-end">
          <LikeButton postId={postId} initialLikes={post.likes} />
        </div>
        <div className="flex items-center space-x-2 text-gray-700 text-sm">
          <span className="text-orange-400">by {post.author}</span>
          <span className="text-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </span>
          <span className="text-orange-400">{post.readTime} minute read</span>
        </div>
        <div className="mt-4 ">
          <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
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
      <div className="share-container">
        <div className="text-gray-700 font-semibold">Share</div>
        <a href="https://twitter.com/share" target="_blank" rel="noopener noreferrer" className="block w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M24 4.56c-.88.39-1.83.65-2.83.77 1.01-.61 1.8-1.58 2.17-2.73-.95.56-2 .96-3.12 1.18-.9-.96-2.18-1.56-3.6-1.56-2.73 0-4.95 2.23-4.95 4.98 0 .39.04.76.13 1.12-4.12-.21-7.78-2.18-10.23-5.17-.43.74-.68 1.6-.68 2.52 0 1.74.88 3.28 2.22 4.18-.81-.02-1.57-.25-2.23-.62v.06c0 2.43 1.73 4.45 4.02 4.91-.42.11-.87.17-1.33.17-.32 0-.64-.03-.94-.09.64 2 2.52 3.44 4.74 3.48-1.73 1.36-3.91 2.17-6.29 2.17-.41 0-.81-.02-1.21-.07 2.24 1.44 4.89 2.28 7.73 2.28 9.28 0 14.36-7.69 14.36-14.36 0-.22 0-.43-.01-.64.99-.72 1.85-1.62 2.53-2.65z" />
          </svg>
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php" target="_blank" rel="noopener noreferrer" className="block w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.127V8.412c0-3.1 1.895-4.788 4.662-4.788 1.325 0 2.463.099 2.794.143v3.238l-1.917.001c-1.504 0-1.794.715-1.794 1.762v2.31h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0" />
          </svg>
        </a>
        <a href="https://api.whatsapp.com/send?text=Check%20this%20out:%20[URL]" target="_blank" rel="noopener noreferrer" className="block w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12.07 0C5.404 0 .001 5.404.001 12.07c0 2.153.558 4.292 1.618 6.149L0 24l6.025-1.575A11.998 11.998 0 0012.07 24c6.666 0 12.07-5.404 12.07-12.07C24.14 5.403 18.736 0 12.07 0zm6.83 17.093c-.278.774-1.604 1.42-2.211 1.507-.597.084-1.153.268-3.896-.814-3.291-1.293-5.395-4.556-5.563-4.773-.163-.219-1.329-1.774-1.329-3.386 0-1.613.85-2.406 1.16-2.726.305-.321.666-.405.88-.405s.44.002.635.01c.205.009.477-.075.75.567.278.661.947 2.287 1.03 2.454.084.169.139.373.028.602-.109.229-.165.373-.317.574-.151.2-.315.449-.452.601-.139.15-.283.318-.119.626.163.306.726 1.194 1.548 1.935 1.065.937 1.96 1.22 2.267 1.358.306.138.482.116.662-.065.179-.181.754-.882.957-1.186.201-.304.402-.251.67-.151.27.1 1.702.8 1.997.947.293.146.487.221.56.345.083.14.083.805-.194 1.578z" />
          </svg>
        </a>
      </div>
      <RecentPosts title="Popular Posts" />
    </div>
  );
};

export default BlogPost;
