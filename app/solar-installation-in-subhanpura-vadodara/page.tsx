import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-subhanpura-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation Subhanpura, Vadodara | ₹45,000 Only`,
  description: `⚡ Affordable solar for Subhanpura homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Subhanpura families trust us. Free survey!`,
  keywords: [
    "solar installation in Subhanpura",
    "solar panel installation Subhanpura Vadodara",
    "best solar company Subhanpura",
    "rooftop solar Subhanpura Vadodara",
    "solar system Subhanpura",
    "residential solar Subhanpura",
    "commercial solar Subhanpura Vadodara",
    "solar subsidy Subhanpura",
  ],
  openGraph: {
    title: "Best Solar Installation Subhanpura, Vadodara | ₹45,000 Only",
    description: "⚡ Affordable solar for Subhanpura homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Subhanpura families trust us. Free survey!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInSubhanpuraVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
