import Image from 'next/image';
import ProductCard from '../../components/ProductCard';
import { getCategoryItems } from '../../utils/data';

export default function CategoryPage({ params }: { params: { category: string } }) {
  // Format the category name for display (convert-to-spaces and capitalize)
  const formattedCategory = params.category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  // Get items for this category
  const items = getCategoryItems(params.category);
  
  return (
    <main className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <a href="/" className="mr-4 text-indigo-600 hover:text-indigo-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </a>
          <h1 className="text-3xl font-bold text-gray-800">
            {formattedCategory} in Kenya
          </h1>
        </div>
        
        <hr className="mb-8" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <ProductCard key={index} item={item} category={params.category} />
          ))}
        </div>
      </div>
    </main>
  );
} 