// Business Configuration with unique colors and details for each vertical

export interface BusinessConfig {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  icon: string;
  services: string[];
  areas: string[];
}

// Common areas for all businesses - 40 areas total (Vadodara main + 39 localities)
export const vadodaraAreas = [
  "solar-installation-in-vadodara",
  "solar-installation-in-alkapuri-vadodara",
  "solar-installation-in-akota-vadodara",
  "solar-installation-in-old-padra-road-vadodara",
  "solar-installation-in-gotri-vadodara",
  "solar-installation-in-vasna-bhayli-road-vadodara",
  "solar-installation-in-manjalpur-vadodara",
  "solar-installation-in-sama-vadodara",
  "solar-installation-in-karelibaug-vadodara",
  "solar-installation-in-waghodia-road-vadodara",
  "solar-installation-in-chhani-vadodara",
  "solar-installation-in-harni-vadodara",
  "solar-installation-in-kalali-vadodara",
  "solar-installation-in-atladara-vadodara",
  "solar-installation-in-vadsar-road-vadodara",
  "solar-installation-in-tarsali-vadodara",
  "solar-installation-in-sayajigunj-vadodara",
  "solar-installation-in-subhanpura-vadodara",
  "solar-installation-in-tandalja-vadodara",
  "solar-installation-in-makarpura-vadodara",
  "solar-installation-in-fatehgunj-vadodara",
  "solar-installation-in-race-course-vadodara",
  "solar-installation-in-ellora-park-vadodara",
  "solar-installation-in-nizampura-vadodara",
  "solar-installation-in-gorwa-vadodara",
  "solar-installation-in-ajwa-road-vadodara",
  "solar-installation-in-bil-vadodara",
  "solar-installation-in-dabhoi-road-vadodara",
  "solar-installation-in-manjusar-vadodara",
  "solar-installation-in-nandesari-vadodara",
  "solar-installation-in-padra-vadodara",
  "solar-installation-in-karjan-vadodara",
  "solar-installation-in-savli-vadodara",
  "solar-installation-in-sindhrot-vadodara",
  "solar-installation-in-bapod-vadodara",
  "solar-installation-in-undera-vadodara",
  "solar-installation-in-jetalpur-vadodara",
  "solar-installation-in-halol-road-vadodara",
  "solar-installation-in-laxmipura-vadodara",
  "solar-installation-in-refinery-road-vadodara",
];

export const businesses: BusinessConfig[] = [
  {
    id: "solar-installation",
    name: "Solar Installation",
    slug: "solar-installation",
    tagline: "Harness the Power of Sun with Solar Energy",
    description: "Professional solar installation services in Vadodara",
    colors: {
      primary: "#F59E0B", // Solar Orange
      secondary: "#FCD34D", // Yellow
      accent: "#92400E", // Dark Orange
      gradient: "from-orange-500 to-yellow-500",
    },
    icon: "☀️",
    services: [
      "Residential Solar Installation",
      "Commercial Solar Installation",
      "Industrial Solar Solutions",
      "Solar Panel Installation",
      "Solar Water Heater",
      "Solar Inverter Installation",
      "Net Metering Setup",
      "Solar Maintenance",
      "Solar Subsidy Assistance",
      "Rooftop Solar Systems",
    ],
    areas: vadodaraAreas,
  },
];

export const getBusinessBySlug = (slug: string): BusinessConfig | undefined => {
  return businesses.find((b) => b.slug === slug);
};

