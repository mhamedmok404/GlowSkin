import React, { useState } from 'react';
import ProductCard from './ProductCard';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Flawless Foundation',
    price: 49.99,
    image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    category: 'Cream'
  },
  {
    id: 2,
    name: 'Premium Foundation',
    price: 39.99,
    oldPrice: 52.99,
    image: 'https://images.pexels.com/photos/2693644/pexels-photo-2693644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    isNew: true,
    category: 'Cream'
  },
  {
    id: 3,
    name: 'Active Foundation',
    price: 32.99,
    image: 'https://images.pexels.com/photos/3737596/pexels-photo-3737596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    category: 'Serum'
  },
  {
    id: 4,
    name: 'Liquid Lip Gloss',
    price: 19.99,
    oldPrice: 24.99,
    image: 'https://images.pexels.com/photos/5926365/pexels-photo-5926365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    isSale: true,
    category: 'Serum'
  },
  {
    id: 5,
    name: 'Natural BB Cream',
    price: 28.99,
    image: 'https://images.pexels.com/photos/5444696/pexels-photo-5444696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    category: 'Cream'
  },
  {
    id: 6,
    name: 'Luxury Lipstick',
    price: 22.99,
    image: 'https://images.pexels.com/photos/2749165/pexels-photo-2749165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    category: 'Eyeliner'
  },
  {
    id: 7,
    name: 'Shimmer Eyeshadow',
    price: 24.99,
    image: 'https://images.pexels.com/photos/7290121/pexels-photo-7290121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4,
    category: 'Eyeliner'
  },
  {
    id: 8,
    name: 'Hydrating Setting Spray',
    price: 26.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 5,
    category: 'Eyeliner'
  }
];

const categories = ['All', 'Cream', 'Serum', 'Eyeliner'];

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-3">Hand Picked Products</h2>
        
        {/* Category tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex border-b">
            {categories.map(category => (
              <button
                key={category}
                className={`px-6 py-2 font-medium text-sm transition-colors ${
                  activeCategory === category 
                    ? 'border-b-2 border-pink-500 text-pink-600' 
                    : 'text-gray-500 hover:text-pink-500'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              image={product.image}
              rating={product.rating}
              isNew={product.isNew}
              isSale={product.isSale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;