
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '../../components/ProductCard';
import { sampleProducts } from '../../data/products';

const Home = () => {
  const featuredProducts = sampleProducts.slice(0, 4);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 leading-tight">
              Premium Millet Products for a
              <span className="text-orange-600"> Healthier You</span>
            </h1>
            <p className="text-xl text-amber-700 mb-8 leading-relaxed">
              Discover our collection of nutritious millet-based snacks and drinks. 
              Pure, natural, and packed with goodness for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">100% Natural</h3>
                <p className="text-gray-600 text-sm">Pure millet products with no artificial additives</p>
              </CardContent>
            </Card>

            <Card className="text-center border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Free Delivery</h3>
                <p className="text-gray-600 text-sm">Free shipping on orders above ₹500</p>
              </CardContent>
            </Card>

            <Card className="text-center border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Quality Assured</h3>
                <p className="text-gray-600 text-sm">Premium quality products with food safety certification</p>
              </CardContent>
            </Card>

            <Card className="text-center border-amber-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Trusted Brand</h3>
                <p className="text-gray-600 text-sm">Loved by thousands of health-conscious families</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Featured Products
            </h2>
            <p className="text-amber-700 text-lg max-w-2xl mx-auto">
              Discover our most popular millet-based products, carefully crafted for taste and nutrition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Healthy Journey Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who have made the switch to nutritious millet products.
            </p>
            <Link to="/products">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3">
                Shop Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
