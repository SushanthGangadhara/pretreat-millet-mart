
import { Package, Edit, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { sampleProducts } from '../../data/products';

const AdminProducts = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Products Management</h1>
          <p className="text-gray-600">Manage your product catalog</p>
        </div>
        
        <Button className="bg-amber-600 hover:bg-amber-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <Card key={product.id} className="border-gray-200">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
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
            
            <CardHeader>
              <CardTitle className="text-lg">{product.name}</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-amber-600">₹{product.price}</p>
                  <p className="text-sm text-gray-500">Stock: {product.stock}</p>
                </div>
                
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {sampleProducts.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No products found</p>
            <p className="text-gray-400">Add your first product to get started.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdminProducts;
