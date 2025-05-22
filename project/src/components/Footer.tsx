import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-gray-600 mb-4">
              Your ultimate destination for premium beauty products. We curate the finest skincare, makeup, and fragrances to help you radiate confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-pink-100 hover:bg-pink-200 text-pink-600 p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-pink-100 hover:bg-pink-200 text-pink-600 p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-pink-100 hover:bg-pink-200 text-pink-600 p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Shop</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">My Account</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Wishlist</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-pink-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">123 Beauty Lane, Makeup City, MC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-pink-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">800-123-456789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-pink-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">info@example.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 IM♡BEL. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-1">
              <span className="text-gray-600 text-sm">Made with</span>
              <Heart size={14} className="text-pink-500" fill="#EC4899" />
              <span className="text-gray-600 text-sm">for beauty enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;