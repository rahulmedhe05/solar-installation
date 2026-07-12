import { getBusinessBySlug } from "@/lib/business-config";
import { getKeywordContent } from "@/lib/content-generator";
import { getKeywordBySlug } from "@/lib/keywords-config";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { Metadata } from "next";

const keyword = getKeywordBySlug("15kw-solar-system-vadodara")!;
const business = getBusinessBySlug("solar-installation")!;

export const metadata: Metadata = {
  alternates: {
    canonical: "https://solarinstallationvadodara.in/15kw-solar-system-vadodara",
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

export default function FifteenKwSolarSystemVadodaraPage() {
  const content = getKeywordContent(keyword);
  return <KeywordPageTemplate business={business} keyword={keyword} content={content} />;
}
