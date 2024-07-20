import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-6 bg-white  font-custom text-custom">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Froker Logo" className="h-15 ml-24" />
        </Link>
        <span className="text-orange-600 text-2xl font-bold"></span>
      </div>
      <nav className="flex space-x-4 mr-40 gap-7">
        <Link to="/" className="text-orange-600 font-normal">Home</Link>
        <Link to="/" className="text-orange-600 font-normal">Blogs</Link>
        <Link to="/" className="text-orange-600 font-normal">Discover Froker</Link>
      </nav>
    </header>
  );
};

export default Header;
