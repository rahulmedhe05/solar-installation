import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-old-padra-road-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-old-padra-road-vadodara",
  },
  title: `Best Solar Installation in Old Padra Road, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Old Padra Road, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Old Padra Road",
    "solar panel installation Old Padra Road Vadodara",
    "best solar company Old Padra Road",
    "rooftop solar Old Padra Road Vadodara",
    "solar system Old Padra Road",
    "residential solar Old Padra Road",
    "commercial solar Old Padra Road Vadodara",
    "solar subsidy Old Padra Road",
  ],
  openGraph: {
    title: "Best Solar Installation in Old Padra Road, Vadodara",
    description: "Professional solar installation services in Old Padra Road, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInOldPadraRoadVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
