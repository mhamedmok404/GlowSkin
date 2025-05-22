import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send this to your API
      setSubscribed(true);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Stay updated with our latest beauty tips, product launches, and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              Subscribe
            </button>
          </form>
          
          {subscribed && (
            <div className="mt-4 text-green-600 animate-fade-in">
              Thanks for subscribing! ✨
            </div>
          )}
          
          <p className="mt-4 text-sm text-gray-500">
            By subscribing, you agree to our Privacy Policy and consent to receive our marketing emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;