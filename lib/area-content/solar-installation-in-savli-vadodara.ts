import { PageContentInput } from "../content-generator";
import { vadodaraAreas, getAreaDisplayName } from "../business-config";
import { solarKeywords } from "../keywords-config";

const nearbyAreas = ["solar-installation-in-vadodara", "solar-installation-in-makarpura-vadodara", "solar-installation-in-manjusar-vadodara", "solar-installation-in-padra-vadodara", "solar-installation-in-karjan-vadodara"];
const areaLinks = nearbyAreas.map(area => `<a href="/${area}" class="text-orange-600 hover:underline">${getAreaDisplayName(area)}</a>`).join(", ");
const keywordLinks = solarKeywords.slice(0, 12).map(kw => `<a href="/${kw.slug}" class="text-orange-600 hover:underline">${kw.title}</a>`).join(", ");

export const solarInstallationInSavliVadodaraContent: PageContentInput = {
  heroTitle: "Solar Installation in Savli, Vadodara | Industrial & Agricultural Hub",
  heroSubtitle: "Quality solar installation in Savli, Vadodara for industry and agriculture. Industrial solar specialists, PM KUSUM agricultural solutions, 25-year warranty. 250+ installations.",
  
  aboutContent: `Welcome to Savli's comprehensive solar installation provider. We specialize in solar installation in Savli, Vadodara, serving this important industrial and agricultural hub. Savli GIDC and surrounding agricultural areas offer tremendous solar potential. Our solar installation in Savli, Vadodara delivers solutions for diverse energy needs.

Solar installation in Savli, Vadodara is ideal for both industrial facilities and agricultural properties. The Savli area features manufacturing units, agro-processing industries, and extensive farmlands. Our expertise ensures optimal solar installation in Savli, Vadodara for all sectors.

**Savli: Industrial-Agricultural Hub**

Savli's characteristics:
- Savli GIDC industrial area
- Agro-processing industries
- Agricultural surroundings
- Mix of industry and farming
- Growing infrastructure

This diverse character makes solar installation in Savli, Vadodara valuable for multiple segments.

**Why Savli Chooses Solar**

Savli residents and businesses value:
- Industrial cost reduction
- Agricultural pump solutions
- Tax benefits
- Government subsidies
- Long-term savings

Our solar installation in Savli, Vadodara delivers these benefits.

**Our Savli Experience**

With 250+ successful installations, we understand solar installation in Savli, Vadodara. Our portfolio includes:
- Industrial units in Savli GIDC
- Agricultural properties
- Residential homes
- Agro-processing facilities

**Pricing**

**Industrial:**
| Capacity | Cost | Monthly Savings |
|----------|------|-----------------|
| 50kW | ₹24,00,000 | ₹65,000+ |
| 100kW | ₹46,00,000 | ₹1,30,000+ |

**Residential:**
| System | Cost | Subsidy | Net Cost |
|--------|------|---------|----------|
| 3kW | ₹1,82,000 | ₹78,000 | ₹1,04,000 |
| 5kW | ₹2,85,000 | ₹78,000 | ₹2,07,000 |

**Government Schemes**

- PM Surya Ghar: ₹78,000 for homes
- PM KUSUM: Subsidized agricultural solar
- Industrial Tax Benefits: 40% accelerated depreciation

**Types of Systems**

**Industrial Solar Installation in Savli, Vadodara**
Large-scale rooftop and ground-mounted systems.

**Agricultural Solar in Savli, Vadodara**
Solar pumps and farm electricity with PM KUSUM.

**Residential Solar Installation in Savli, Vadodara**
Grid-connected systems for homes.

**Customer Testimonials**

⭐⭐⭐⭐⭐ *"Our 80kW industrial solar in Savli GIDC saves over ₹1 lakh monthly!"* - Manufacturing Unit

⭐⭐⭐⭐⭐ *"Solar pump with PM KUSUM subsidy was excellent!"* - Farmer, Savli

**Nearby Areas**

We serve: ${areaLinks}

**Related Services**

Explore: ${keywordLinks}

**Contact Us**

Ready for solar installation in Savli, Vadodara?

Contact us for a free industrial or agricultural assessment!`,

  faqs: [
    {
      question: "What is industrial solar cost in Savli GIDC?",
      answer: "Industrial solar costs ₹24 lakhs for 50kW with ₹65,000+ monthly savings."
    },
    {
      question: "Do you provide agricultural solar?",
      answer: "Yes, we provide solar pumps and farm electricity with PM KUSUM subsidies."
    },
    {
      question: "Is OPEX model available for industries?",
      answer: "Yes, OPEX/lease models available for industrial solar with zero investment."
    },
    {
      question: "What is residential solar cost?",
      answer: "Residential solar costs ₹1,04,000 for 3kW after ₹78,000 subsidy."
    },
    {
      question: "Do industries get tax benefits?",
      answer: "Yes, 40% accelerated depreciation and other tax benefits."
    },
    {
      question: "What warranty is provided?",
      answer: "25-year panel warranty, 5-10 year inverter warranty."
    },
    {
      question: "How long does industrial installation take?",
      answer: "Industrial solar takes 2-6 weeks depending on capacity."
    },
    {
      question: "Do you handle all approvals?",
      answer: "Yes, we process GUVNL/DGVCL approvals and all documentation."
    },
    {
      question: "Is agricultural EMI available?",
      answer: "PM KUSUM provides significant subsidies, reducing investment."
    },
    {
      question: "Do you provide O&M services?",
      answer: "Yes, comprehensive operations and maintenance for all systems."
    }
  ],

  whyChooseUs: [
    "250+ installations in Savli",
    "Industrial GIDC expertise",
    "Agricultural solar specialists",
    "PM KUSUM assistance",
    "Complete documentation",
    "25-year warranties",
    "Tax benefit guidance",
    "OPEX options",
    "Professional execution",
    "Local presence"
  ],

  services: [
    {
      title: "Industrial Solar",
      description: "Large-scale solar for Savli GIDC."
    },
    {
      title: "Agricultural Solar",
      description: "Solar pumps with PM KUSUM."
    },
    {
      title: "Residential Solar",
      description: "Rooftop solar for homes."
    },
    {
      title: "OPEX Solar",
      description: "Zero-investment lease model."
    },
    {
      title: "Solar O&M",
      description: "Operations and maintenance."
    },
    {
      title: "Solar Maintenance",
      description: "Maintenance services."
    }
  ]
};
