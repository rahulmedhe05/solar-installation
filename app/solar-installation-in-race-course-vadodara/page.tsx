import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const area = "solar-installation-in-race-course-vadodara";
const business = getBusinessBySlug("solar-installation")!;
const areaName = getAreaDisplayName(area);

export const metadata: Metadata = {
  title: `Best Solar Installation in Race Course, Vadodara | Top Rated Solar Company`,
  description: `Looking for the best solar installation in Race Course, Vadodara? Get professional solar panel installation services with government subsidies up to ₹78,000. Expert installation, 25-year warranty. Call now!`,
  keywords: [
    "solar installation in Race Course",
    "solar panel installation Race Course Vadodara",
    "best solar company Race Course",
    "rooftop solar Race Course Vadodara",
    "solar system Race Course",
    "residential solar Race Course",
    "commercial solar Race Course Vadodara",
    "solar subsidy Race Course",
  ],
  openGraph: {
    title: "Best Solar Installation in Race Course, Vadodara",
    description: "Professional solar installation services in Race Course, Vadodara. Expert team, government subsidies, 25-year warranty.",
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarInstallationInRaceCourseVadodaraPage() {
  const content = getBusinessContent("solar-installation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} />;
}
