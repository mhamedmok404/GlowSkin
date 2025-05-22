import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Lips Gloss',
    image: 'https://images.pexels.com/photos/5659033/pexels-photo-5659033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Moisturizer',
    image: 'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Eyeliner',
    image: 'https://images.pexels.com/photos/6001256/pexels-photo-6001256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'Serum',
    image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    name: 'Cleanser',
    image: 'https://images.pexels.com/photos/5232833/pexels-photo-5232833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    name: 'Perfume',
    image: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Shop By Category</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category) => (
            <a 
              key={category.id} 
              href={`/category/${category.name.toLowerCase().replace(' ', '-')}`}
              className="group"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>
                <span className="font-medium text-center">{category.name}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;