import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-karjan-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation in Karjan, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Karjan, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Karjan",
    "solar panel installation Karjan Vadodara",
    "best solar company Karjan",
    "rooftop solar Karjan Vadodara",
    "solar system Karjan",
    "residential solar Karjan",
    "commercial solar Karjan Vadodara",
    "solar subsidy Karjan",
  ],
  openGraph: {
    title: "Best Solar Installation in Karjan, Vadodara",
    description: "Professional solar installation services in Karjan, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInKarjanVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
