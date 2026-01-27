import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-sama-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation Sama, Vadodara | ₹45,000 Only`,
  description: `⚡ Affordable solar for Sama homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Sama families trust us. Free survey!`,
  keywords: [
    "solar installation in Sama",
    "solar panel installation Sama Vadodara",
    "best solar company Sama",
    "rooftop solar Sama Vadodara",
    "solar system Sama",
    "residential solar Sama",
    "commercial solar Sama Vadodara",
    "solar subsidy Sama",
  ],
  openGraph: {
    title: "Best Solar Installation Sama, Vadodara | ₹45,000 Only",
    description: "⚡ Affordable solar for Sama homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Sama families trust us. Free survey!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInSamaVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
