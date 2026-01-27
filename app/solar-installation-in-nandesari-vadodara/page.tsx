import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-nandesari-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation in Nandesari, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Nandesari, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Nandesari",
    "solar panel installation Nandesari Vadodara",
    "best solar company Nandesari",
    "rooftop solar Nandesari Vadodara",
    "solar system Nandesari",
    "residential solar Nandesari",
    "commercial solar Nandesari Vadodara",
    "solar subsidy Nandesari",
  ],
  openGraph: {
    title: "Best Solar Installation in Nandesari, Vadodara",
    description: "Professional solar installation services in Nandesari, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInNandesariVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
