import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-refinery-road-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-refinery-road-vadodara",
  },
  title: `Best Solar Installation in Refinery Road, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Refinery Road, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Refinery Road",
    "solar panel installation Refinery Road Vadodara",
    "best solar company Refinery Road",
    "rooftop solar Refinery Road Vadodara",
    "solar system Refinery Road",
    "residential solar Refinery Road",
    "commercial solar Refinery Road Vadodara",
    "solar subsidy Refinery Road",
  ],
  openGraph: {
    title: "Best Solar Installation in Refinery Road, Vadodara",
    description: "Professional solar installation services in Refinery Road, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInRefineryRoadVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
