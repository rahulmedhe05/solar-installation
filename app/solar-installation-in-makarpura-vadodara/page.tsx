import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-makarpura-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Commercial Solar Installation Makarpura, Vadodara | Industrial Power`,
  description: `🏭 Industrial & commercial solar in Makarpura, Vadodara! 50kW-500kW systems for factories. 80% depreciation benefit, quick ROI. EPC solutions, net metering. Get industrial quote!`,
  keywords: [
    "solar installation in Makarpura",
    "solar panel installation Makarpura Vadodara",
    "best solar company Makarpura",
    "rooftop solar Makarpura Vadodara",
    "solar system Makarpura",
    "industrial solar Makarpura",
    "commercial solar Makarpura Vadodara",
    "factory solar Makarpura",
  ],
  openGraph: {
    title: "Commercial Solar Installation Makarpura, Vadodara | Industrial Power",
    description: "🏭 Industrial & commercial solar in Makarpura, Vadodara! 50kW-500kW systems for factories. 80% depreciation benefit, quick ROI. EPC solutions, net metering. Get industrial quote!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInMakarpuraVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
