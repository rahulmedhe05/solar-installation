"use client";

import { useState, useEffect } from "react";
import { BusinessConfig, getAreaDisplayName } from "@/lib/business-config";
import { HeroForm } from "./hero-form";
import { Phone, ChevronLeft, ChevronRight, Users, Star, Award, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessHeroSliderProps {
  business: BusinessConfig;
  area: string;
  heroTitle: string;
  heroSubtitle: string;
  keyword?: string;
}

// Solar installation images - diverse collection
const solarImages = [
  "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=1080&fit=crop", // Solar panels field
  "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1920&h=1080&fit=crop", // Rooftop solar
  "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1920&h=1080&fit=crop", // Solar array
  "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&h=1080&fit=crop", // Solar farm sunset
  "https://images.unsplash.com/photo-1548098343-8c8b6abe8ebf?w=1920&h=1080&fit=crop", // Industrial solar
];

export function BusinessHeroSlider({ business, area, heroTitle, heroSubtitle, keyword }: BusinessHeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const areaName = getAreaDisplayName(area);
  const images = solarImages;
  const gradientClass = business.colors.gradient;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className={cn("absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10")} />
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-60 z-10", gradientClass)} />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex items-center px-4 py-24 md:py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="md:col-span-1 lg:col-span-3 text-white space-y-4 md:space-y-5">
              <div className="flex items-center gap-2 text-white/80">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm font-medium uppercase tracking-wider">
                  {business.tagline}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {heroTitle}
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl opacity-90 max-w-xl">
                {heroSubtitle}
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-3 md:gap-4 pt-2">
                <div className="flex items-center gap-2 bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium">5000+ Customers</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                  <span className="text-xs md:text-sm font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                  <Award className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-medium">15+ Years</span>
                </div>
              </div>

            </div>

            {/* Right Side - Form */}
            <div className="md:col-span-1 lg:col-span-2 w-full max-w-md md:max-w-none mx-auto">
              <HeroForm business={business} area={area} keyword={keyword} />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentSlide ? "bg-white w-6" : "bg-white/50"
              )}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
