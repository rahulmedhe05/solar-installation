import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-padra-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-padra-vadodara",
  },
  title: `Best Solar Installation in Padra, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Padra, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Padra",
    "solar panel installation Padra Vadodara",
    "best solar company Padra",
    "rooftop solar Padra Vadodara",
    "solar system Padra",
    "residential solar Padra",
    "commercial solar Padra Vadodara",
    "solar subsidy Padra",
  ],
  openGraph: {
    title: "Best Solar Installation in Padra, Vadodara",
    description: "Professional solar installation services in Padra, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInPadraVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
