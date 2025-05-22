import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  price,
  oldPrice,
  image,
  rating,
  isNew = false,
  isSale = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
        {isNew && (
          <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
        )}
        {isSale && (
          <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
        )}
      </div>

      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        
        {/* Quick actions overlay */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button className="bg-white rounded-full p-2 hover:bg-pink-50 transition-colors">
            <ShoppingCart size={18} className="text-gray-700" />
          </button>
          <button 
            className={`rounded-full p-2 transition-colors ${
              isFavorite 
                ? 'bg-pink-500' 
                : 'bg-white hover:bg-pink-50'
            }`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart 
              size={18} 
              className={isFavorite ? 'text-white' : 'text-gray-700'} 
              fill={isFavorite ? 'currentColor' : 'none'} 
            />
          </button>
          <button className="bg-white rounded-full p-2 hover:bg-pink-50 transition-colors">
            <Eye size={18} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-1">{name}</h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Price */}
        <div className="flex items-center">
          <span className="font-semibold text-lg text-gray-900">${price.toFixed(2)}</span>
          {oldPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">${oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;