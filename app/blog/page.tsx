import { Metadata } from "next";
import Link from "next/link";
import { getBusinessBySlug } from "@/lib/business-config";
import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { BusinessWhatsAppFloat } from "@/components/business-whatsapp-float";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/blog",
  },
  title: "Solar Energy Blog | Tips, Guides & News | SolarInstallationVadodara.in",
  description: "Expert solar energy tips, installation guides, government subsidy updates, and industry news for Vadodara. Learn about solar panels, savings, and green energy.",
  keywords: "solar blog, solar tips vadodara, solar guide, solar installation guide, solar subsidy news, pm surya ghar updates",
  openGraph: {
    title: "Solar Energy Blog | SolarInstallationVadodara.in",
    description: "Expert solar tips, guides & news for Vadodara homeowners",
    type: "website",
    locale: "en_IN",
  },
};

import { blogPostsList as blogPosts } from "@/lib/blog-data";

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
