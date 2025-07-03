
import { Wheat, Mail, Phone, MapPin } from 'lucide-react';

const CustomerFooter = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-amber-600 p-2 rounded-lg">
                <Wheat className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Pretreat</h3>
                <p className="text-sm text-amber-200">Premium Millets</p>
              </div>
            </div>
            <p className="text-amber-200 mb-4">
              Your trusted source for premium millet-based products. We bring you the finest 
              selection of healthy snacks and drinks made from nature's superfood - millets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-amber-200">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-amber-200">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@pretreat.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-200">
          <p>&copy; 2024 Pretreat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default CustomerFooter;
