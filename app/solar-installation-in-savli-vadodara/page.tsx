import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-savli-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-savli-vadodara",
  },
  title: `Best Solar Installation in Savli, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Savli, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Savli",
    "solar panel installation Savli Vadodara",
    "best solar company Savli",
    "rooftop solar Savli Vadodara",
    "solar system Savli",
    "residential solar Savli",
    "commercial solar Savli Vadodara",
    "solar subsidy Savli",
  ],
  openGraph: {
    title: "Best Solar Installation in Savli, Vadodara",
    description: "Professional solar installation services in Savli, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInSavliVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
