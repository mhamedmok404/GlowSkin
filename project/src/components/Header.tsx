import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, ChevronDown, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-pink-50 text-gray-600 text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone size={14} className="mr-1" />
              <span>800-123-456789</span>
            </div>
            <div className="flex items-center">
              <Mail size={14} className="mr-1" />
              <span>info@example.com</span>
            </div>
          </div>
          <div>
            <span>Summer Sale Starts Now & Free Shipping Order Above $250</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span>US</span>
              <ChevronDown size={14} />
            </div>
            <div className="flex items-center">
              <span>English</span>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-pink-600 font-medium">HOME</a>
              <div className="relative group">
                <a href="/shop" className="flex items-center font-medium">
                  SHOP <ChevronDown size={16} className="ml-1" />
                </a>
                <div className="absolute z-10 left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-in-out origin-top-left">
                  <div className="py-2">
                    <a href="/category/skincare" className="block px-4 py-2 text-sm hover:bg-pink-50">Skincare</a>
                    <a href="/category/makeup" className="block px-4 py-2 text-sm hover:bg-pink-50">Makeup</a>
                    <a href="/category/haircare" className="block px-4 py-2 text-sm hover:bg-pink-50">Haircare</a>
                    <a href="/category/fragrance" className="block px-4 py-2 text-sm hover:bg-pink-50">Fragrance</a>
                  </div>
                </div>
              </div>
              <a href="/about" className="font-medium">ABOUT</a>
              <div className="relative group">
                <a href="#" className="flex items-center font-medium">
                  PAGES <ChevronDown size={16} className="ml-1" />
                </a>
                <div className="absolute z-10 left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-in-out origin-top-left">
                  <div className="py-2">
                    <a href="/pages/about-us" className="block px-4 py-2 text-sm hover:bg-pink-50">About Us</a>
                    <a href="/pages/contact-us" className="block px-4 py-2 text-sm hover:bg-pink-50">Contact Us</a>
                    <a href="/pages/faq" className="block px-4 py-2 text-sm hover:bg-pink-50">FAQ</a>
                    <a href="/pages/terms" className="block px-4 py-2 text-sm hover:bg-pink-50">Terms & Conditions</a>
                  </div>
                </div>
              </div>
              <a href="/contact" className="font-medium">CONTACT</a>
            </nav>

            {/* Logo */}
            <Logo />

            {/* Right Navigation */}
            <div className="flex items-center space-x-6">
              <div className="relative">
                {searchOpen ? (
                  <div className="absolute right-0 top-0 w-64 flex">
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-l-md py-1 px-3 focus:outline-none focus:ring-1 focus:ring-pink-300"
                      placeholder="Search..."
                      autoFocus
                      onBlur={() => setSearchOpen(false)}
                    />
                    <button className="bg-pink-500 text-white px-3 py-1 rounded-r-md">
                      <Search size={18} />
                    </button>
                  </div>
                ) : (
                  <button onClick={() => setSearchOpen(true)} className="text-gray-700 hover:text-pink-500 transition-colors">
                    <Search size={20} />
                  </button>
                )}
              </div>
              <button className="text-gray-700 hover:text-pink-500 transition-colors">
                <Heart size={20} />
              </button>
              <button className="text-gray-700 hover:text-pink-500 transition-colors relative">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden mt-4 flex flex-col space-y-2">
            <a href="/" className="py-2 border-b border-gray-100">HOME</a>
            <a href="/shop" className="py-2 border-b border-gray-100">SHOP</a>
            <a href="/about" className="py-2 border-b border-gray-100">ABOUT</a>
            <a href="#" className="py-2 border-b border-gray-100">PAGES</a>
            <a href="/contact" className="py-2">CONTACT</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;