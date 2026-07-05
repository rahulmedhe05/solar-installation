"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sun, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { addLead } from "@/lib/leads"

const slides = [
  {
    id: 1,
    title: "Go Solar, Save More",
    subtitle: "Vadodara's Trusted Solar Installer",
    description: "Premium solar panel installation for homes & businesses. Up to ₹78,000 government subsidy available.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Rooftop Solar Solutions",
    subtitle: "Power Your Home with Sunshine",
    description: "1kW to 10kW residential solar systems. Generate free electricity for 25+ years.",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Commercial & Industrial Solar",
    subtitle: "Reduce Business Electricity Costs",
    description: "10kW to MW scale solar power plants for factories, warehouses & offices in GIDC Vadodara.",
    image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Net Metering Experts",
    subtitle: "Export Power, Earn Credits",
    description: "Complete DGVCL net metering assistance. Zero electricity bills possible with proper sizing.",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=1920&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "PM Surya Ghar Yojana",
    subtitle: "Government Subsidy Available",
    description: "Get up to ₹78,000 subsidy on residential solar. MNRE approved installer. Free registration help.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1920&auto=format&fit=crop",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    propertyType: "",
    monthlyBill: "",
    area: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save lead to localStorage
    addLead({
      fullName: formData.fullName,
      phoneNumber: formData.phoneNumber,
      propertyType: formData.propertyType,
      budget: formData.monthlyBill,
      city: formData.area,
    })

    const message = `
☀️ *SOLAR INSTALLATION ENQUIRY* ☀️

• *Full Name:* ${formData.fullName}
• *Phone Number:* ${formData.phoneNumber}
• *Property Type:* ${formData.propertyType}
• *Area:* ${formData.area}
• *Monthly Bill:* ${formData.monthlyBill || 'Not specified'}

―――――――――――――
_Sent via Solar Installation Vadodara Website_
    `.trim()

    const whatsappNumber = "919033451995"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative w-full min-h-screen md:h-screen sm:h-[600px] xs:h-screen overflow-hidden pt-16 sm:pt-20">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-orange-800/60 to-orange-700/40 z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-slate-900/40 z-0" />
          <div className="absolute inset-0 z-20 flex items-center px-3 sm:px-4 md:px-0">
            <div className="container mx-auto px-3 sm:px-4 py-4 md:py-0">
              <div className="grid md:grid-cols-5 gap-3 md:gap-6 items-start">
                {/* Left Side - Text Content */}
                <div className="md:col-span-3 max-w-2xl space-y-2 md:space-y-6">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Sun className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    <span className="text-xs font-mono uppercase tracking-wider">{slide.subtitle}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white leading-tight text-balance">
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 font-mono leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <p className="text-yellow-400 text-xs font-mono">Starting</p>
                      <p className="text-white font-bold">₹55,000/kW</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <p className="text-yellow-400 text-xs font-mono">Subsidy</p>
                      <p className="text-white font-bold">Up to ₹78,000</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                      <p className="text-yellow-400 text-xs font-mono">Warranty</p>
                      <p className="text-white font-bold">25 Years</p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:col-span-2 bg-white rounded-lg p-3 md:p-5 shadow-2xl h-fit">
                  <div className="mb-2 md:mb-3 pb-2 md:pb-3 border-b border-gray-200">
                    <p className="text-xs text-orange-600 font-mono uppercase tracking-wider mb-1">Free Consultation</p>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-800">
                      Get Solar Quote in 30 Minutes
                      <br />
                      <em className="text-xs not-italic text-gray-600">— Site Visit & Estimate Included</em>
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-2">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-mono text-gray-700 mb-1">
                        1. Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className="bg-gray-50 border-gray-300 text-gray-800 text-xs h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-mono text-gray-700 mb-1">
                        2. Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="phoneNumber"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        required
                        className="bg-gray-50 border-gray-300 text-gray-800 text-xs h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="propertyType" className="block text-xs font-mono text-gray-700 mb-1">
                        3. Property Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="propertyType"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        required
                        className="w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-md px-2 py-1 text-xs h-8"
                      >
                        <option value="">Select Property Type</option>
                        <option value="Residential">Residential Home</option>
                        <option value="Villa/Bungalow">Villa / Bungalow</option>
                        <option value="Society">Housing Society</option>
                        <option value="Commercial">Commercial Building</option>
                        <option value="Industrial">Industrial / Factory</option>
                        <option value="Warehouse">Warehouse</option>
                        <option value="Agricultural">Agricultural Land</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="area" className="block text-xs font-mono text-gray-700 mb-1">
                        4. Area in Vadodara <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="area"
                        type="text"
                        placeholder="e.g., Alkapuri, Gotri, GIDC"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        required
                        className="bg-gray-50 border-gray-300 text-gray-800 text-xs h-8"
                      />
                    </div>

                    <div>
                      <label htmlFor="monthlyBill" className="block text-xs font-mono text-gray-700 mb-1">
                        5. Monthly Electricity Bill (Optional)
                      </label>
                      <select
                        id="monthlyBill"
                        value={formData.monthlyBill}
                        onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-md px-2 py-1 text-xs h-8"
                      >
                        <option value="">Select Range</option>
                        <option value="₹1,000 - ₹3,000">₹1,000 - ₹3,000</option>
                        <option value="₹3,000 - ₹5,000">₹3,000 - ₹5,000</option>
                        <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                        <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                        <option value="₹50,000+">₹50,000+</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white text-xs h-9 mt-2">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Get Free Quote on WhatsApp
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-2 transition-all"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-yellow-400" : "w-2 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
