import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-manjusar-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-manjusar-vadodara",
  },
  title: `Best Solar Installation in Manjusar, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Manjusar, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Manjusar",
    "solar panel installation Manjusar Vadodara",
    "best solar company Manjusar",
    "rooftop solar Manjusar Vadodara",
    "solar system Manjusar",
    "residential solar Manjusar",
    "commercial solar Manjusar Vadodara",
    "solar subsidy Manjusar",
  ],
  openGraph: {
    title: "Best Solar Installation in Manjusar, Vadodara",
    description: "Professional solar installation services in Manjusar, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInManjusarVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
