import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-dabhoi-road-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-dabhoi-road-vadodara",
  },
  title: `Best Solar Installation Dabhoi Road, Vadodara | ₹45,000 Only`,
  description: `⚡ Affordable solar for Dabhoi Road homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Dabhoi Road families trust us. Free survey!`,
  keywords: [
    "solar installation in Dabhoi Road",
    "solar panel installation Dabhoi Road Vadodara",
    "best solar company Dabhoi Road",
    "rooftop solar Dabhoi Road Vadodara",
    "solar system Dabhoi Road",
    "residential solar Dabhoi Road",
    "commercial solar Dabhoi Road Vadodara",
    "solar subsidy Dabhoi Road",
  ],
  openGraph: {
    title: "Best Solar Installation Dabhoi Road, Vadodara | ₹45,000 Only",
    description: "⚡ Affordable solar for Dabhoi Road homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Dabhoi Road families trust us. Free survey!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInDabhoiRoadVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
