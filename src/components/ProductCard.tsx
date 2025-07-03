
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart, Product } from '../contexts/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, items, updateQuantity } = useCart();

  // Check if product is already in cart
  const cartItem = items.find(item => item.id === product.id);
  const isInCart = !!cartItem;
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      updateQuantity(product.id, 0);
      toast.success(`${product.name} removed from cart`);
    } else {
      updateQuantity(product.id, newQuantity);
    }
  };

  const handleBuyNow = () => {
    if (!isInCart) {
      addToCart(product);
    }
    window.location.href = '/cart';
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-amber-200 overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-2 right-2 bg-amber-600">
          {product.category}
        </Badge>
        {product.stock <= 10 && (
          <Badge variant="destructive" className="absolute top-2 left-2">
            Low Stock
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-600">
            ₹{product.price}
          </span>
          <span className="text-sm text-gray-500">
            Stock: {product.stock}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 space-y-2">
        <div className="grid grid-cols-2 gap-2 w-full">
          {/* Add to Cart / Quantity Controls */}
          {!isInCart ? (
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleAddToCart}
              className="border-amber-600 text-amber-600 hover:bg-amber-50"
              disabled={product.stock === 0}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
          ) : (
            <div className="flex items-center justify-between border border-amber-600 rounded-md">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleQuantityChange(quantity - 1)}
                className="h-8 w-8 p-0 text-amber-600 hover:bg-amber-50"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="text-sm font-medium text-amber-600 px-2">
                {quantity}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleQuantityChange(quantity + 1)}
                className="h-8 w-8 p-0 text-amber-600 hover:bg-amber-50"
                disabled={quantity >= product.stock}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          )}
          
          <Button 
            size="sm"
            onClick={handleBuyNow}
            className="bg-amber-600 hover:bg-amber-700"
            disabled={product.stock === 0}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Buy Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
