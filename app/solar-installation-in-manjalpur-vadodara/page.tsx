import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-manjalpur-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-manjalpur-vadodara",
  },
  title: `Best Solar Installation Manjalpur, Vadodara | ₹45,000 Only`,
  description: `⚡ Affordable solar for Manjalpur homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Manjalpur families trust us. Free survey!`,
  keywords: [
    "solar installation in Manjalpur",
    "solar panel installation Manjalpur Vadodara",
    "best solar company Manjalpur",
    "rooftop solar Manjalpur Vadodara",
    "solar system Manjalpur",
    "residential solar Manjalpur",
    "commercial solar Manjalpur Vadodara",
    "solar subsidy Manjalpur",
  ],
  openGraph: {
    title: "Best Solar Installation Manjalpur, Vadodara | ₹45,000 Only",
    description: "⚡ Affordable solar for Manjalpur homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Manjalpur families trust us. Free survey!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInManjalpurVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
