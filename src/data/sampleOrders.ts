
import { Order } from '../contexts/OrderContext';

export const sampleOrders: Order[] = [
  {
    id: 'ORD-1703123456789-abc123def',
    items: [
      {
        id: '1',
        name: 'Organic Finger Millet',
        price: 150,
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400',
        category: 'Grains',
        description: 'Premium quality finger millet',
        stock: 50,
        quantity: 2
      },
      {
        id: '3',
        name: 'Millet Energy Bars',
        price: 120,
        image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400',
        category: 'Snacks',
        description: 'Healthy energy bars made from millets',
        stock: 30,
        quantity: 1
      }
    ],
    customerDetails: {
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@example.com',
      phone: '+91 9876543210',
      address: '123 MG Road, Indiranagar',
      city: 'Bangalore',
      pincode: '560038'
    },
    totalAmount: 420,
    status: 'pending',
    createdAt: new Date('2024-01-15T10:30:00Z'),
    paymentMethod: 'UPI'
  },
  {
    id: 'ORD-1703123456790-def456ghi',
    items: [
      {
        id: '2',
        name: 'Pearl Millet Flour',
        price: 80,
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400',
        category: 'Flour',
        description: 'Fresh pearl millet flour',
        stock: 40,
        quantity: 3
      }
    ],
    customerDetails: {
      name: 'Priya Sharma',
      email: 'priya.sharma@example.com',
      phone: '+91 9876543211',
      address: '456 Park Street, Koramangala',
      city: 'Bangalore',
      pincode: '560095'
    },
    totalAmount: 240,
    status: 'confirmed',
    createdAt: new Date('2024-01-14T14:15:00Z'),
    paymentMethod: 'Credit Card'
  },
  {
    id: 'ORD-1703123456791-ghi789jkl',
    items: [
      {
        id: '4',
        name: 'Foxtail Millet',
        price: 120,
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400',
        category: 'Grains',
        description: 'Nutritious foxtail millet',
        stock: 35,
        quantity: 1
      },
      {
        id: '5',
        name: 'Millet Cookies',
        price: 100,
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400',
        category: 'Snacks',
        description: 'Delicious millet cookies',
        stock: 25,
        quantity: 2
      }
    ],
    customerDetails: {
      name: 'Amit Patel',
      email: 'amit.patel@example.com',
      phone: '+91 9876543212',
      address: '789 Brigade Road, Central Bangalore',
      city: 'Bangalore',
      pincode: '560001'
    },
    totalAmount: 320,
    status: 'shipped',
    createdAt: new Date('2024-01-13T09:45:00Z'),
    paymentMethod: 'UPI'
  }
];
