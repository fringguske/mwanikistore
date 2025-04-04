import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import CategoryShowcase from './components/CategoryShowcase';
import { getCategoryItems } from './utils/data';
import SearchHeader from './components/SearchHeader';

export default function Home() {
  // Get items from all categories
  const categories = [
    { name: 'Vehicles', slug: 'vehicles' },
    { name: 'Property', slug: 'property' },
    { name: 'Mobile Phones & Tablets', slug: 'mobile-phones-tablets' },
    { name: 'Electronics', slug: 'electronics' },
  ];
  
  const categoryItems = categories.map(category => ({
    ...category,
    items: getCategoryItems(category.slug).slice(0, 4)
  }));
  
  return (
    <main className="bg-white">
      <Hero />
      <div className="container mx-auto px-4">
        <SearchHeader />
      </div>
      <Statistics />
      <CategoryShowcase />
      
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 text-center">Featured Products</h2>
          
          {categoryItems.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-700">{category.name}</h3>
                <a href={`/category/${category.slug}`} className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                  View All
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.items.map((item, itemIndex) => (
                  <ProductCard key={itemIndex} item={item} category={category.slug} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Testimonials />
    </main>
  );
}
