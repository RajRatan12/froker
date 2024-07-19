import React from 'react';
import footerLogo from '../../assets/logo.png'; // Ensure the logo is placed in the assets folder
import qrCode from '../../assets/qrcode.jpg'; // Ensure the QR code image is placed in the assets folder
import footerWave from '../../assets/footer-img.svg'; // Ensure the wave image is placed in the assets folder
import arrowRight from '../../assets/arrow.jpg'; // Ensure the arrow image is placed in the assets folder

const Footer = () => {
  return (
    <div className="relative bg-white mt-8   border-gray-300 pt-8">
      <div className="container mx-auto px-10 flex justify-between items-start">
        <div className="flex items-center">
          <img src={footerLogo} alt="Froker Logo" className="h-16 mr-4" />
        </div>
        <div>
          <h2 className="text-orange-600 font-bold">Quicklink</h2>
          <ul className="mt-4">
            <li className="mb-2 flex items-center">
              <img src={arrowRight} alt="Arrow" className="w-4 h-4 mr-2" />
              <a href="#" className="text-gray-700 hover:text-orange-600">Home</a>
            </li>
            <li className="mb-2 flex items-center">
              <img src={arrowRight} alt="Arrow" className="w-4 h-4 mr-2" />
              <a href="#" className="text-gray-700 hover:text-orange-600">About us</a>
            </li>
            <li className="mb-2 flex items-center">
              <img src={arrowRight} alt="Arrow" className="w-4 h-4 mr-2" />
              <a href="#" className="text-gray-700 hover:text-orange-600">Privacy policy</a>
            </li>
            <li className="mb-2 flex items-center">
              <img src={arrowRight} alt="Arrow" className="w-4 h-4 mr-2" />
              <a href="#" className="text-gray-700 hover:text-orange-600">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-orange-600 font-bold">Contacts</h2>
          <ul className="mt-4">
            <li className="mb-2 flex items-center">
              <span className="material-icons text-orange-600 mr-2">place</span>
              <span className="text-gray-700">Whitefield, Bengaluru, 560066</span>
            </li>
            <li className="mb-2 flex items-center">
              <span className="material-icons text-orange-600 mr-2">email</span>
              <span className="text-gray-700">support@froker.in</span>
            </li>
            <li className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-700 hover:text-orange-600"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-700 hover:text-orange-600"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-700 hover:text-orange-600"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-700 hover:text-orange-600"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-700 hover:text-orange-600"><i className="fab fa-youtube"></i></a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-orange-600 font-bold">Scan To Download</h2>
          <img src={qrCode} alt="QR Code" className="mt-4 h-32 w-32" />
        </div>
      </div>
      <div className="w-full relative">
        <img src={footerWave} alt="Footer Wave" className="w-full h-40 object-cover" />
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <p className="text-white bg-transparent px-2">&copy; 2024 Arroz Technology. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
