import { getBusinessBySlug } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const business = getBusinessBySlug("solar-installation")!;
const content = getBusinessContent("solar-installation", "solar-installation-in-vadodara");

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in",
  },
  title: `#1 Solar Panel Installation in Vadodara | ₹78,000 Subsidy | SolarVadodara`,
  description: `🌞 Transform your rooftop into a powerhouse! Vadodara's most trusted solar company with 5000+ installations. Get ₹78,000 PM Surya Ghar subsidy, 25-year warranty & ZERO electricity bills. MNRE approved. Free site survey! ☎️ +91-9033451995`,
  keywords: [
    "solar installation vadodara",
    "best solar company vadodara",
    "solar panel vadodara price",
    "rooftop solar vadodara",
    "pm surya ghar vadodara",
    "solar subsidy vadodara",
    "1kw solar system price vadodara",
    "3kw solar system vadodara",
    "5kw solar panel vadodara",
    "on grid solar vadodara",
    "net metering vadodara",
    "UGVCL solar",
    "waaree solar vadodara",
    "tata solar vadodara",
    "residential solar vadodara",
    "commercial solar vadodara",
  ],
  openGraph: {
    title: "🌞 Vadodara's #1 Solar Installation Company | ₹78,000 Govt Subsidy",
    description: "5000+ happy customers | 25-year warranty | MNRE & GEDA approved | Zero electricity bills possible. Transform your rooftop today!",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Best Solar Installation Company in Vadodara - SolarInstallationVadodara.in",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🌞 #1 Solar Installation Vadodara | ₹78,000 Subsidy",
    description: "5000+ installations ✅ 25-year warranty ✅ MNRE approved ✅ Zero bills possible. Free survey!",
  },
};

export default function HomePage() {
  return <BusinessPageTemplate business={business} area="solar-installation-in-vadodara" content={content} />;
}
