import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product, CartItem, User, Order } from '../types';

interface AppState {
  products: Product[];
  cart: CartItem[];
  user: User | null;
  orders: Order[];
  isLoading: boolean;
  currentView: 'store' | 'admin';
  currentPage: 'home' | 'profile';
}

type AppAction =
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number; size: string; color: string } }
  | { type: 'UPDATE_CART_ITEM'; payload: { index: number; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_ORDERS'; payload: Order[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_VIEW'; payload: 'store' | 'admin' }
  | { type: 'SET_PAGE'; payload: 'home' | 'profile' };

const initialState: AppState = {
  products: [],
  cart: [],
  user: null,
  orders: [],
  isLoading: false,
  currentView: 'store',
  currentPage: 'home',
};

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      const existingItemIndex = state.cart.findIndex(
        item => 
          item.product.id === action.payload.product.id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );
      
      if (existingItemIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex].quantity += action.payload.quantity;
        return { ...state, cart: updatedCart };
      } else {
        return {
          ...state,
          cart: [...state.cart, {
            product: action.payload.product,
            quantity: action.payload.quantity,
            size: action.payload.size,
            color: action.payload.color,
          }]
        };
      }
    case 'UPDATE_CART_ITEM':
      const updatedCart = [...state.cart];
      if (action.payload.quantity <= 0) {
        updatedCart.splice(action.payload.index, 1);
      } else {
        updatedCart[action.payload.index].quantity = action.payload.quantity;
      }
      return { ...state, cart: updatedCart };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((_, index) => index !== action.payload)
      };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_ORDERS':
      return { ...state, orders: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_VIEW':
      return { ...state, currentView: action.payload };
    case 'SET_PAGE':
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    // Initialize with mock data
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'Premium Cotton T-Shirt',
        description: 'Soft, comfortable cotton t-shirt perfect for everyday wear',
        price: 29.99,
        originalPrice: 39.99,
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
        images: ['https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'],
        category: 'men',
        subcategory: 't-shirts',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'White', 'Navy'],
        inStock: true,
        stockQuantity: 50,
        featured: true,
        rating: 4.5,
        reviews: 128,
      },
      {
        id: '2',
        name: 'Classic Denim Jacket',
        description: 'Timeless denim jacket with modern fit and premium quality',
        price: 89.99,
        image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg',
        images: ['https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg'],
        category: 'men',
        subcategory: 'jackets',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Blue', 'Black'],
        inStock: true,
        stockQuantity: 30,
        featured: true,
        rating: 4.7,
        reviews: 85,
      },
      {
        id: '3',
        name: 'Comfortable Hoodie',
        description: 'Ultra-soft hoodie perfect for casual days and layering',
        price: 59.99,
        image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg',
        images: ['https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg'],
        category: 'women',
        subcategory: 'hoodies',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Gray', 'Black', 'Pink'],
        inStock: true,
        stockQuantity: 40,
        featured: true,
        rating: 4.6,
        reviews: 156,
      },
      {
        id: '4',
        name: 'Running Sneakers',
        description: 'Lightweight, breathable sneakers for active lifestyle',
        price: 119.99,
        image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
        images: ['https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'],
        category: 'shoes',
        subcategory: 'sneakers',
        sizes: ['7', '8', '9', '10', '11', '12'],
        colors: ['White', 'Black', 'Blue'],
        inStock: true,
        stockQuantity: 25,
        featured: false,
        rating: 4.8,
        reviews: 203,
      },
      {
        id: '5',
        name: 'Kids Colorful T-Shirt',
        description: 'Fun, vibrant t-shirt perfect for active kids',
        price: 19.99,
        image: 'https://images.pexels.com/photos/7691691/pexels-photo-7691691.jpeg',
        images: ['https://images.pexels.com/photos/7691691/pexels-photo-7691691.jpeg'],
        category: 'kids',
        subcategory: 't-shirts',
        sizes: ['2T', '3T', '4T', '5T', '6T'],
        colors: ['Red', 'Blue', 'Green', 'Yellow'],
        inStock: true,
        stockQuantity: 60,
        featured: true,
        rating: 4.4,
        reviews: 92,
      },
      {
        id: '6',
        name: 'Leather Belt',
        description: 'Genuine leather belt with classic buckle design',
        price: 45.99,
        image: 'https://images.pexels.com/photos/6974266/pexels-photo-6974266.jpeg',
        images: ['https://images.pexels.com/photos/6974266/pexels-photo-6974266.jpeg'],
        category: 'accessories',
        subcategory: 'belts',
        sizes: ['28', '30', '32', '34', '36', '38'],
        colors: ['Brown', 'Black'],
        inStock: true,
        stockQuantity: 35,
        featured: false,
        rating: 4.3,
        reviews: 67,
      },
    ];

    dispatch({ type: 'SET_PRODUCTS', payload: mockProducts });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};