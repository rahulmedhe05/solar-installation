import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-akota-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `#1 Solar Installation in Akota, Vadodara | ₹78,000 Subsidy`,
  description: `🌞 Premium solar installation in Akota, Vadodara! Join 500+ happy Akota residents. ₹78,000 govt subsidy, 25-year warranty, zero down payment. Local experts, same-day survey! 📞 Call now!`,
  keywords: [
    "solar installation in Akota",
    "solar panel Akota Vadodara",
    "best solar company Akota",
    "rooftop solar Akota",
    "solar system Akota Vadodara",
    "residential solar Akota",
    "commercial solar Akota",
    "solar subsidy Akota",
    "solar price Akota Vadodara",
    "Akota solar installation",
  ],
  openGraph: {
    title: "Best Solar Installation in Akota, Vadodara",
    description: "Premium solar installation services in Akota. 5000+ installations, govt subsidy, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInAkotaVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
