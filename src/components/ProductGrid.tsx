import React, { useState } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProductCard from './ProductCard';
import { ProductCategory } from '../types';

const ProductGrid: React.FC = () => {
  const { state } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all' as const, name: 'All Products' },
    { id: 'men' as const, name: 'Men' },
    { id: 'women' as const, name: 'Women' },
    { id: 'kids' as const, name: 'Kids' },
    { id: 'shoes' as const, name: 'Shoes' },
    { id: 'accessories' as const, name: 'Accessories' },
  ];

  const filteredProducts = state.products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'featured':
        default:
          return b.featured ? 1 : -1;
      }
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
          <p className="text-gray-600 mt-2">Discover our premium collection</p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <SlidersHorizontal className="h-4 w-4" />
            <span>Filters</span>
          </button>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-amber-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-amber-100'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Additional Filters Panel */}
      {showFilters && (
        <div className="bg-gray-50 rounded-lg p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-amber-500 mr-2" />
                <span className="text-sm">Under $25</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-amber-500 mr-2" />
                <span className="text-sm">$25 - $50</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-amber-500 mr-2" />
                <span className="text-sm">$50 - $100</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-amber-500 mr-2" />
                <span className="text-sm">Over $100</span>
              </label>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Size</h4>
            <div className="flex flex-wrap gap-2">
              {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-amber-50 hover:border-amber-500"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Color</h4>
            <div className="flex flex-wrap gap-2">
              {['Black', 'White', 'Blue', 'Red', 'Green'].map((color) => (
                <button
                  key={color}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-amber-500"
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {state.products.length} products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-700 font-medium">
          Load More Products
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;