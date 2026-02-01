import { MetadataRoute } from 'next';
import { vadodaraAreas } from '@/lib/business-config';
import { solarKeywords } from '@/lib/keywords-config';

const baseUrl = 'https://solarinstallationvadodara.in';

// Blog posts slugs
const blogSlugs = [
  'pm-surya-ghar-yojana-complete-guide-2026',
  'how-much-solar-panel-cost-vadodara-2026',
  'on-grid-vs-off-grid-vs-hybrid-solar-system',
  'best-solar-panel-brands-india-2026',
  'solar-panel-maintenance-tips-vadodara',
  'how-net-metering-works-ugvcl-vadodara',
  'calculate-solar-system-size-home',
  'solar-battery-lithium-vs-lead-acid',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Homepage - Highest priority
  const homepage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // Area pages (40 pages) - High priority local SEO pages
  const areaPages: MetadataRoute.Sitemap = vadodaraAreas.map((area) => ({
    url: `${baseUrl}/${area}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Keyword/Service pages (67 pages) - High priority service pages
  const keywordPages: MetadataRoute.Sitemap = solarKeywords.map((keyword) => ({
    url: `${baseUrl}/${keyword.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Blog index page
  const blogIndexPage: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ];

  // Individual blog posts - Content marketing pages
  const blogPostPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Combine all pages
  return [
    ...homepage,
    ...areaPages,
    ...keywordPages,
    ...blogIndexPage,
    ...blogPostPages,
  ];
}
