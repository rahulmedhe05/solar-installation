import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-chhani-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-installation-in-chhani-vadodara",
  },
  title: `Best Solar Installation Chhani, Vadodara | ₹45,000 Only`,
  description: `⚡ Affordable solar for Chhani homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Chhani families trust us. Free survey!`,
  keywords: [
    "solar installation in Chhani",
    "solar panel installation Chhani Vadodara",
    "best solar company Chhani",
    "rooftop solar Chhani Vadodara",
    "solar system Chhani",
    "residential solar Chhani",
    "commercial solar Chhani Vadodara",
    "solar subsidy Chhani",
  ],
  openGraph: {
    title: "Best Solar Installation Chhani, Vadodara | ₹45,000 Only",
    description: "⚡ Affordable solar for Chhani homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Chhani families trust us. Free survey!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInChhaniVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
