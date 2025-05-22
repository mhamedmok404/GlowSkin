import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "I've tried many beauty products, but IM♡BEL's skincare line has transformed my complexion. The serums are lightweight yet effective, and I've received countless compliments since using them!",
    author: "Sarah Johnson",
    role: "Beauty Influencer",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    text: "As someone with sensitive skin, finding makeup that doesn't cause breakouts is challenging. The foundations from IM♡BEL are breathable, provide great coverage, and keep my skin happy all day long.",
    author: "Michael Chen",
    role: "Skincare Enthusiast",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    text: "The customer service at IM♡BEL is exceptional! They helped me find the perfect products for my skin type and were so knowledgeable. Plus, their shipping is lightning fast!",
    author: "Emily Rodriguez",
    role: "Loyal Customer",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">What Our Customers Say</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-80">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transition-all duration-500 ${
                  index === current 
                    ? 'opacity-100 translate-x-0' 
                    : index < current 
                      ? 'opacity-0 -translate-x-full' 
                      : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="bg-pink-50 rounded-lg p-8 shadow-sm">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-700 italic mb-4">{testimonial.text}</p>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-pink-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots navigation */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-pink-500' : 'bg-gray-300 hover:bg-pink-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;