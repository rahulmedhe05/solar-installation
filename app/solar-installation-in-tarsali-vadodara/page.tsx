import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-tarsali-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-tarsali-vadodara",
  },
  title: `Best Solar Installation Tarsali, Vadodara | ₹45,000 Only`,
  description: `⚡ Affordable solar for Tarsali homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Tarsali families trust us. Free survey!`,
  keywords: [
    "solar installation in Tarsali",
    "solar panel installation Tarsali Vadodara",
    "best solar company Tarsali",
    "rooftop solar Tarsali Vadodara",
    "solar system Tarsali",
    "residential solar Tarsali",
    "commercial solar Tarsali Vadodara",
    "solar subsidy Tarsali",
  ],
  openGraph: {
    title: "Best Solar Installation Tarsali, Vadodara | ₹45,000 Only",
    description: "⚡ Affordable solar for Tarsali homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Tarsali families trust us. Free survey!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInTarsaliVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
