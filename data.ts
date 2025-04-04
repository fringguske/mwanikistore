// Sample data for different categories
const categoryData: Record<string, any[]> = {
  'vehicles': [
    {
      id: 'v1',
      title: 'lamboghini model 1',
      price: 'KSh 20,000',
      location: 'Mombasa, Mombasa CBD',
      image: '/lamboghini model 1.jpg',
      featured: true,
    },
    {
      id: 'v2',
      title: 'mercedes benz model 2',
      price: 'KSh 50,000',
      location: 'Nairobi, Westlands',
      image: '/mercedes benz.jpg',
    },
    {
      id: 'v3',
      title: 'vits model 3',
      price: 'KSh 20,000',
      location: 'Nairobi, Karen',
      image: '/vits model 3.jpg',
    },
    {
      id: 'v4',
      title: 'Mazda CX-5 2019 White',
      price: 'KSh 80,000',
      location: 'Nakuru, Town Center',
      image: '/dmax isuzu.jpg',
      featured: true,
    },
    {
      id: 'v5',
      title: 'Nissan X-Trail 2017',
      price: 'KSh 2,300,000',
      location: 'Mombasa, Nyali',
      image: '/vits model 1.jpg',
    },
    {
      id: 'v6',
      title: 'Toyota Land Cruiser Prado 2016',
      price: 'KSh 4,800,000',
      location: 'Nairobi, Kilimani',
      image: '/vits model 2.jpg',
    },
  ],
  'property': [
    {
      id: 'p1',
      title: '3 Bedroom Apartment in Westlands',
      price: 'KSh 25,000,000',
      location: 'Nairobi, Westlands',
      image: '/house1.jpg',
      featured: true,
    },
    {
      id: 'p2',
      title: '4 Bedroom Villa with Swimming Pool',
      price: 'KSh 45,000,000',
      location: 'Nairobi, Karen',
      image: '/house2.jpg',
    },
    {
      id: 'p3',
      title: '2 Bedroom Apartment near Beach',
      price: 'KSh 18,000,000',
      location: 'Mombasa, Nyali',
      image: '/house3.jpg',
    },
    {
      id: 'p4',
      title: 'Commercial Building for Sale',
      price: 'KSh 120,000,000',
      location: 'Nairobi, CBD',
      image: '/house4.jpg',
      featured: true,
    },
    {
      id: 'p5',
      title: 'Studio Apartment in Kilimani',
      price: 'KSh 8,500,000',
      location: 'Nairobi, Kilimani',
      image: '/house5.jpg',
    },
    {
      id: 'p6',
      title: '1 Acre Land for Development',
      price: 'KSh 15,000,000',
      location: 'Nakuru, Outskirts',
      image: '/house6.jpg',
    },
  ],
  'mobile-phones-tablets': [
    {
      id: 'm1',
      title: 'iPhone 14 Pro Max 256GB',
      price: 'KSh 180,000',
      location: 'Nairobi, CBD',
      image: '/smartphone1.jpg',
      featured: true,
    },
    {
      id: 'm2',
      title: 'Samsung Galaxy S22 Ultra',
      price: 'KSh 120,000',
      location: 'Mombasa, Nyali',
      image: '/smartphone2.jpg',
    },
    {
      id: 'm3',
      title: 'iPad Pro 12.9" 2022',
      price: 'KSh 150,000',
      location: 'Nairobi, Westlands',
      image: '/smartphone3.jpg',
    },
    {
      id: 'm4',
      title: 'Google Pixel 7 Pro',
      price: 'KSh 95,000',
      location: 'Nairobi, Kilimani',
      image: '/smartphone4.jpg',
    },
    {
      id: 'm5',
      title: 'Samsung Galaxy Tab S8',
      price: 'KSh 85,000',
      location: 'Kisumu, CBD',
      image: '/smartphone5.jpg',
      featured: true,
    },
    {
      id: 'm6',
      title: 'Oppo Reno 7',
      price: 'KSh 45,000',
      location: 'Eldoret, Town Center',
      image: '/smartphone6.jpg',
    },
  ],
  'electronics': [
    {
      id: 'e1',
      title: 'Sony 65" 4K Smart TV',
      price: 'KSh 120,000',
      location: 'Nairobi, Westlands',
      image: '/tv1.jpg',
      featured: true,
    },
    {
      id: 'e2',
      title: 'MacBook Pro 16" 2023',
      price: 'KSh 280,000',
      location: 'Nairobi, Kilimani',
      image: '/laptop1.jpg',
    },
    {
      id: 'e3',
      title: 'Bose QuietComfort Earbuds',
      price: 'KSh 35,000',
      location: 'Mombasa, CBD',
      image: '/earbuds1.jpg',
    },
    {
      id: 'e4',
      title: 'PlayStation 5 Disc Edition',
      price: 'KSh 75,000',
      location: 'Nakuru, Town Center',
      image: '/ps5.jpg',
      featured: true,
    },
    {
      id: 'e5',
      title: 'Canon EOS R5 Camera',
      price: 'KSh 350,000',
      location: 'Nairobi, Karen',
      image: '/camera1.jpg',
    },
    {
      id: 'e6',
      title: 'Samsung Refrigerator',
      price: 'KSh 95,000',
      location: 'Kisumu, CBD',
      image: '/fridge1.jpg',
    },
  ],
};

export function getCategoryItems(category: string) {
  // Convert category to lowercase and remove any special characters
  const normalizedCategory = category.toLowerCase().replace(/[^a-z0-9-]/g, '');
  
  // Return the items for that category, or a default empty array if not found
  return categoryData[normalizedCategory] || [];
}

export function getAllCategories() {
  return Object.keys(categoryData);
} 