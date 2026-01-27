import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-gotri-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation in Gotri, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Gotri, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Gotri",
    "solar panel installation Gotri Vadodara",
    "best solar company Gotri",
    "rooftop solar Gotri Vadodara",
    "solar system Gotri",
    "residential solar Gotri",
    "commercial solar Gotri Vadodara",
    "solar subsidy Gotri",
  ],
  openGraph: {
    title: "Best Solar Installation in Gotri, Vadodara",
    description: "Professional solar installation services in Gotri, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInGotriVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
