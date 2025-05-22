import React, { useState } from 'react';
import { ProductCard } from './ProductCard';

// Product data
const products = [
  {
    id: 1,
    name: 'Flawless Foundation',
    price: 35.00,
    originalPrice: 45.00,
    image: 'https://images.pexels.com/photos/3785145/pexels-photo-3785145.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    category: 'foundation',
  },
  {
    id: 2,
    name: 'Premium Foundation',
    price: 42.00,
    image: 'https://images.pexels.com/photos/3785129/pexels-photo-3785129.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
    category: 'foundation',
    tag: {
      type: 'new',
      text: 'NEW'
    }
  },
  {
    id: 3,
    name: 'Active Foundation',
    price: 32.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    category: 'foundation',
  },
  {
    id: 4,
    name: 'Liquid Lip Gloss',
    price: 18.00,
    originalPrice: 24.99,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    category: 'lips',
    tag: {
      type: 'sale',
      text: 'SALE'
    }
  },
  {
    id: 5,
    name: 'Natural BB Cream',
    price: 28.00,
    image: 'https://images.pexels.com/photos/4465815/pexels-photo-4465815.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
    category: 'cream',
  },
  {
    id: 6,
    name: 'Rose Petal Lipstick',
    price: 22.00,
    image: 'https://images.pexels.com/photos/3373742/pexels-photo-3373742.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    category: 'lips',
  },
  {
    id: 7,
    name: 'Shimmer Eyeshadow',
    price: 19.99,
    image: 'https://images.pexels.com/photos/3565552/pexels-photo-3565552.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
    category: 'eyes',
  },
  {
    id: 8,
    name: 'Hydrating Face Mist',
    price: 16.50,
    image: 'https://images.pexels.com/photos/3786523/pexels-photo-3786523.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    category: 'serum',
  },
];

// Categories for tabs
const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'cream', name: 'Cream' },
  { id: 'serum', name: 'Serum' },
  { id: 'foundation', name: 'Foundation' },
  { id: 'lips', name: 'Lips' },
  { id: 'eyes', name: 'Eyes' },
];

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-4 text-gray-800">Hand Picked Products</h2>
        
        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-rose-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-block border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};