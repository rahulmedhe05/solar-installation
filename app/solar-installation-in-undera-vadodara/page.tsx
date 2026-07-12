import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-undera-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-undera-vadodara",
  },
  title: `Best Solar Installation in Undera, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Undera, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Undera",
    "solar panel installation Undera Vadodara",
    "best solar company Undera",
    "rooftop solar Undera Vadodara",
    "solar system Undera",
    "residential solar Undera",
    "commercial solar Undera Vadodara",
    "solar subsidy Undera",
  ],
  openGraph: {
    title: "Best Solar Installation in Undera, Vadodara",
    description: "Professional solar installation services in Undera, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInUnderaVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
