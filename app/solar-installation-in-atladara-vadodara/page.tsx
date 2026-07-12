import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-atladara-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-atladara-vadodara",
  },
  title: `Best Solar Installation Atladara, Vadodara | ₹45,000 Only`,
  description: `⚡ Affordable solar for Atladara homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Atladara families trust us. Free survey!`,
  keywords: [
    "solar installation in Atladara",
    "solar panel installation Atladara Vadodara",
    "best solar company Atladara",
    "rooftop solar Atladara Vadodara",
    "solar system Atladara",
    "residential solar Atladara",
    "commercial solar Atladara Vadodara",
    "solar subsidy Atladara",
  ],
  openGraph: {
    title: "Best Solar Installation Atladara, Vadodara | ₹45,000 Only",
    description: "⚡ Affordable solar for Atladara homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Atladara families trust us. Free survey!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInAtladaraVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
