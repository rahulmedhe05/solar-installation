import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-fatehgunj-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `#1 Solar Installation in Fatehgunj, Vadodara | ₹78,000 Subsidy`,
  description: `🌞 Premium solar installation in Fatehgunj, Vadodara! Join 500+ happy Fatehgunj residents. ₹78,000 govt subsidy, 25-year warranty, zero down payment. Local experts, same-day survey! 📞 Call now!`,
  keywords: [
    "solar installation in Fatehgunj",
    "solar panel installation Fatehgunj Vadodara",
    "best solar company Fatehgunj",
    "rooftop solar Fatehgunj Vadodara",
    "solar system Fatehgunj",
    "residential solar Fatehgunj",
    "commercial solar Fatehgunj Vadodara",
    "solar subsidy Fatehgunj",
  ],
  openGraph: {
    title: "#1 Solar Installation in Fatehgunj, Vadodara | ₹78,000 Subsidy",
    description: "🌞 Premium solar installation in Fatehgunj, Vadodara! Join 500+ happy Fatehgunj residents. ₹78,000 govt subsidy, 25-year warranty, zero down payment. Local experts, same-day survey! 📞 Call now!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInFatehgunjVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
