import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../../BlogService/blogService';  
import Pagination from '../Pagination/Pagination';  

const BlogList = () => {
 // State variables to hold blogs, current page, and total pages

  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Effect to fetch blogs whenever the current page changes

  useEffect(() => {
    const getBlogs = async () => {
      const { blogs, totalPages } = await fetchBlogs(currentPage);
      setBlogs(blogs);
      setTotalPages(totalPages);
    };

    getBlogs();
  }, [currentPage]);


  // Handler to change the current page
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-0 py-10 mt-5 m-0 box-border">
      <header className="mb-10">
        <h2 className="text-4xl font-sans text-black">Recent Posts</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((post) => (
          <div key={post._id} className="flex flex-col space-y-4">
            <div style={{ backgroundImage: `url(${post.image})` }} className="w-full h-96 rounded-lg bg-cover bg-center" />
            <div className="p-4">
              <p className="text-sm text-orange-600">by {post.author} - {post.date}</p>
              <h2 className="text-lg font-bold mt-1">{post.title}</h2>
              <p className="text-gray-700 mt-1">{post.snippet}</p>
              <Link to={`/post/${post._id}`} className="text-orange-600 font-semibold mt-3 inline-block underline">Read More...</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Pagination pageCount={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default BlogList;
