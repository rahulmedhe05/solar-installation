"use client";

import { BusinessConfig, getAreaDisplayName } from "@/lib/business-config";
import { InteriorDesignerForm } from "./forms/interior-designer-form";
import { RealEstateForm } from "./forms/real-estate-form";
import { SolarInstallationForm } from "./forms/solar-installation-form";
import { SkinHairForm } from "./forms/skin-hair-form";
import { LawyerForm } from "./forms/lawyer-form";
import { DentistForm } from "./forms/dentist-form";
import { HomeAutomationForm } from "./forms/home-automation-form";
import { CCTVSecurityForm } from "./forms/cctv-security-form";
import { WeddingPlannerForm } from "./forms/wedding-planner-form";
import { StudyAbroadForm } from "./forms/study-abroad-form";

interface BusinessContactFormProps {
  business: BusinessConfig;
  area: string;
  keyword?: string;
}

export function BusinessContactForm({ business, area, keyword }: BusinessContactFormProps) {
  const areaName = getAreaDisplayName(area);

  // Render the appropriate form based on business slug
  switch (business.slug) {
    case "interior-designers":
      return <InteriorDesignerForm area={areaName} keyword={keyword} />;
    case "real-estate":
      return <RealEstateForm area={areaName} keyword={keyword} />;
    case "solar-installation":
      return <SolarInstallationForm area={areaName} keyword={keyword} />;
    case "skin-hair":
      return <SkinHairForm area={areaName} keyword={keyword} />;
    case "lawyer":
      return <LawyerForm area={areaName} keyword={keyword} />;
    case "dentists":
      return <DentistForm area={areaName} keyword={keyword} />;
    case "home-automation":
      return <HomeAutomationForm area={areaName} keyword={keyword} />;
    case "security-cctv":
      return <CCTVSecurityForm area={areaName} keyword={keyword} />;
    case "wedding-planners":
      return <WeddingPlannerForm area={areaName} keyword={keyword} />;
    case "study-abroad":
      return <StudyAbroadForm area={areaName} keyword={keyword} />;
    default:
      return <InteriorDesignerForm area={areaName} keyword={keyword} />;
  }
}
