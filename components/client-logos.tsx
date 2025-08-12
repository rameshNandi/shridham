"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Image from "next/image";

const clients = [
  { name: "Modern Homes Inc", logo: "/place/lux.png" },
  { name: "Corporate Spaces", logo: "/place/medica.png" },
  { name: "Boutique Restaurants", logo: "/place/lux.png" },
  { name: "Elite Residences", logo: "/place/lux.png" },
  { name: "Commercial Properties", logo: "/place/lux.png" },
  { name: "Premium Offices", logo: "/place/lux.png" },
];

export function ClientLogos() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[var(--quill-gray)]/10 to-[var(--nobel)]/10 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto">
      
        <div className="max-w-7xl pb-20 mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#790f11]">
          Trusted by Leading Brands
          </h1>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">
          We're proud to work with industry leaders and innovative companies
          </p>
        </div>
    

        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={40}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          freeMode={{
            enabled: true,
            momentumBounce: false,
            sticky: false,
          }}
          className="w-full"
        >
          {[...clients, ...clients].map((client, index) => (
            <SwiperSlide
              key={index}
              className="!w-auto flex items-center justify-center px-4"
            >
              <div className="h-24 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
