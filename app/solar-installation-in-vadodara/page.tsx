import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation in Vadodara | #1 Solar Company | Top Rated Services`,
  description: `Looking for the best solar installation in Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. GUVNL empaneled installer with 2000+ installations. Call now for free consultation!`,
  keywords: [
    "solar installation in Vadodara",
    "solar panel installation Vadodara",
    "best solar company Vadodara",
    "rooftop solar Vadodara",
    "solar system Vadodara",
    "solar plant installation Vadodara",
    "residential solar Vadodara",
    "commercial solar Vadodara",
    "solar subsidy Vadodara",
    "GUVNL solar installer",
  ],
  openGraph: {
    title: "Best Solar Installation in Vadodara | #1 Solar Company",
    description: "Professional solar installation services in Vadodara. Expert team, government subsidies, 25-year warranty. Free consultation.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
