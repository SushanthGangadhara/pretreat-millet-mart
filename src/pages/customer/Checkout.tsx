
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, Building2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '../../contexts/CartContext';
import { useOrders, CustomerDetails } from '../../contexts/OrderContext';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const { addOrder } = useOrders();
  
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });
  
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);

  const shippingCost = getTotalPrice() >= 500 ? 0 : 50;
  const totalAmount = getTotalPrice() + shippingCost;

  const handleInputChange = (field: keyof CustomerDetails, value: string) => {
    setCustomerDetails(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const required = ['name', 'email', 'phone', 'address', 'city', 'pincode'];
    for (const field of required) {
      if (!customerDetails[field as keyof CustomerDetails]) {
        toast.error(`Please fill in ${field}`);
        return false;
      }
    }
    
    if (!/\S+@\S+\.\S+/.test(customerDetails.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    
    if (!/^\d{10}$/.test(customerDetails.phone)) {
      toast.error('Please enter a valid 10-digit phone number');
      return false;
    }
    
    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try {
      const orderId = addOrder(items, customerDetails, paymentMethod);
      clearCart();
      toast.success('Order placed successfully!');
      navigate(`/order-success?orderId=${orderId}`);
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <Button onClick={() => navigate('/products')} className="bg-amber-600 hover:bg-amber-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button 
          variant="outline" 
          onClick={() => navigate('/cart')}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Cart
        </Button>
        <h1 className="text-3xl font-bold text-amber-900">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Customer Details */}
        <div className="space-y-6">
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle>Delivery Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={customerDetails.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={customerDetails.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="10-digit mobile number"
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerDetails.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-amber-200 focus:border-amber-400"
                />
              </div>
              
              <div>
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  value={customerDetails.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="House no, Street, Area"
                  className="border-amber-200 focus:border-amber-400"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={customerDetails.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>
                <div>
                  <Label htmlFor="pincode">Pincode *</Label>
                  <Input
                    id="pincode"
                    value={customerDetails.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    placeholder="6-digit pincode"
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2 p-3 border border-amber-200 rounded-lg">
                  <RadioGroupItem value="upi" id="upi" />
                  <Smartphone className="h-5 w-5 text-blue-600" />
                  <Label htmlFor="upi" className="flex-1 cursor-pointer">
                    UPI (PhonePe, GPay, Paytm)
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2 p-3 border border-amber-200 rounded-lg">
                  <RadioGroupItem value="card" id="card" />
                  <CreditCard className="h-5 w-5 text-green-600" />
                  <Label htmlFor="card" className="flex-1 cursor-pointer">
                    Credit/Debit Card
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2 p-3 border border-amber-200 rounded-lg">
                  <RadioGroupItem value="netbanking" id="netbanking" />
                  <Building2 className="h-5 w-5 text-purple-600" />
                  <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                    Net Banking
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="border-amber-200 sticky top-8">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Order Items */}
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b border-amber-100">
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
              {/* Totals */}
              <div className="space-y-2 border-t border-amber-200 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{getTotalPrice().toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className={shippingCost === 0 ? 'text-green-600' : ''}>
                    {shippingCost === 0 ? 'Free' : `₹${shippingCost}`}
                  </span>
                </div>
                
                <div className="flex justify-between font-bold text-lg border-t border-amber-200 pt-2">
                  <span>Total</span>
                  <span className="text-amber-600">₹{totalAmount.toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full bg-amber-600 hover:bg-amber-700 mt-6"
              >
                {isProcessing ? 'Processing...' : `Place Order - ₹${totalAmount.toFixed(2)}`}
              </Button>
              
              <p className="text-xs text-gray-600 text-center mt-2">
                By placing this order, you agree to our terms and conditions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
