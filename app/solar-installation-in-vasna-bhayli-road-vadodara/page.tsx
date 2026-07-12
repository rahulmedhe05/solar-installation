import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-vasna-bhayli-road-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-vasna-bhayli-road-vadodara",
  },
  title: `Best Solar Installation in Vasna-Bhayli Road, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Vasna-Bhayli Road, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Vasna-Bhayli Road",
    "solar panel installation Vasna-Bhayli Road Vadodara",
    "best solar company Vasna-Bhayli Road",
    "rooftop solar Vasna-Bhayli Road Vadodara",
    "solar system Vasna-Bhayli Road",
    "residential solar Vasna-Bhayli Road",
    "commercial solar Vasna-Bhayli Road Vadodara",
    "solar subsidy Vasna-Bhayli Road",
  ],
  openGraph: {
    title: "Best Solar Installation in Vasna-Bhayli Road, Vadodara",
    description: "Professional solar installation services in Vasna-Bhayli Road, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInVasnaBhayliRoadVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
