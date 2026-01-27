import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-sindhrot-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation in Sindhrot, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Sindhrot, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Sindhrot",
    "solar panel installation Sindhrot Vadodara",
    "best solar company Sindhrot",
    "rooftop solar Sindhrot Vadodara",
    "solar system Sindhrot",
    "residential solar Sindhrot",
    "commercial solar Sindhrot Vadodara",
    "solar subsidy Sindhrot",
  ],
  openGraph: {
    title: "Best Solar Installation in Sindhrot, Vadodara",
    description: "Professional solar installation services in Sindhrot, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInSindhrotVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
