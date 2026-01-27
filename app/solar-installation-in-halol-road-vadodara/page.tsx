import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-halol-road-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation in Halol Road, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Halol Road, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Halol Road",
    "solar panel installation Halol Road Vadodara",
    "best solar company Halol Road",
    "rooftop solar Halol Road Vadodara",
    "solar system Halol Road",
    "residential solar Halol Road",
    "commercial solar Halol Road Vadodara",
    "solar subsidy Halol Road",
  ],
  openGraph: {
    title: "Best Solar Installation in Halol Road, Vadodara",
    description: "Professional solar installation services in Halol Road, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInHalolRoadVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
