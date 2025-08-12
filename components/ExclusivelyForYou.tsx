"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface FeaturedItem {
  id: number;
  image: string;
  heading: string;
  description: string;
  link: string;
}

export default function ExclusivelyForYou() {
  const [featuredData, setFeaturedData] = useState<FeaturedItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        const mockData: FeaturedItem[] = [
          {
            id: 1,
            image: "/place/banner-01.webp",
            heading: "LUXURY GETAWAYS",
            description: "Experience unparalleled luxury with our curated getaways designed.",
            link: "/luxury-getaways",
          },
          {
            id: 2,
            image: "/place/place_front_pic.jpg",
            heading: "BEACH ESCAPES",
            description: "Relax on pristine beaches with crystal-clear waters and enjoy.",
            link: "/beach-escapes",
          },
          {
            id: 3,
            image: "/place/banner-01.webp",
            heading: "MOUNTAIN RETREATS",
            description: "Reconnect with nature in our mountain retreats offerings.",
            link: "/mountain-retreats",
          },
          {
            id: 4,
            image: "/images/featured/featured-4.jpg",
            heading: "CULTURAL JOURNEYS",
            description: "Immerse yourself in rich cultural experiences and discover .",
            link: "/cultural-journeys",
          },
          {
            id: 5,
            image: "/images/featured/featured-5.jpg",
            heading: "ADVENTURE TRAVEL",
            description: "For the thrill-seekers, our adventure packages offer.",
            link: "/adventure-travel",
          }
        ];
        setFeaturedData(mockData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredData.length - 1 : prevIndex - 1
    );
  };

  if (isLoading) {
    return (
      <section className="relative bg-black text-white min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4">Loading featured experiences...</p>
        </div>
      </section>
    );
  }

  if (featuredData.length === 0) {
    return (
      <section className="relative bg-black text-white min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <p>No featured experiences available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={featuredData[currentIndex].image}
          alt="Background"
          fill
          className="object-cover opacity-25"
          priority
          quality={50}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12 px-2 sm:px-4">
          <div className="lg:col-span-1 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-light uppercase leading-tight tracking-tight"
            >
              <span className="block">EXCLUSIVELY</span>
              <span className="block">FOR YOU</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-2 text-sm sm:text-base text-gray-300 max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Refinement and creativity intertwine with dreamlike destinations and soulful moments on each sojourn with our exclusive collection.
            </motion.p>
          </div>
        </div>

        {/* Image + Card */}
        <div className="relative rounded-xl overflow-hidden shadow-2xl mx-2 sm:mx-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full"
            >
              <Image
                src={featuredData[currentIndex].image}
                alt={featuredData[currentIndex].heading}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[95%] sm:w-[85%] md:w-[75%] bg-white/95 text-black rounded-xl p-4 sm:p-6 shadow-xl backdrop-blur-sm border border-white/20"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-medium text-[#790f11] mb-2 uppercase tracking-wide">
              {featuredData[currentIndex].heading}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 px-2">
              {featuredData[currentIndex].description}
            </p>
           
          </motion.div>
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 z-20">
          <button
            onClick={prevSlide}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 backdrop-blur-sm group"
            aria-label="Previous experience"
          >
            <ChevronLeft className="text-white w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
        <div className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 z-20">
          <button
            onClick={nextSlide}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 backdrop-blur-sm group"
            aria-label="Next experience"
          >
            <ChevronRight className="text-white w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-10 sm:mt-14 space-x-2"
        >
          {featuredData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white scale-125" : "bg-white/30"}`}
              aria-label={`View experience ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
