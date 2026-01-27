import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-nizampura-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation in Nizampura, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Nizampura, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Nizampura",
    "solar panel installation Nizampura Vadodara",
    "best solar company Nizampura",
    "rooftop solar Nizampura Vadodara",
    "solar system Nizampura",
    "residential solar Nizampura",
    "commercial solar Nizampura Vadodara",
    "solar subsidy Nizampura",
  ],
  openGraph: {
    title: "Best Solar Installation in Nizampura, Vadodara",
    description: "Professional solar installation services in Nizampura, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInNizampuraVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
