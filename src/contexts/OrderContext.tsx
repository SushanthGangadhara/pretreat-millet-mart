
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from './CartContext';

export interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customerDetails: CustomerDetails;
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
  paymentMethod: string;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (items: CartItem[], customerDetails: CustomerDetails, paymentMethod: string) => string;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
  getOrderById: (orderId: string) => Order | undefined;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (items: CartItem[], customerDetails: CustomerDetails, paymentMethod: string): string => {
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);
    
    const newOrder: Order = {
      id: orderId,
      items,
      customerDetails,
      totalAmount,
      status: 'pending',
      createdAt: new Date(),
      paymentMethod,
    };

    setOrders(prev => [newOrder, ...prev]);
    return orderId;
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status } : order
      )
    );
  };

  const getOrderById = (orderId: string) => {
    return orders.find(order => order.id === orderId);
  };

  return (
    <OrderContext.Provider value={{
      orders,
      addOrder,
      updateOrderStatus,
      getOrderById,
    }}>
      {children}
    </OrderContext.Provider>
  );
};
