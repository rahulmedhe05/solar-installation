import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-karelibaug-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation Karelibaug, Vadodara | ₹45,000 Only`,
  description: `⚡ Affordable solar for Karelibaug homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Karelibaug families trust us. Free survey!`,
  keywords: [
    "solar installation in Karelibaug",
    "solar panel installation Karelibaug Vadodara",
    "best solar company Karelibaug",
    "rooftop solar Karelibaug Vadodara",
    "solar system Karelibaug",
    "residential solar Karelibaug",
    "commercial solar Karelibaug Vadodara",
    "solar subsidy Karelibaug",
  ],
  openGraph: {
    title: "Best Solar Installation Karelibaug, Vadodara | ₹45,000 Only",
    description: "⚡ Affordable solar for Karelibaug homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ Karelibaug families trust us. Free survey!",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInKarelibaugVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
