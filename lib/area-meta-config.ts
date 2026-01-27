// Area-specific metadata configuration for attention-grabbing SEO

export interface AreaMetaConfig {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

// Generate attention-grabbing meta for area pages
export function getAreaMeta(areaName: string): AreaMetaConfig {
  // Premium/Posh areas get luxury-focused messaging
  const premiumAreas = ["Alkapuri", "Akota", "Race Course", "Ellora Park", "Fatehgunj", "Sayajigunj", "Gotri"];
  const industrialAreas = ["Makarpura", "Gorwa", "Nandesari", "Manjusar"];
  const residentialAreas = ["Manjalpur", "Karelibaug", "Subhanpura", "Tandalja", "Sama", "Harni", "Chhani", "Tarsali"];
  
  if (premiumAreas.includes(areaName)) {
    return {
      title: `#1 Solar Installation in ${areaName}, Vadodara | ₹78,000 Subsidy`,
      description: `🌞 Premium solar installation in ${areaName}, Vadodara! Join 500+ happy ${areaName} residents. ₹78,000 govt subsidy, 25-year warranty, zero down payment options. Local experts, same-day survey! 📞 Call now!`,
      ogTitle: `Best Solar Installation in ${areaName}, Vadodara`,
      ogDescription: `Premium solar installation services in ${areaName}. 5000+ installations, govt subsidy, 25-year warranty.`,
    };
  }
  
  if (industrialAreas.includes(areaName)) {
    return {
      title: `Commercial Solar Installation ${areaName}, Vadodara | Industrial Power`,
      description: `🏭 Industrial & commercial solar in ${areaName}, Vadodara! 50kW-500kW systems for factories. 80% depreciation benefit, quick ROI. EPC solutions, net metering. Get industrial quote!`,
      ogTitle: `Industrial Solar Installation in ${areaName}, Vadodara`,
      ogDescription: `Commercial & industrial solar solutions in ${areaName}. EPC projects, net metering, quick payback.`,
    };
  }
  
  if (residentialAreas.includes(areaName)) {
    return {
      title: `Best Solar Installation ${areaName}, Vadodara | ₹45,000 Only`,
      description: `⚡ Affordable solar for ${areaName} homes! Starting ₹45,000 (1kW). 90% bill reduction, ₹78,000 subsidy, 25-year warranty. 1000+ ${areaName} families trust us. Free survey!`,
      ogTitle: `Affordable Solar Installation in ${areaName}, Vadodara`,
      ogDescription: `Residential solar in ${areaName}, Vadodara. ₹78,000 subsidy, 90% bill savings, 25-year warranty.`,
    };
  }
  
  // Default for other areas
  return {
    title: `Solar Installation in ${areaName}, Vadodara | ₹78,000 Subsidy 2026`,
    description: `🌞 Professional solar installation in ${areaName}, Vadodara! ₹78,000 PM Surya Ghar subsidy. 90% bill savings, 25-year warranty, net metering included. Trusted by ${areaName} residents. Call for free survey!`,
    ogTitle: `Solar Installation in ${areaName}, Vadodara`,
    ogDescription: `Expert solar installation in ${areaName}. Government subsidy, 25-year warranty, professional team.`,
  };
}

// Area-specific keywords for better SEO
export function getAreaKeywords(areaName: string): string[] {
  return [
    `solar installation in ${areaName}`,
    `solar panel ${areaName} Vadodara`,
    `best solar company ${areaName}`,
    `rooftop solar ${areaName}`,
    `solar system ${areaName} Vadodara`,
    `residential solar ${areaName}`,
    `commercial solar ${areaName}`,
    `solar subsidy ${areaName}`,
    `solar price ${areaName} Vadodara`,
    `${areaName} solar installation`,
  ];
}
