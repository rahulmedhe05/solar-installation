import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-ellora-park-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `#1 Solar Installation in Ellora Park, Vadodara | ₹78,000 Subsidy`,
  description: `🌞 Premium solar installation in Ellora Park, Vadodara! Join 500+ happy Ellora Park residents. ₹78,000 govt subsidy, 25-year warranty, zero down payment. Local experts, same-day survey! 📞 Call now!`,
  keywords: [
    "solar installation in Ellora Park",
    "solar panel installation Ellora Park Vadodara",
    "best solar company Ellora Park",
    "rooftop solar Ellora Park Vadodara",
    "solar system Ellora Park",
    "residential solar Ellora Park",
    "commercial solar Ellora Park Vadodara",
    "solar subsidy Ellora Park",
  ],
  openGraph: {
    title: "#1 Solar Installation in Ellora Park, Vadodara | ₹78,000 Subsidy",
    description: "🌞 Premium solar installation in Ellora Park, Vadodara! Join 500+ happy Ellora Park residents. ₹78,000 govt subsidy, 25-year warranty, zero down payment. Local experts, same-day survey! 📞 Call now!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInElloraParkVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
