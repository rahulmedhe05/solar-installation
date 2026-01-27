"use client"

import { useState } from "react"

const galleryItems = [
  { id: 1, type: "image", src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop", title: "Rooftop Solar Installation", category: "residential" },
  { id: 2, type: "image", src: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=800&auto=format&fit=crop", title: "Home Solar Panels", category: "residential" },
  { id: 3, type: "image", src: "https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=800&auto=format&fit=crop", title: "Industrial Solar Plant", category: "industrial" },
  { id: 4, type: "image", src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=800&auto=format&fit=crop", title: "Solar Farm", category: "commercial" },
  { id: 5, type: "image", src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop", title: "Solar Panel Array", category: "commercial" },
  { id: 6, type: "image", src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800&auto=format&fit=crop", title: "Solar Installation Team", category: "installation" },
  { id: 7, type: "image", src: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?q=80&w=800&auto=format&fit=crop", title: "Residential Rooftop", category: "residential" },
  { id: 8, type: "image", src: "https://images.unsplash.com/photo-1611365892117-00ac318fd51c?q=80&w=800&auto=format&fit=crop", title: "Solar Technician", category: "installation" },
  { id: 9, type: "image", src: "https://images.unsplash.com/photo-1421882046699-09a0ff4ffb1b?q=80&w=800&auto=format&fit=crop", title: "Solar Power Station", category: "industrial" },
  { id: 10, type: "image", src: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop", title: "Solar Panel Close-up", category: "residential" },
  { id: 11, type: "image", src: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?q=80&w=800&auto=format&fit=crop", title: "Commercial Solar", category: "commercial" },
  { id: 12, type: "image", src: "https://images.unsplash.com/photo-1584276433295-4b49a252e5ee?q=80&w=800&auto=format&fit=crop", title: "Factory Solar Installation", category: "industrial" },
  { id: 13, type: "image", src: "https://images.unsplash.com/photo-1591710668263-f81c6e50e757?q=80&w=800&auto=format&fit=crop", title: "Solar Panel Mounting", category: "installation" },
  { id: 14, type: "image", src: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&auto=format&fit=crop", title: "Green Energy Home", category: "residential" },
  { id: 15, type: "image", src: "https://images.unsplash.com/photo-1545208942-e1c9c916524b?q=80&w=800&auto=format&fit=crop", title: "Large Scale Solar", category: "industrial" },
  { id: 16, type: "image", src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop", title: "Warehouse Solar", category: "commercial" },
  { id: 17, type: "image", src: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=800&auto=format&fit=crop", title: "Solar Panel Inspection", category: "installation" },
  { id: 18, type: "image", src: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop", title: "Bungalow Solar", category: "residential" },
  { id: 19, type: "image", src: "https://images.unsplash.com/photo-1509391111960-fbb90cea9bea?q=80&w=800&auto=format&fit=crop", title: "Solar Energy Plant", category: "industrial" },
  { id: 20, type: "image", src: "https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?q=80&w=800&auto=format&fit=crop", title: "Office Building Solar", category: "commercial" },
  { id: 21, type: "image", src: "https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=800&auto=format&fit=crop", title: "Solar Installation Work", category: "installation" },
  { id: 22, type: "image", src: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?q=80&w=800&auto=format&fit=crop", title: "Villa Solar System", category: "residential" },
  { id: 23, type: "image", src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?q=80&w=800&auto=format&fit=crop", title: "Ground Mount Solar", category: "commercial" },
  { id: 24, type: "image", src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop", title: "Solar Power Generation", category: "industrial" },
]

export function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "residential" | "commercial" | "industrial" | "installation">("all")
  const [showAll, setShowAll] = useState(false)

  const filteredItems =
    selectedFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedFilter)
  
  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 12)

  const categories = [
    { key: "all", label: "All Projects" },
    { key: "residential", label: "Residential" },
    { key: "commercial", label: "Commercial" },
    { key: "industrial", label: "Industrial" },
    { key: "installation", label: "Installation" },
  ]

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-orange-500 font-mono uppercase tracking-wider mb-4">Our Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Solar Installation Gallery</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            Explore our completed solar projects - from residential rooftops to large industrial power plants across Vadodara
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedFilter(cat.key as typeof selectedFilter)}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-colors ${
                selectedFilter === cat.key
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-orange-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-yellow-400 text-xs font-mono uppercase">{item.category}</span>
                  <h3 className="text-white font-bold text-sm md:text-lg">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredItems.length > 12 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-mono transition-colors"
            >
              {showAll ? "Show Less" : `View All ${filteredItems.length} Photos`}
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-mono mb-6 text-lg">
            Want to power your property with solar? Contact us today for a free site assessment
          </p>
          <a
            href="#contact"
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-mono transition-colors inline-block"
          >
            Get Free Solar Quote
          </a>
        </div>
      </div>
    </section>
  )
}
