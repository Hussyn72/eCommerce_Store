import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-amber-400 text-sm font-medium">
                  Rated 4.9 by 10,000+ customers
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Premium Fashion
                <span className="text-amber-400 block">For Everyone</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Discover our curated collection of high-quality apparel, shoes, and accessories for the whole family. Style meets comfort in every piece.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                View Collections
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-gray-400 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">1000+</div>
                <div className="text-gray-400 text-sm">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg"
                    alt="Fashion"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
                    alt="Shoes"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg"
                    alt="Apparel"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg"
                    alt="Jackets"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;