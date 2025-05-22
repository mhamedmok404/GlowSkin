import React from 'react';
import { Heart } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center">
      <span className="text-3xl font-serif font-bold">IM</span>
      <Heart className="text-pink-500 mx-1" fill="#EC4899" size={24} />
      <span className="text-3xl font-serif font-bold">BEL</span>
    </div>
  );
};

export default Logo;