import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-waghodia-road-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-waghodia-road-vadodara",
  },
  title: `Best Solar Installation in Waghodia Road, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Waghodia Road, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Waghodia Road",
    "solar panel installation Waghodia Road Vadodara",
    "best solar company Waghodia Road",
    "rooftop solar Waghodia Road Vadodara",
    "solar system Waghodia Road",
    "residential solar Waghodia Road",
    "commercial solar Waghodia Road Vadodara",
    "solar subsidy Waghodia Road",
  ],
  openGraph: {
    title: "Best Solar Installation in Waghodia Road, Vadodara",
    description: "Professional solar installation services in Waghodia Road, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInWaghodiaRoadVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
