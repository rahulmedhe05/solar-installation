import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBusinessBySlug } from "@/lib/business-config";
import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { BusinessWhatsAppFloat } from "@/components/business-whatsapp-float";
import { BlogBreadcrumbs } from "@/components/breadcrumbs";
import { ArticleSchema } from "@/components/seo-schemas";
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react";
import { blogPostsMap as blogPosts } from "@/lib/blog-data";

// In-content images for blog posts
const blogImages = {
  solar_panel_installation: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop",
  solar_panels_field: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=500&fit=crop",
  rooftop_solar: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=500&fit=crop",
  solar_farm: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=500&fit=crop",
  solar_closeup: "https://images.unsplash.com/photo-1548098343-8c8b6abe8ebf?w=800&h=500&fit=crop",
  solar_technician: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?w=800&h=500&fit=crop",
  solar_worker: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&h=500&fit=crop",
  solar_array: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&h=500&fit=crop",
  solar_home: "https://images.unsplash.com/photo-1611365892117-00ac6fb5544d?w=800&h=500&fit=crop",
  modern_solar: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&h=500&fit=crop",
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | SolarInstallationVadodara.in Blog`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://solarinstallationvadodara.in/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 600, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];
  const business = getBusinessBySlug("solar-installation")!;

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPostsData = post.relatedPosts
    .map((relatedSlug) => ({ slug: relatedSlug, ...blogPosts[relatedSlug] }))
    .filter((p) => p && p.title);

  return (
    <div className="min-h-screen flex flex-col">
      <BusinessNav currentBusiness={business} currentArea="vadodara" />
      
      {/* Article Schema for SEO */}
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        image={post.image}
        datePublished={post.date}
        author={post.author}
        url={`https://solarinstallationvadodara.in/blog/${slug}`}
      />
      
      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <span className="inline-block px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">
              {post.h1}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-4">
        <BlogBreadcrumbs postTitle={post.title.substring(0, 40) + "..."} />
      </div>

      {/* Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Share buttons */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b">
              <span className="text-gray-500 text-sm">Share:</span>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=https://solarinstallationvadodara.in/blog/${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=https://solarinstallationvadodara.in/blog/${slug}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://solarinstallationvadodara.in/blog/${slug}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Article content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-orange-600 prose-strong:text-gray-900 prose-table:border-collapse prose-th:bg-gray-100 prose-th:p-3 prose-td:p-3 prose-td:border prose-th:border"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />

            {/* In-article image */}
            <div className="my-8">
              <img
                src={blogImages.solar_home}
                alt="Solar installation on home in Vadodara"
                className="w-full h-64 object-cover rounded-xl"
              />
              <p className="text-sm text-gray-500 text-center mt-2">Professional solar installation by SolarInstallationVadodara.in</p>
            </div>

            {/* CTA Box */}
            <div className="mt-12 p-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Go Solar?</h3>
              <p className="opacity-90 mb-6">Get a free site survey and quote for your property in Vadodara</p>
              <a
                href="tel:+919033451995"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Now: +91-9033451995
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPostsData.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPostsData.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-center">
                    <span className="text-xs text-orange-600 font-medium">{relatedPost.category}</span>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{relatedPost.title}</h3>
                    <span className="text-sm text-gray-500 flex items-center gap-1 mt-2">
                      Read More <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Articles
          </Link>
        </div>
      </section>

      <MegaFooter />
      <BusinessWhatsAppFloat business={business} area="vadodara" />
    </div>
  );
}

// Format markdown content to HTML
function formatContent(content: string): string {
  return content
    .replace(/\n/g, '<br/>')
    .replace(/## (.*?)<br\/>/g, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/### (.*?)<br\/>/g, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/✅/g, '<span class="text-green-600">✅</span>')
    .replace(/❌/g, '<span class="text-red-600">❌</span>')
    .replace(/📞/g, '<span>📞</span>')
    .replace(/📧/g, '<span>📧</span>')
    .replace(/⭐/g, '<span class="text-yellow-500">⭐</span>');
}

// Generate static params for known blog posts
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}
