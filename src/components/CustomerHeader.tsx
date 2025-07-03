
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Wheat, Menu } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const CustomerHeader = () => {
  const { getTotalItems } = useCart();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const totalItems = getTotalItems();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-amber-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg group-hover:scale-105 transition-transform">
              <Wheat className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-amber-800">Pretreat</h1>
              <p className="text-xs text-amber-600">Premium Millets</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-amber-600 ${
                isActive('/') ? 'text-amber-600' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`font-medium transition-colors hover:text-amber-600 ${
                isActive('/products') ? 'text-amber-600' : 'text-gray-700'
              }`}
            >
              Products
            </Link>
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="outline" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs bg-orange-500">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>
            
            <Button
              variant="outline"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-amber-200">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className={`font-medium transition-colors hover:text-amber-600 ${
                  isActive('/') ? 'text-amber-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`font-medium transition-colors hover:text-amber-600 ${
                  isActive('/products') ? 'text-amber-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default CustomerHeader;
