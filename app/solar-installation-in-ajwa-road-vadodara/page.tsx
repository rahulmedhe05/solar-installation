import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-ajwa-road-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation Ajwa Road, Vadodara | ₹45,000 Only`,
  description: `⚡ Affordable solar for Ajwa Road homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Ajwa Road families trust us. Free survey!`,
  keywords: [
    "solar installation in Ajwa Road",
    "solar panel installation Ajwa Road Vadodara",
    "best solar company Ajwa Road",
    "rooftop solar Ajwa Road Vadodara",
    "solar system Ajwa Road",
    "residential solar Ajwa Road",
    "commercial solar Ajwa Road Vadodara",
    "solar subsidy Ajwa Road",
  ],
  openGraph: {
    title: "Best Solar Installation Ajwa Road, Vadodara | ₹45,000 Only",
    description: "⚡ Affordable solar for Ajwa Road homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Ajwa Road families trust us. Free survey!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInAjwaRoadVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
