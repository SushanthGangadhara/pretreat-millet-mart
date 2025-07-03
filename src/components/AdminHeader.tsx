
import { Link } from 'react-router-dom';
import { Wheat, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/admin" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-2 rounded-lg">
              <Wheat className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Pretreat Admin</h1>
              <p className="text-xs text-gray-600">Dashboard</p>
            </div>
          </Link>

          {/* Admin Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Link to="/">
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                View Store
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
