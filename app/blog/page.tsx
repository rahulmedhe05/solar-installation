import { Metadata } from "next";
import Link from "next/link";
import { getBusinessBySlug } from "@/lib/business-config";
import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { BusinessWhatsAppFloat } from "@/components/business-whatsapp-float";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Energy Blog | Tips, Guides & News | SolarVadodara.in",
  description: "Expert solar energy tips, installation guides, government subsidy updates, and industry news for Vadodara. Learn about solar panels, savings, and green energy.",
  keywords: "solar blog, solar tips vadodara, solar guide, solar installation guide, solar subsidy news, pm surya ghar updates",
  openGraph: {
    title: "Solar Energy Blog | SolarVadodara.in",
    description: "Expert solar tips, guides & news for Vadodara homeowners",
    type: "website",
    locale: "en_IN",
  },
};

// Blog posts data
const blogPosts = [
  {
    slug: "pm-surya-ghar-yojana-complete-guide-2026",
    title: "PM Surya Ghar Yojana Complete Guide 2026 - Get ₹78,000 Subsidy",
    excerpt: "Everything you need to know about PM Surya Ghar Muft Bijli Yojana. Learn how to apply, eligibility criteria, subsidy amounts, and step-by-step process for Vadodara residents.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    category: "Government Schemes",
    author: "Solar Expert Team",
    date: "January 25, 2026",
    readTime: "8 min read",
  },
  {
    slug: "how-much-solar-panel-cost-vadodara-2026",
    title: "How Much Do Solar Panels Cost in Vadodara? 2026 Price Guide",
    excerpt: "Complete breakdown of solar panel costs in Vadodara including installation, net metering, and maintenance. Compare 1kW to 10kW system prices with government subsidy benefits.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&h=400&fit=crop",
    category: "Pricing",
    author: "Solar Expert Team",
    date: "January 20, 2026",
    readTime: "10 min read",
  },
  {
    slug: "on-grid-vs-off-grid-vs-hybrid-solar-system",
    title: "On-Grid vs Off-Grid vs Hybrid Solar: Which is Best for You?",
    excerpt: "Detailed comparison of on-grid, off-grid, and hybrid solar systems. Pros, cons, costs, and which system is ideal for your home or business in Vadodara.",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop",
    category: "Solar Guide",
    author: "Solar Expert Team",
    date: "January 15, 2026",
    readTime: "7 min read",
  },
  {
    slug: "best-solar-panel-brands-india-2026",
    title: "Top 10 Best Solar Panel Brands in India 2026 - Expert Review",
    excerpt: "Comprehensive review of best solar panel brands available in Vadodara. Compare Tata, Waaree, Adani, Loom Solar, Vikram Solar and more with prices and warranty details.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&h=400&fit=crop",
    category: "Reviews",
    author: "Solar Expert Team",
    date: "January 10, 2026",
    readTime: "12 min read",
  },
  {
    slug: "solar-panel-maintenance-tips-vadodara",
    title: "Solar Panel Maintenance Tips for Vadodara Climate",
    excerpt: "Essential maintenance tips to keep your solar panels running at peak efficiency in Vadodara's dusty and hot climate. Cleaning schedules, monsoon care, and more.",
    image: "https://images.unsplash.com/photo-1548098343-8c8b6abe8ebf?w=600&h=400&fit=crop",
    category: "Maintenance",
    author: "Solar Expert Team",
    date: "January 5, 2026",
    readTime: "6 min read",
  },
  {
    slug: "how-net-metering-works-ugvcl-vadodara",
    title: "How Net Metering Works with UGVCL in Vadodara - Complete Guide",
    excerpt: "Understand how net metering works with UGVCL. Learn the application process, billing mechanism, and how to maximize your solar savings in Vadodara.",
    image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?w=600&h=400&fit=crop",
    category: "Net Metering",
    author: "Solar Expert Team",
    date: "December 28, 2025",
    readTime: "9 min read",
  },
  {
    slug: "calculate-solar-system-size-home",
    title: "How to Calculate the Right Solar System Size for Your Home",
    excerpt: "Step-by-step guide to calculate the perfect solar system capacity for your home based on electricity consumption, roof space, and budget in Vadodara.",
    image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=600&h=400&fit=crop",
    category: "Solar Guide",
    author: "Solar Expert Team",
    date: "December 20, 2025",
    readTime: "8 min read",
  },
  {
    slug: "solar-battery-lithium-vs-lead-acid",
    title: "Solar Batteries: Lithium-Ion vs Lead Acid - Which to Choose?",
    excerpt: "Compare lithium-ion and lead-acid batteries for solar systems. Cost, lifespan, performance, and which is better for Vadodara's climate and power backup needs.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&h=400&fit=crop",
    category: "Products",
    author: "Solar Expert Team",
    date: "December 15, 2025",
    readTime: "7 min read",
  },
];

const categories = ["All", "Government Schemes", "Pricing", "Solar Guide", "Reviews", "Maintenance", "Net Metering", "Products"];

export default function BlogPage() {
  const business = getBusinessBySlug("solar-installation")!;

  return (
    <div className="min-h-screen flex flex-col">
      <BusinessNav currentBusiness={business} currentArea="vadodara" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-yellow-500 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Solar Energy Blog
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Expert tips, installation guides, government scheme updates, and everything you need to know about solar energy in Vadodara
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-700 hover:bg-orange-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
            <div>
              <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                Featured
              </span>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
              >
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-orange-500 text-sm font-medium hover:text-orange-600 flex items-center gap-1"
                    >
                      Read More
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 bg-gradient-to-r from-orange-600 to-yellow-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Updated on Solar News
          </h2>
          <p className="opacity-90 mb-6 max-w-xl mx-auto">
            Get the latest solar tips, government subsidy updates, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-full text-gray-900 flex-1"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <MegaFooter />
      <BusinessWhatsAppFloat business={business} area="vadodara" />
    </div>
  );
}
