import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-sayajigunj-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-sayajigunj-vadodara",
  },
  title: `Best Solar Installation in Sayajigunj, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Sayajigunj, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Sayajigunj",
    "solar panel installation Sayajigunj Vadodara",
    "best solar company Sayajigunj",
    "rooftop solar Sayajigunj Vadodara",
    "solar system Sayajigunj",
    "residential solar Sayajigunj",
    "commercial solar Sayajigunj Vadodara",
    "solar subsidy Sayajigunj",
  ],
  openGraph: {
    title: "Best Solar Installation in Sayajigunj, Vadodara",
    description: "Professional solar installation services in Sayajigunj, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInSayajigunjVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
