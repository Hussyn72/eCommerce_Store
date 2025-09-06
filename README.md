# StyleHub - Complete eCommerce Platform

A modern, full-featured eCommerce platform built with React, TypeScript, and Tailwind CSS. Features both customer-facing store and comprehensive admin CMS for complete order management.

## 🚀 Features

### Customer Features
- **Product Catalog**: Browse products by categories (Men, Women, Kids, Shoes, Accessories)
- **Advanced Filtering**: Filter by price, size, color, and category
- **Product Details**: Detailed product views with image gallery, size/color selection
- **Shopping Cart**: Add/remove items, adjust quantities, real-time total calculation
- **User Authentication**: Login/Register with profile management
- **User Profile**: Order history, saved addresses, wishlist management.
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)

### Admin Features
- **Dashboard Overview**: Sales analytics, order statistics, inventory alerts
- **Product Management**: Add, edit, delete products with inventory tracking
- **Order Management**: View, update order status, track fulfillment
- **User Management**: Customer accounts and admin controls
- **Real-time Updates**: Live inventory and order status updates

### Technical Features
- **Modern Stack**: React 18, TypeScript, Tailwind CSS
- **State Management**: Context API with useReducer
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Performance**: Optimized images, lazy loading, efficient re-renders
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support

## 🛠 Installation & Setup

```bash
# Clone the repository
git clone <repository-url>
cd stylehub-ecommerce

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Pages & Screenshots

### 1. Homepage
**URL**: `/`
**Features**: Hero section, featured products, category navigation.

![Homepage](https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg)
*Modern hero section with featured products and smooth animations*

### 2. Product Catalog
**URL**: `/products`
**Features**: Product grid, filtering, sorting, search functionality

![Product Catalog](https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg)
*Clean product grid with advanced filtering options*

### 3. Product Details
**Features**: Image gallery, size/color selection, add to cart, reviews

![Product Details](https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg)
*Detailed product view with interactive selection options*

### 4. Shopping Cart
**Features**: Item management, quantity adjustment, price calculation

![Shopping Cart](https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg)
*Sliding cart sidebar with real-time updates*

### 5. User Profile
**URL**: `/profile`
**Features**: Personal info, order history, addresses, wishlist

![User Profile](https://images.pexels.com/photos/7691691/pexels-photo-7691691.jpeg)
*Comprehensive profile management with tabbed interface*

### 6. Admin Dashboard
**URL**: `/admin`
**Features**: Analytics, product management, order tracking

![Admin Dashboard](https://images.pexels.com/photos/6974266/pexels-photo-6974266.jpeg)
*Professional admin interface with data visualization*

## 🎨 Design System

### Color Palette
- **Primary**: Slate (Navy) - `#1e293b`
- **Accent**: Amber (Gold) - `#f59e0b`
- **Background**: White - `#ffffff`
- **Text**: Gray scale - `#111827` to `#6b7280`

### Typography
- **Headings**: Inter font family, bold weights.
- **Body**: Inter font family, regular weight
- **Line Height**: 150% for body text, 120% for headings

### Spacing System
- **Base Unit**: 8px
- **Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

## 🏗 Project Structure

```
src/
├── components/
│   ├── Admin/
│   │   └── AdminDashboard.tsx
│   ├── Auth/
│   │   └── LoginModal.tsx
│   ├── Cart/
│   │   └── CartSidebar.tsx
│   ├── ProductDetail/
│   │   └── ProductDetailModal.tsx
│   ├── Profile/
│   │   └── ProfilePage.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── ProductGrid.tsx
│   └── Footer.tsx
├── context/
│   └── AppContext.tsx
├── types/
│   └── index.ts
├── App.tsx
└── main.tsx
```

## 🔧 Key Components

### AppContext
Central state management for:
- Product catalog
- Shopping cart
- User authentication
- Order management
- UI state (current view/page)

### Header Component
- Navigation menu
- Search functionality
- Cart icon with item count
- User authentication toggle
- Admin/Store view switcher

### ProductCard Component
- Product image with hover effects
- Quick add to cart
- Product details modal trigger
- Wishlist functionality

### CartSidebar Component
- Sliding cart panel
- Item quantity management
- Price calculations
- Checkout process

### AdminDashboard Component
- Sales analytics
- Product management table
- Order tracking interface
- Inventory alerts

## 🚀 Usage Guide

### For Customers
1. **Browse Products**: Use category filters or search
2. **View Details**: Click any product for detailed view
3. **Add to Cart**: Select size/color and add to cart
4. **Manage Cart**: Use cart sidebar to adjust quantities
5. **Create Account**: Register for order tracking and profile features
6. **Place Orders**: Complete checkout process

### For Admins
1. **Access Admin**: Click shield icon in header (use admin@stylehub.com)
2. **View Analytics**: Dashboard shows key metrics
3. **Manage Products**: Add, edit, or remove products
4. **Process Orders**: Update order status and track fulfillment
5. **Monitor Inventory**: Get alerts for low stock items

## 🔐 Authentication

### Demo Accounts
- **Admin**: admin@stylehub.com (any password)
- **Customer**: Any email address (any password)

### Features
- Login/Register modal
- Profile management
- Order history
- Address book
- Wishlist functionality

## 📊 Admin Features

### Dashboard Analytics
- Total revenue tracking
- Order count and status
- Product inventory levels
- Low stock alerts
- Customer metrics

### Product Management
- Add new products
- Edit existing products
- Manage inventory
- Set pricing and discounts
- Upload product images

### Order Management
- View all orders
- Update order status
- Track shipping
- Process returns
- Customer communication

## 🎯 Performance Optimizations

- **Image Optimization**: Responsive images with proper sizing
- **Code Splitting**: Lazy loading of components
- **State Optimization**: Efficient re-renders with React.memo
- **Bundle Size**: Tree shaking and minimal dependencies

## 🔮 Future Enhancements

- **Payment Integration**: Stripe/PayPal checkout
- **Email Notifications**: Order confirmations and updates
- **Advanced Search**: Elasticsearch integration
- **Reviews System**: Customer product reviews
- **Inventory Management**: Real-time stock updates
- **Multi-language**: Internationalization support
- **Mobile App**: React Native companion app

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Images**: Pexels for high-quality product images
- **Icons**: Lucide React for consistent iconography
- **Styling**: Tailwind CSS for rapid UI development
- **Fonts**: Inter font family for modern typography

---

**StyleHub** - Where style meets technology. Built with ❤️ for modern eCommerce.
