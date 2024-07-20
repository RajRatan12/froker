import React from 'react';
import { Link } from 'react-router-dom';
import blogPic1 from '../../assets/blog-pic-1.png';
import blogPic2 from '../../assets/blog-pic-2.png';
import blogPic3 from '../../assets/blog-pic-3.png';
import RecentPosts from '../RecentPosts/RecentPosts';
import Header from '../Header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-40 py-20 mt-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-normal text-orange-500">FROKER <span className="text-black">BLOG</span></h1>
          <p className="text-5xl text-gray-700 mt-8">Articles covering the most recent <br />updates and advancements</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-4">
          <Link to={`/post/13`} className="lg:col-span-2">
            <div style={{ backgroundImage: `url(${blogPic1})` }} className="w-full h-80 rounded-lg bg-cover bg-center" />
            <div className="p-4">
              <p className="text-sm text-orange-600">by Varshita - 9 Feb 2024</p>
              <h2 className="text-lg font-bold mt-1">Title: Mastering the Art of Content Creation</h2>
              <p className="text-gray-700 mt-1">Introduction: Welcome to the dynamic world of content creation, where creativity...</p>
              <span className="text-orange-600 font-semibold mt-3 inline-block underline">Read More...</span>
            </div>
          </Link>
          <div className="lg:col-span-2 flex flex-col space-y-4 lg:space-y-2">
            <Link to={`/post/11`} className="flex flex-col lg:flex-row">
              <div style={{ backgroundImage: `url(${blogPic2})` }} className="lg:w-1/2 w-full h-64 rounded-lg bg-cover bg-center lg:mr-4 mb-4 lg:mb-0" />
              <div className="p-4 lg:pl-0 lg:pr-4">
                <p className="text-sm text-orange-600">by Varshita - 3 March 2024</p>
                <h2 className="text-lg font-bold mt-1">What Is Content Creation, Anyway?</h2>
                <p className="text-gray-700 mt-1">So, you've heard the buzz about content creation...</p>
                <span className="text-orange-600 font-semibold mt-3 inline-block underline">Read More...</span>
              </div>
            </Link>
            <Link to={`/post/12`} className="flex flex-col lg:flex-row">
              <div style={{ backgroundImage: `url(${blogPic3})` }} className="lg:w-1/2 w-full h-64 rounded-lg bg-cover bg-center lg:mr-4 mb-4 lg:mb-0" />
              <div className="p-4 lg:pl-0 lg:pr-4">
                <p className="text-sm text-orange-600">by Varshita - 3 March 2024</p>
                <h2 className="text-lg font-bold mt-1">Forbes 30 Under 30 India: Celebrating Innovation</h2>
                <p className="text-gray-700 mt-1">Unconventional Geniuses, Fearless Entrepreneurs...</p>
                <span className="text-orange-600 font-semibold mt-3 inline-block underline">Read More...</span>
              </div>
            </Link>
          </div>
        </div>
        <RecentPosts />
      </div>
    </>
  );
};

export default Home;
