import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-gorwa-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Commercial Solar Installation Gorwa, Vadodara | Industrial Power`,
  description: `🏭 Industrial & commercial solar in Gorwa, Vadodara! 50kW-500kW systems for factories. 80% depreciation benefit, quick ROI. EPC solutions, net metering. Get industrial quote!`,
  keywords: [
    "solar installation in Gorwa",
    "solar panel installation Gorwa Vadodara",
    "best solar company Gorwa",
    "rooftop solar Gorwa Vadodara",
    "solar system Gorwa",
    "residential solar Gorwa",
    "commercial solar Gorwa Vadodara",
    "solar subsidy Gorwa",
  ],
  openGraph: {
    title: "Commercial Solar Installation Gorwa, Vadodara | Industrial Power",
    description: "🏭 Industrial & commercial solar in Gorwa, Vadodara! 50kW-500kW systems for factories. 80% depreciation benefit, quick ROI. EPC solutions, net metering. Get industrial quote!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInGorwaVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
