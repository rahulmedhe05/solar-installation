import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-harni-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-harni-vadodara",
  },
  title: `Best Solar Installation Harni, Vadodara | ₹45,000 Only`,
  description: `⚡ Affordable solar for Harni homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Harni families trust us. Free survey!`,
  keywords: [
    "solar installation in Harni",
    "solar panel installation Harni Vadodara",
    "best solar company Harni",
    "rooftop solar Harni Vadodara",
    "solar system Harni",
    "residential solar Harni",
    "commercial solar Harni Vadodara",
    "solar subsidy Harni",
  ],
  openGraph: {
    title: "Best Solar Installation Harni, Vadodara | ₹45,000 Only",
    description: "⚡ Affordable solar for Harni homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Harni families trust us. Free survey!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInHarniVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
