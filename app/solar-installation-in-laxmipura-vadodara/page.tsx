import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-laxmipura-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-laxmipura-vadodara",
  },
  title: `Best Solar Installation in Laxmipura, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Laxmipura, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Laxmipura",
    "solar panel installation Laxmipura Vadodara",
    "best solar company Laxmipura",
    "rooftop solar Laxmipura Vadodara",
    "solar system Laxmipura",
    "residential solar Laxmipura",
    "commercial solar Laxmipura Vadodara",
    "solar subsidy Laxmipura",
  ],
  openGraph: {
    title: "Best Solar Installation in Laxmipura, Vadodara",
    description: "Professional solar installation services in Laxmipura, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInLaxmipuraVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
