import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-jetalpur-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-jetalpur-vadodara",
  },
  title: `Best Solar Installation in Jetalpur, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Jetalpur, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Jetalpur",
    "solar panel installation Jetalpur Vadodara",
    "best solar company Jetalpur",
    "rooftop solar Jetalpur Vadodara",
    "solar system Jetalpur",
    "residential solar Jetalpur",
    "commercial solar Jetalpur Vadodara",
    "solar subsidy Jetalpur",
  ],
  openGraph: {
    title: "Best Solar Installation in Jetalpur, Vadodara",
    description: "Professional solar installation services in Jetalpur, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInJetalpurVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
