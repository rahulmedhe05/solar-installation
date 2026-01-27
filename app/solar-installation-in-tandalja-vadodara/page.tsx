import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-tandalja-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation Tandalja, Vadodara | ₹45,000 Only`,
  description: `⚡ Affordable solar for Tandalja homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Tandalja families trust us. Free survey!`,
  keywords: [
    "solar installation in Tandalja",
    "solar panel installation Tandalja Vadodara",
    "best solar company Tandalja",
    "rooftop solar Tandalja Vadodara",
    "solar system Tandalja",
    "residential solar Tandalja",
    "commercial solar Tandalja Vadodara",
    "solar subsidy Tandalja",
  ],
  openGraph: {
    title: "Best Solar Installation Tandalja, Vadodara | ₹45,000 Only",
    description: "⚡ Affordable solar for Tandalja homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Tandalja families trust us. Free survey!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInTandaljaVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
