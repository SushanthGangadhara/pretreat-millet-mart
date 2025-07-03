
import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Package, Home, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useOrders, Order } from '../../contexts/OrderContext';

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const { getOrderById } = useOrders();
  const [order, setOrder] = useState<Order | null>(null);
  
  const orderId = searchParams.get('orderId');

  useEffect(() => {
    if (orderId) {
      const foundOrder = getOrderById(orderId);
      setOrder(foundOrder || null);
    }
  }, [orderId, getOrderById]);

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order not found</h2>
          <Link to="/">
            <Button className="bg-amber-600 hover:bg-amber-700">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600">Thank you for your order. We'll process it shortly.</p>
        </div>

        {/* Order Details */}
        <Card className="border-green-200 mb-6">
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <Package className="mr-2 h-5 w-5" />
              Order Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Order ID</p>
                <p className="font-semibold">{order.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Order Date</p>
                <p className="font-semibold">{order.createdAt.toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Payment Method</p>
                <p className="font-semibold capitalize">{order.paymentMethod}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="font-semibold text-green-600">₹{order.totalAmount.toFixed(2)}</p>
              </div>
            </div>

            {/* Order Items */}
            <div className="border-t border-green-200 pt-4">
              <h4 className="font-semibold mb-3">Items Ordered</h4>
              <div className="space-y-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2 border-b border-green-100 last:border-b-0">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Address */}
            <div className="border-t border-green-200 pt-4">
              <h4 className="font-semibold mb-2">Delivery Address</h4>
              <div className="text-sm text-gray-600">
                <p className="font-medium text-gray-800">{order.customerDetails.name}</p>
                <p>{order.customerDetails.address}</p>
                <p>{order.customerDetails.city}, {order.customerDetails.pincode}</p>
                <p>Phone: {order.customerDetails.phone}</p>
                <p>Email: {order.customerDetails.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="border-amber-200 mb-6">
          <CardContent className="pt-6">
            <h4 className="font-semibold mb-3">What happens next?</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>• You'll receive an order confirmation email shortly</p>
              <p>• We'll prepare your order and send you tracking details</p>
              <p>• Your order will be delivered within 3-5 business days</p>
              <p>• For any queries, contact us at info@pretreat.com</p>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="outline" className="w-full sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <Link to="/products">
            <Button className="bg-amber-600 hover:bg-amber-700 w-full sm:w-auto">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
