import React, { useState } from 'react';
import recentPost1 from '../../assets/recent-post-1.png';
import recentPost2 from '../../assets/recent-post-2.png';
import recentPost3 from '../../assets/recent-post-3.png';
import recentPost4 from '../../assets/recent-post-4.png';
import recentPost5 from '../../assets/recent-post-5.png';
import recentPost6 from '../../assets/recent-post-6.png';
import recentPost7 from '../../assets/recent-post-7.png';
import recentPost8 from '../../assets/recent-post-8.png';
import recentPost9 from '../../assets/recent-post-9.png';
import recentPost10 from '../../assets/recent-post-10.png';
import recentPost11 from '../../assets/recent-post-11.png';
import recentPost12 from '../../assets/recent-post-12.png';
import recentPost13 from '../../assets/recent-post-13.png';
import recentPost14 from '../../assets/recent-post-14.png';
import recentPost15 from '../../assets/recent-post-15.png';
import recentPost16 from '../../assets/recent-post-16.jpg';
import recentPost17 from '../../assets/recent-post-17.png';
import recentPost18 from '../../assets/recent-post-18.jpg';
import Pagination from '../Pagination/Pagination';
import Subscribe from '../Subscribe/Subscribe';

const posts = [
  { image: recentPost1, author: 'Roshan', date: '3 May 2024', title: 'Delegating Social Media Tasks...', description: 'In today\'s digital age, maintaining a vibrant social media presence is crucial for businesses and individuals alike. However, the demands of crafting ...' },
  { image: recentPost2, author: 'Varshita', date: '23 April 2024', title: 'Summer Fashion Tips: Dressing...', description: 'Summer has arrived, bringing with it the perfect opportunity to shed those heavy layers and embrace the light, breezy vibes of the season. Whether you...' },
  { image: recentPost3, author: 'Varshita', date: '23 April 2024', title: 'Why Brands Should Partner with...', description: 'In the digital marketing landscape, a powerful alliance is brewing between brands and creators, and it’s transforming the way businesses connect with ...' },
  { image: recentPost4, author: 'Varshita', date: '20 April 2024', title: 'Introducing Meta AI: Your New...', description: 'In the fast-evolving landscape of artificial intelligence, Meta AI stands out as a beacon of innovation and progres...' },
  { image: recentPost5, author: 'Varshita', date: '8 April 2024', title: 'Bangalores Weather and Water...', description: 'Bangalore, the city of gardens, tech hubs, and traffic snarls, is currently simmering like a pot of chai left on the stove f..' },
  { image: recentPost6, author: 'Varshita', date: '6 April 2024', title: 'Why Natural Skin Care is Good for You...', description: 'The Magic of Natural Skin Products: More and more people are choosing natural skin products, and its easy to see why. These pro...' },
  { image: recentPost7, author: 'Abhishek Sairam', date: '29 March 2024', title: 'Devin, the first AI software engineer...', description: 'Introducing Devin, the first AI software engineer: In the realm of artificial intelligence, a groundbreaking innovation has emerged, reshaping the la' },
  { image: recentPost8, author: 'Varshita', date: '21 March 2024', title: 'National Creators Award 2024:... ', description: 'The Grand DebutIn a digital landscape teeming with content, a few creators stand out like constellations against the night sky. The National Creators Award 2024 is...' },
  { image: recentPost9, author: 'Varshita', date: '21 March 2024', title: 'Recession in India 2024: A Rollercoaster... ', description: 'Recession in India 2024: A Rollercoaster Ride with a Dash of Curry: In the throes of a global economic downturn, India finds itself navigating turbulent waters...' },
  { image: recentPost10, author: 'Varshita', date: '29 March 2024', title: 'Apple Vision Pro: A Cosmic Revolution Unlock...', description: 'Imagine a world where productivity meets innovation, and your workspace transcends the ordinary. Welcome to Apple Vision Pro, where the boundaries ...' },
  { image: recentPost11, author: 'Varshita', date: '21 March 2024', title: 'Where Text Becomes Cinematic Magic! From Wo...', description: 'Remember when you were a kid, and you’d scribble fantastical stories in your diary? Well, OpenAI’s latest creation, Sora, just took that childhood ...' },
  { image: recentPost12, author: 'Varshita', date: '15 March 2024', title: 'What Is Content Creation, Any...', description: 'So, youve heard the buzz about content creation. Maybe youre intrigued, or perhaps youre just here for the free snacks (dont worry,...' },
  { image: recentPost13, author: 'Varshita', date: '3 March 2024', title: 'Forbes 30 Under 30 India: Celebr...', description: 'Unconventional Geniuses, Fearless Entrepreneurs, and Creative Mavericks: In a world where innovation is the currency of success, the Forbes...' },
  { image: recentPost14, author: 'Varshita', date: '9 Feb 2024', title: 'Mastering the Art of Content...', description: 'Introduction: Welcome to the dynamic world of content creation, where creativity knows no bounds and innovation thrives. Whether youre passionate...' },
  { image: recentPost15, author: 'Varshita', date: '9 Feb 2024', title: 'The Slice of History: How Food Delivery...', description: 'Picture this: It’s 1889, and King Umberto and Queen Margherita of Italy are sitting in their royal chambers, stomachs growling. But wait, what’s that...' },
  { image: recentPost16, author: 'Varshita', date: '9 Feb 2024', title: 'A Comprehensive Guide to Des...', description: 'Choosing Your Garden Spot: So, youve decided to embark on a kitchen garden adventure? Fantastic! First things first—pick your plot. Whether you...' },
  { image: recentPost17, author: 'Varshita', date: '9 Feb 2024', title: 'Efficient Meal Prep: Time-Savi...', description: 'Quick and Efficient Meal Prep Strategies Hello, culinary enthusiasts! Lets delve into efficient meal preparation and kitchen hacks designed to streamli...' },
  { image: recentPost18, author: 'Varshita', date: '8 Feb 2024', title: 'Unlocking the Secrets of Healt...', description: 'Welcome to the delightful universe of healthy food habits! In this journey, vegetables take center stage, and your taste buds are in for a ...' }
];

const RecentPosts = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 9;
  const pagesVisited = currentPage * postsPerPage;

  const displayPosts = posts.slice(pagesVisited, pagesVisited + postsPerPage).map((post, index) => (
    <div key={index} className="flex flex-col space-y-4">
      <div style={{ backgroundImage: `url(${post.image})` }} className="w-full h-96 rounded-lg bg-cover bg-center" />
      <div className="p-4">
        <p className="text-sm text-orange-600">by {post.author} - {post.date}</p>
        <h2 className="text-lg font-bold mt-1">{post.title}</h2>
        <p className="text-gray-700 mt-1">{post.description}</p>
        <a href="#" className="text-orange-600 font-semibold mt-3 inline-block underline">Read More...</a>
      </div>
    </div>
  ));

  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mx-auto p-0 py-10 mt-5 m-0 box-border">
      <header className="mb-10">
        <h2 className="text-4xl font-sans text-black">Recent Posts</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayPosts}
      </div>
      <div className="flex justify-center mt-8">
        <Pagination pageCount={pageCount} changePage={changePage} />
      </div>
      <Subscribe />
    </div>
  );
};

export default RecentPosts;
