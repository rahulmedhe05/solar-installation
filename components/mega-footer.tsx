"use client";

import Image from "next/image";
import Link from "next/link";
import { vadodaraAreas, getAreaDisplayName } from "@/lib/business-config";
import { solarKeywords } from "@/lib/keywords-config";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Sun } from "lucide-react";

export function MegaFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Website Name & Branding */}
      <div className="bg-gradient-to-r from-[#1E3A8A] to-orange-500">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/Logo.png"
                alt="Tarun & Co. Solar Energy Solutions"
                width={220}
                height={56}
                className="h-14 md:h-16 w-auto object-contain bg-white rounded-md p-1.5"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white">Tarun &amp; Co.</h1>
                <p className="text-white/90 text-sm">Gujarat&apos;s Most Trusted Solar Energy Solutions Company</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <div className="text-center px-4 border-r border-white/30">
                <p className="text-2xl font-bold">MNRE</p>
                <p className="text-xs">Approved</p>
              </div>
              <div className="text-center px-4 border-r border-white/30">
                <p className="text-2xl font-bold">GEDA</p>
                <p className="text-xs">Certified</p>
              </div>
              <div className="text-center px-4">
                <p className="text-2xl font-bold">ISO</p>
                <p className="text-xs">9001:2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keywords Navigation */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-orange-400">
            <Sun className="inline-block w-6 h-6 mr-2" />
            Solar Installation Services - All Keywords
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {solarKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}`}
                className="text-gray-400 hover:text-orange-400 transition-colors block py-1 text-sm"
              >
                {keyword.title.replace(" in Vadodara", "").replace(" Vadodara", "")}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Areas Navigation */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">
            <MapPin className="inline-block w-6 h-6 mr-2" />
            Solar Installation - Service Areas in Vadodara
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-3">
            {vadodaraAreas.map((area) => (
              <Link
                key={area}
                href={`/${area}`}
                className="text-gray-400 hover:text-yellow-400 transition-colors block py-1 text-sm"
              >
                {getAreaDisplayName(area)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors">Home</Link>
            <Link href="/solar-panel-installation-services-vadodara" className="text-gray-400 hover:text-orange-400 transition-colors">About Us</Link>
            <Link href="/blog" className="text-gray-400 hover:text-orange-400 transition-colors">Blog</Link>
            <Link href="/solar-panel-price-vadodara" className="text-gray-400 hover:text-orange-400 transition-colors">Price Guide</Link>
            <Link href="/solar-subsidy-vadodara" className="text-gray-400 hover:text-orange-400 transition-colors">Govt Subsidy</Link>
            <Link href="/rooftop-solar-vadodara" className="text-gray-400 hover:text-orange-400 transition-colors">Rooftop Solar</Link>
            <Link href="/solar-system-for-home-vadodara" className="text-gray-400 hover:text-orange-400 transition-colors">Home Solar</Link>
            <Link href="/commercial-solar-vadodara" className="text-gray-400 hover:text-orange-400 transition-colors">Commercial Solar</Link>
            <a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Call / WhatsApp Us</h4>
                <a href="tel:+919033451995" className="text-gray-400 hover:text-white block">+91 90334 51995</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <a href="mailto:taruncopwr@gmail.com" className="text-gray-400 hover:text-white block">taruncopwr@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                <p className="text-gray-400">A-1/G.F.-37, Akshar Pavillion,</p>
                <p className="text-gray-400">Nr. Nilamber Circle, Gotri-Bhayli, Vadodara - 390021</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p className="text-gray-400">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-400">Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="border-b border-gray-700 bg-gray-800/50">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-orange-400">5000+</p>
              <p className="text-gray-400 text-sm">Solar Installations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">40+</p>
              <p className="text-gray-400 text-sm">Areas Served in Vadodara</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-400">15+</p>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-400">₹78,000</p>
              <p className="text-gray-400 text-sm">Max Govt Subsidy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()}{" "}
            <a href="https://solarinstallationvadodara.in" className="hover:text-orange-400 transition-colors">
              SolarInstallationVadodara.in
            </a>{" "}
            - Tarun &amp; Co. Solar Energy Solutions. All Rights Reserved. | MNRE &amp; GEDA Approved Installer
          </p>
        </div>
      </div>
    </footer>
  );
}
