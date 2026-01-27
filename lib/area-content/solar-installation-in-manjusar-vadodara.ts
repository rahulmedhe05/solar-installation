import { PageContentInput } from "../content-generator";
import { vadodaraAreas, getAreaDisplayName } from "../business-config";
import { solarKeywords } from "../keywords-config";

const nearbyAreas = ["solar-installation-in-vadodara", "solar-installation-in-makarpura-vadodara", "solar-installation-in-gorwa-vadodara", "solar-installation-in-nandesari-vadodara", "solar-installation-in-halol-road-vadodara"];
const areaLinks = nearbyAreas.map(area => `<a href="/${area}" class="text-orange-600 hover:underline">${getAreaDisplayName(area)}</a>`).join(", ");
const keywordLinks = solarKeywords.slice(0, 12).map(kw => `<a href="/${kw.slug}" class="text-orange-600 hover:underline">${kw.title}</a>`).join(", ");

export const solarInstallationInManjusarVadodaraContent: PageContentInput = {
  heroTitle: "Solar Installation in Manjusar, Vadodara | Industrial Hub Solar Experts",
  heroSubtitle: "Expert solar installation in Manjusar, Vadodara for the industrial estate. Industrial solar specialists, residential solutions, 25-year warranty. 280+ installations in Manjusar GIDC.",
  
  aboutContent: `Welcome to Manjusar's comprehensive solar installation provider. We specialize in solar installation in Manjusar, Vadodara, serving this important industrial estate and surrounding residential areas. Manjusar GIDC is one of the key industrial hubs near Vadodara. Our solar installation in Manjusar, Vadodara helps industries achieve operational efficiency.

Solar installation in Manjusar, Vadodara offers tremendous potential for industrial cost reduction. The Manjusar industrial estate hosts numerous manufacturing units with high power consumption. Our expertise ensures optimal solar installation in Manjusar, Vadodara for industries and residences.

**Manjusar: Industrial Excellence**

Manjusar's characteristics:
- Major GIDC industrial estate
- Manufacturing and processing units
- Pharmaceutical industries
- Surrounding residential areas
- Highway connectivity

This industrial character makes solar installation in Manjusar, Vadodara impactful for businesses.

**Why Manjusar Chooses Solar**

Industries in Manjusar value:
- Operational cost reduction
- Tax benefits
- Environmental compliance
- Energy security
- Long-term savings

Our solar installation in Manjusar, Vadodara delivers these benefits.

**Our Manjusar Experience**

With 280+ successful installations, we understand solar installation in Manjusar, Vadodara. Our portfolio includes:
- Manufacturing units
- Pharmaceutical plants
- Warehouses
- Residential homes

**Pricing**

**Industrial:**
| Capacity | Cost | Monthly Savings |
|----------|------|-----------------|
| 50kW | ₹24,00,000 | ₹65,000+ |
| 100kW | ₹46,00,000 | ₹1,30,000+ |
| 200kW | ₹90,00,000 | ₹2,60,000+ |

**Residential:**
| System | Cost | Subsidy | Net Cost |
|--------|------|---------|----------|
| 3kW | ₹1,82,000 | ₹78,000 | ₹1,04,000 |
| 5kW | ₹2,85,000 | ₹78,000 | ₹2,07,000 |

**Benefits**

**Industrial:**
- 40% accelerated depreciation
- 2-3 year payback
- 25-year savings

**Residential:**
- ₹78,000 subsidy
- 80-90% bill reduction
- 3-4 year payback

**Types of Systems**

**Industrial Solar Installation in Manjusar, Vadodara**
Large-scale rooftop and ground-mounted systems for factories.

**Residential Solar Installation in Manjusar, Vadodara**
Grid-connected systems for homes with net metering.

**Customer Testimonials**

⭐⭐⭐⭐⭐ *"Our 150kW solar installation in Manjusar GIDC saves ₹2 lakhs monthly!"* - Manufacturing Unit

⭐⭐⭐⭐⭐ *"Great residential solar near Manjusar."* - Home Owner

**Nearby Areas**

We serve: ${areaLinks}

**Related Services**

Explore: ${keywordLinks}

**Contact Us**

Ready for solar installation in Manjusar, Vadodara?

Contact us for a free industrial or residential assessment!`,

  faqs: [
    {
      question: "What is industrial solar cost in Manjusar GIDC?",
      answer: "Industrial solar costs ₹46 lakhs for 100kW with ₹1.3 lakh monthly savings and 3-year payback."
    },
    {
      question: "Do industries get tax benefits?",
      answer: "Yes, 40% accelerated depreciation and other tax benefits for industrial solar."
    },
    {
      question: "What is residential solar cost?",
      answer: "Residential solar costs ₹1,04,000 for 3kW after ₹78,000 subsidy."
    },
    {
      question: "How much can industries save?",
      answer: "Industries save 60-70% on electricity. A 100kW system saves ₹1.3 lakh+ monthly."
    },
    {
      question: "Is OPEX model available?",
      answer: "Yes, OPEX/lease models available for industrial solar with zero investment."
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
      question: "Is residential EMI available?",
      answer: "Yes, EMI starts at ₹1,599/month with zero down payment."
    },
    {
      question: "Do you provide O&M services?",
      answer: "Yes, comprehensive operations and maintenance for industrial solar."
    }
  ],

  whyChooseUs: [
    "280+ installations in Manjusar",
    "Industrial solar specialists",
    "GIDC experience",
    "Complete documentation",
    "25-year warranties",
    "Tax benefit guidance",
    "OPEX options",
    "Professional execution",
    "O&M services",
    "Local presence"
  ],

  services: [
    {
      title: "Industrial Solar Installation",
      description: "Large-scale solar for Manjusar GIDC industries."
    },
    {
      title: "Residential Solar",
      description: "Rooftop solar for homes near Manjusar."
    },
    {
      title: "OPEX Solar",
      description: "Zero-investment lease model."
    },
    {
      title: "Ground-Mounted Solar",
      description: "Solar power plants on available land."
    },
    {
      title: "Solar O&M",
      description: "Operations and maintenance services."
    },
    {
      title: "Solar Maintenance",
      description: "Maintenance for all systems."
    }
  ]
};
