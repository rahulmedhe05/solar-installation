import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-kalali-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-kalali-vadodara",
  },
  title: `Best Solar Installation in Kalali, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Kalali, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Kalali",
    "solar panel installation Kalali Vadodara",
    "best solar company Kalali",
    "rooftop solar Kalali Vadodara",
    "solar system Kalali",
    "residential solar Kalali",
    "commercial solar Kalali Vadodara",
    "solar subsidy Kalali",
  ],
  openGraph: {
    title: "Best Solar Installation in Kalali, Vadodara",
    description: "Professional solar installation services in Kalali, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInKalaliVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
