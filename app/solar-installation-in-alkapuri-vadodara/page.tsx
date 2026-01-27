import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-alkapuri-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `#1 Solar Installation in Alkapuri, Vadodara | ₹78,000 Subsidy`,
  description: `🌞 Premium solar installation in Alkapuri, Vadodara! Join 500+ happy Alkapuri residents. ₹78,000 govt subsidy, 25-year warranty, zero down payment options. Local experts, same-day survey! 📞 Call now!`,
  keywords: [
    "solar installation in Alkapuri",
    "solar panel Alkapuri Vadodara",
    "best solar company Alkapuri",
    "rooftop solar Alkapuri",
    "solar system Alkapuri Vadodara",
    "residential solar Alkapuri",
    "commercial solar Alkapuri",
    "solar subsidy Alkapuri",
    "solar price Alkapuri Vadodara",
    "Alkapuri solar installation",
  ],
  openGraph: {
    title: "Best Solar Installation in Alkapuri, Vadodara",
    description: "Premium solar installation services in Alkapuri. 5000+ installations, govt subsidy, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInAlkapuriVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
