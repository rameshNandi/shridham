'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Review {
  name: string;
  date: string;
  text: string;
  avatar: string;
}

interface ApiResponse {
  reviews: Review[];
  googleLogo: string;
}

export default function GoogleReviewSlider() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [googleLogo, setGoogleLogo] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // API fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // This would be your actual API call:
        // const response = await fetch('your-api-endpoint');
        // const data: ApiResponse = await response.json();
        
        // Mock data - replace with your API response
        const mockData: ApiResponse = {
          reviews: [
            {
              name: 'Maria Kongsgaard',
              date: '15/04/2021',
              text: 'The host was waiting for us and was very polite and helpful.',
              avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            },
            {
              name: 'Maren Calzoni',
              date: '15/04/2021',
              text: 'The place is super clean, everything is new and the beds!\n\n10/10',
              avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
            },
            {
              name: 'Davis Dokidis',
              date: '15/04/2021',
              text: 'Nice apartments, friendly host and a quiet environment. Approx 4.3 km.',
              avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
            },
            {
              name: 'Anna Smith',
              date: '16/04/2021',
              text: 'Absolutely stunning views and top-notch hospitality. Highly recommended!',
              avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
            },
            {
              name: 'Liam Carter',
              date: '17/04/2021',
              text: 'Perfect location and beautiful design. The staff were kind and helpful.',
              avatar: 'https://randomuser.me/api/portraits/men/66.jpg',
            },
            {
              name: 'Sophia Müller',
              date: '18/04/2021',
              text: 'A great experience overall. Clean rooms, good location, and value for money.',
              avatar: 'https://randomuser.me/api/portraits/women/77.jpg',
            },
          ],
          googleLogo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        };
        
        setReviews(mockData.reviews);
        setGoogleLogo(mockData.googleLogo);
        setLoading(false);
      } catch (err) {
        setError('Failed to load reviews. Please try again later.');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (reviews.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === Math.ceil(reviews.length / 3) - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews]);

  if (loading) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 pb-16 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#790f11] text-center mb-8">
          What Our Guests Say
        </h2>
        <p>Loading reviews...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 pb-16 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#790f11] text-center mb-8">
          What Our Guests Say
        </h2>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pb-16 overflow-hidden">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#790f11] text-center mb-8">
        What Our Guests Say
      </h2>

      <div className="relative w-full">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, i) => (
            <div 
              key={i}
              className="flex-shrink-0 w-full md:w-1/3 px-3"
            >
              <div className="flex flex-col justify-between border rounded-xl p-6 shadow-md bg-white h-[360px]">
                <div className="flex flex-col items-center">
                  {googleLogo && (
                    <div className="w-24 h-8 relative mb-2">
                      <Image
                        src={googleLogo}
                        alt="Google"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  )}
                  <div className="flex text-yellow-400 mt-2 mb-4">
                    {'★★★★★'.split('').map((s, i) => (
                      <span key={i}>{s}</span>
                    ))}
                  </div>
                  <p className="text-center text-gray-700 mb-4 whitespace-pre-line text-sm">
                    {review.text}
                  </p>
                </div>
                <div className="flex flex-col items-center mt-2">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="text-sm font-medium mt-2">{review.name}</div>
                  <div className="text-xs text-gray-400">{review.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}   
      <div className="flex justify-center mt-6">
        {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full mx-1 ${currentIndex === i ? 'bg-[#790f11]' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}    