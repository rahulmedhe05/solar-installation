import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-bil-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation Bil, Vadodara | ₹45,000 Only`,
  description: `⚡ Affordable solar for Bil homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Bil families trust us. Free survey!`,
  keywords: [
    "solar installation in Bil",
    "solar panel installation Bil Vadodara",
    "best solar company Bil",
    "rooftop solar Bil Vadodara",
    "solar system Bil",
    "residential solar Bil",
    "commercial solar Bil Vadodara",
    "solar subsidy Bil",
  ],
  openGraph: {
    title: "Best Solar Installation Bil, Vadodara | ₹45,000 Only",
    description: "⚡ Affordable solar for Bil homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Bil families trust us. Free survey!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInBilVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