export const getAreaDisplayName = (area: string): string => {
  const areaNames: Record<string, string> = {
    "solar-installation-in-vadodara": "Vadodara",
    "solar-installation-in-alkapuri-vadodara": "Alkapuri",
    "solar-installation-in-akota-vadodara": "Akota",
    "solar-installation-in-old-padra-road-vadodara": "Old Padra Road",
    "solar-installation-in-gotri-vadodara": "Gotri",
    "solar-installation-in-vasna-bhayli-road-vadodara": "Vasna-Bhayli Road",
    "solar-installation-in-manjalpur-vadodara": "Manjalpur",
    "solar-installation-in-sama-vadodara": "Sama",
    "solar-installation-in-karelibaug-vadodara": "Karelibaug",
    "solar-installation-in-waghodia-road-vadodara": "Waghodia Road",
    "solar-installation-in-chhani-vadodara": "Chhani",
    "solar-installation-in-harni-vadodara": "Harni",
    "solar-installation-in-kalali-vadodara": "Kalali",
    "solar-installation-in-atladara-vadodara": "Atladara",
    "solar-installation-in-vadsar-road-vadodara": "Vadsar Road",
    "solar-installation-in-tarsali-vadodara": "Tarsali",
    "solar-installation-in-sayajigunj-vadodara": "Sayajigunj",
    "solar-installation-in-subhanpura-vadodara": "Subhanpura",
    "solar-installation-in-tandalja-vadodara": "Tandalja",
    "solar-installation-in-makarpura-vadodara": "Makarpura",
    "solar-installation-in-fatehgunj-vadodara": "Fatehgunj",
    "solar-installation-in-race-course-vadodara": "Race Course",
    "solar-installation-in-ellora-park-vadodara": "Ellora Park",
    "solar-installation-in-nizampura-vadodara": "Nizampura",
    "solar-installation-in-gorwa-vadodara": "Gorwa",
    "solar-installation-in-ajwa-road-vadodara": "Ajwa Road",
    "solar-installation-in-bil-vadodara": "Bil",
    "solar-installation-in-dabhoi-road-vadodara": "Dabhoi Road",
    "solar-installation-in-manjusar-vadodara": "Manjusar",
    "solar-installation-in-nandesari-vadodara": "Nandesari",
    "solar-installation-in-padra-vadodara": "Padra",
    "solar-installation-in-karjan-vadodara": "Karjan",
    "solar-installation-in-savli-vadodara": "Savli",
    "solar-installation-in-sindhrot-vadodara": "Sindhrot",
    "solar-installation-in-bapod-vadodara": "Bapod",
    "solar-installation-in-undera-vadodara": "Undera",
    "solar-installation-in-jetalpur-vadodara": "Jetalpur",
    "solar-installation-in-halol-road-vadodara": "Halol Road",
    "solar-installation-in-laxmipura-vadodara": "Laxmipura",
    "solar-installation-in-refinery-road-vadodara": "Refinery Road",
  };
  return areaNames[area] || area;
};

export const allAreas = [
  "solar-installation-in-vadodara",
  "solar-installation-in-alkapuri-vadodara",
  "solar-installation-in-akota-vadodara",
  "solar-installation-in-old-padra-road-vadodara",
  "solar-installation-in-gotri-vadodara",
  "solar-installation-in-vasna-bhayli-road-vadodara",
  "solar-installation-in-manjalpur-vadodara",
  "solar-installation-in-sama-vadodara",
  "solar-installation-in-karelibaug-vadodara",
  "solar-installation-in-waghodia-road-vadodara",
  "solar-installation-in-chhani-vadodara",
  "solar-installation-in-harni-vadodara",
  "solar-installation-in-kalali-vadodara",
  "solar-installation-in-atladara-vadodara",
  "solar-installation-in-vadsar-road-vadodara",
  "solar-installation-in-tarsali-vadodara",
  "solar-installation-in-sayajigunj-vadodara",
  "solar-installation-in-subhanpura-vadodara",
  "solar-installation-in-tandalja-vadodara",
  "solar-installation-in-makarpura-vadodara",
  "solar-installation-in-fatehgunj-vadodara",
  "solar-installation-in-race-course-vadodara",
  "solar-installation-in-ellora-park-vadodara",
  "solar-installation-in-nizampura-vadodara",
  "solar-installation-in-gorwa-vadodara",
  "solar-installation-in-ajwa-road-vadodara",
  "solar-installation-in-bil-vadodara",
  "solar-installation-in-dabhoi-road-vadodara",
  "solar-installation-in-manjusar-vadodara",
  "solar-installation-in-nandesari-vadodara",
  "solar-installation-in-padra-vadodara",
  "solar-installation-in-karjan-vadodara",
  "solar-installation-in-savli-vadodara",
  "solar-installation-in-sindhrot-vadodara",
  "solar-installation-in-bapod-vadodara",
  "solar-installation-in-undera-vadodara",
  "solar-installation-in-jetalpur-vadodara",
  "solar-installation-in-halol-road-vadodara",
  "solar-installation-in-laxmipura-vadodara",
  "solar-installation-in-refinery-road-vadodara",
];
