import { getBusinessBySlug } from "@/lib/business-config";
import { getKeywordBySlug } from "@/lib/keywords-config";
import { getKeywordContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { Metadata } from "next";

const keyword = getKeywordBySlug("solar-panel-installation-services-vadodara")!;
const business = getBusinessBySlug("solar-installation")!;

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/solar-panel-installation-services-vadodara",
  },
  title: `${keyword.title} | Best Solar Company in Vadodara`,
  description: keyword.description,
  keywords: keyword.keywords,
  openGraph: {
    title: keyword.title,
    description: keyword.description,
    type: "website",
    locale: "en_IN",
  },
};

export default function SolarPanelInstallationServicesVadodaraPage() {
  const content = getKeywordContent(keyword);
  return <KeywordPageTemplate business={business} keyword={keyword} content={content} />;
}
