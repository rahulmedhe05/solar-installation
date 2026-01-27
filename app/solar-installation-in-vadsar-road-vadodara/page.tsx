import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-vadsar-road-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation in Vadsar Road, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Vadsar Road, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Vadsar Road",
    "solar panel installation Vadsar Road Vadodara",
    "best solar company Vadsar Road",
    "rooftop solar Vadsar Road Vadodara",
    "solar system Vadsar Road",
    "residential solar Vadsar Road",
    "commercial solar Vadsar Road Vadodara",
    "solar subsidy Vadsar Road",
  ],
  openGraph: {
    title: "Best Solar Installation in Vadsar Road, Vadodara",
    description: "Professional solar installation services in Vadsar Road, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInVadsarRoadVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
