import React from 'react';
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-4">
          <div className="lg:col-span-1">
            <img src={blogPic1} alt="Blog 1" className="w-full h-80 rounded-lg object-cover" />
            <div className="p-4">
              <p className="text-sm text-orange-600">by Varshita - 9 Feb 2024</p>
              <h2 className="text-lg font-bold mt-1">Title: Mastering the Art of Content Creation</h2>
              <p className="text-gray-700 mt-1">Introduction: Welcome to the dynamic world of content creation, where creativity...</p>
              <a href="#" className="text-orange-600 font-semibold mt-3 inline-block">Read More...</a>
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col space-y-4 lg:space-y-2">
            <div className="flex flex-col lg:flex-row">
              <img src={blogPic2} alt="Blog 2" className="lg:w-1/3 w-full h-64 rounded-lg object-cover lg:mr-4 mb-4 lg:mb-0" />
              <div className="p-4 lg:pl-0 lg:pr-4">
                <p className="text-sm text-orange-600">by Varshita - 3 March 2024</p>
                <h2 className="text-lg font-bold mt-1">What Is Content Creation, Anyway?</h2>
                <p className="text-gray-700 mt-1">So, you've heard the buzz about content creation...</p>
                <a href="#" className="text-orange-600 font-semibold mt-3 inline-block">Read More...</a>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <img src={blogPic3} alt="Blog 3" className="lg:w-1/3 w-full h-64 rounded-lg object-cover lg:mr-4 mb-4 lg:mb-0" />
              <div className="p-4 lg:pl-0 lg:pr-4">
                <p className="text-sm text-orange-600">by Varshita - 3 March 2024</p>
                <h2 className="text-lg font-bold mt-1">Forbes 30 Under 30 India: Celebrating Innovation</h2>
                <p className="text-gray-700 mt-1">Unconventional Geniuses, Fearless Entrepreneurs...</p>
                <a href="#" className="text-orange-600 font-semibold mt-3 inline-block">Read More...</a>
              </div>
            </div>
          </div>
        </div>
        <RecentPosts />
      </div>
    </>
  );
};

export default Home;
