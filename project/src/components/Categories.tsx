import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Lips Gloss',
    image: 'https://images.pexels.com/photos/5462562/pexels-photo-5462562.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Moisturizer',
    image: 'https://images.pexels.com/photos/3786524/pexels-photo-3786524.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Eyeliner',
    image: 'https://images.pexels.com/photos/3785613/pexels-photo-3785613.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'Serum',
    image: 'https://images.pexels.com/photos/3785615/pexels-photo-3785615.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    name: 'Cleanser',
    image: 'https://images.pexels.com/photos/4465821/pexels-photo-4465821.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    name: 'Perfume',
    image: 'https://images.pexels.com/photos/5462228/pexels-photo-5462228.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const Categories = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-12 text-gray-800">Shop By Category</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {categories.map(category => (
            <div key={category.id} className="group">
              <div className="relative overflow-hidden rounded-full aspect-square bg-gray-100 cursor-pointer group-hover:shadow-lg transition-all duration-300">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
              <h3 className="text-center mt-3 font-medium text-gray-800">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};