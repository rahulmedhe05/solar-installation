"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAreaDisplayName, BusinessConfig, allAreas } from "@/lib/business-config";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface BusinessNavProps {
  currentBusiness?: BusinessConfig;
  currentArea?: string;
}

export function BusinessNav({ currentBusiness, currentArea }: BusinessNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white text-gray-900 sticky top-0 z-50 shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/Logo.png"
              alt="Tarun & Co. Solar Energy Solutions"
              width={220}
              height={56}
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("areas")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-[#1E3A8A] transition-colors flex items-center gap-1">
                {currentArea ? getAreaDisplayName(currentArea) : "Select Area"}
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "areas" && (
                <div className="absolute top-full left-0 bg-white text-gray-800 rounded-lg shadow-xl py-2 min-w-[200px] max-h-[400px] overflow-y-auto border border-gray-100">
                  {allAreas.map((area) => (
                    <Link
                      key={area}
                      href={`/solar-installation/${area}`}
                      className={cn(
                        "block px-4 py-2 hover:bg-gray-100 transition-colors",
                        currentArea === area && "bg-gray-100 font-semibold"
                      )}
                    >
                      {getAreaDisplayName(area)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="#services" className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-[#1E3A8A] transition-colors">
              Services
            </Link>
            <Link href="#about" className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-[#1E3A8A] transition-colors">
              About
            </Link>
            <Link href="/blog" className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-[#1E3A8A] transition-colors">
              Blog
            </Link>
            <Link href="#contact" className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-[#1E3A8A] transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919033451995"
              className="flex items-center gap-2 bg-[#1E3A8A] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#152a63] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">Solar Installation in All Areas</p>
              <div className="grid grid-cols-3 gap-2">
                {allAreas.map((area) => (
                  <Link
                    key={area}
                    href={`/solar-installation/${area}`}
                    className="text-sm py-1 text-gray-700 hover:underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {getAreaDisplayName(area)}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <a
                href="tel:+919033451995"
                className="flex items-center justify-center gap-2 bg-[#1E3A8A] text-white px-4 py-3 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Now: +91 90334 51995
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
