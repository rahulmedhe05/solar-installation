import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-bapod-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation Bapod, Vadodara | ₹45,000 Only`,
  description: `⚡ Affordable solar for Bapod homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Bapod families trust us. Free survey!`,
  keywords: [
    "solar installation in Bapod",
    "solar panel installation Bapod Vadodara",
    "best solar company Bapod",
    "rooftop solar Bapod Vadodara",
    "solar system Bapod",
    "residential solar Bapod",
    "commercial solar Bapod Vadodara",
    "solar subsidy Bapod",
  ],
  openGraph: {
    title: "Best Solar Installation Bapod, Vadodara | ₹45,000 Only",
    description: "⚡ Affordable solar for Bapod homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Bapod families trust us. Free survey!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInBapodVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
