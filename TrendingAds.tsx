import Image from 'next/image';

const ads = [
  {
    price: 'KSh 2,000,000',
    title: 'Toyota Raize 1.0 FWD 2019',
    location: 'Mombasa, Mombasa CBD',
    image: '/your-ad-image1.jpg', // Image directly in the public directory
  },
  // Add more ads as needed
];

export default function TrendingAds() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Trending Ads</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ads.map((ad, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg bg-white">
            <Image
              src={ad.image}
              alt={ad.title}
              width={300}
              height={200}
              className="rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-800">{ad.title}</h3>
            <p className="text-green-600 font-bold">{ad.price}</p>
            <p className="text-gray-500">{ad.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 