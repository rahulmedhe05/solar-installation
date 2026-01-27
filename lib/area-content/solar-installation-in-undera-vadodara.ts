import { PageContentInput } from "../content-generator";
import { vadodaraAreas, getAreaDisplayName } from "../business-config";
import { solarKeywords } from "../keywords-config";

const nearbyAreas = ["solar-installation-in-vadodara", "solar-installation-in-bapod-vadodara", "solar-installation-in-makarpura-vadodara", "solar-installation-in-manjalpur-vadodara", "solar-installation-in-gorwa-vadodara"];
const areaLinks = nearbyAreas.map(area => `<a href="/${area}" class="text-orange-600 hover:underline">${getAreaDisplayName(area)}</a>`).join(", ");
const keywordLinks = solarKeywords.slice(0, 12).map(kw => `<a href="/${kw.slug}" class="text-orange-600 hover:underline">${kw.title}</a>`).join(", ");

export const solarInstallationInUnderaVadodaraContent: PageContentInput = {
  heroTitle: "Solar Installation in Undera, Vadodara | Industrial & Residential Hub",
  heroSubtitle: "Expert solar installation in Undera, Vadodara for industry and homes. Industrial solar specialists, residential solutions, 25-year warranty. 200+ installations in Undera.",
  
  aboutContent: `Welcome to Undera's comprehensive solar installation provider. We specialize in solar installation in Undera, Vadodara, serving this important industrial and residential area. Undera hosts various industries alongside residential communities, creating diverse solar opportunities. Our solar installation in Undera, Vadodara delivers solutions for both industrial and residential needs.

Solar installation in Undera, Vadodara is ideal for the area's mixed character. Industries benefit from cost reduction while homes enjoy subsidized solar. Our expertise ensures optimal solar installation in Undera, Vadodara for all property types.

**Undera: Industrial-Residential Hub**

Undera's characteristics:
- Industrial zone with factories
- Surrounding residential areas
- Mix of industry and housing
- Good connectivity
- Growing infrastructure

This character makes solar installation in Undera, Vadodara valuable for multiple segments.

**Why Undera Chooses Solar**

Undera residents and businesses value:
- Industrial cost reduction
- Residential bill savings
- Government subsidies
- Tax benefits for industries
- Long-term savings

Our solar installation in Undera, Vadodara delivers these benefits.

**Our Undera Experience**

With 200+ successful installations, we understand solar installation in Undera, Vadodara. Our portfolio includes:
- Manufacturing units
- Warehouses
- Residential homes
- Commercial establishments

**Pricing**

**Industrial:**
| Capacity | Cost | Monthly Savings |
|----------|------|-----------------|
| 25kW | ₹12,50,000 | ₹35,000+ |
| 50kW | ₹24,00,000 | ₹65,000+ |
| 100kW | ₹46,00,000 | ₹1,30,000+ |

**Residential:**
| System | Cost | Subsidy | Net Cost |
|--------|------|---------|----------|
| 3kW | ₹1,82,000 | ₹78,000 | ₹1,04,000 |
| 5kW | ₹2,85,000 | ₹78,000 | ₹2,07,000 |

**Benefits**

**Industrial:**
- 40% accelerated depreciation
- 2-3 year payback
- 60-70% electricity savings

**Residential:**
- ₹78,000 subsidy
- 80-90% bill reduction
- 3-4 year payback

**Types of Systems**

**Industrial Solar Installation in Undera, Vadodara**
Rooftop and ground-mounted systems for factories.

**Residential Solar Installation in Undera, Vadodara**
Grid-connected systems for homes.

**Commercial Solar**
Solar for warehouses and commercial premises.

**Customer Testimonials**

⭐⭐⭐⭐⭐ *"Our 50kW industrial solar in Undera saves ₹65,000 monthly!"* - Factory Owner

⭐⭐⭐⭐⭐ *"Affordable residential solar with great service!"* - Home Owner, Undera

**Nearby Areas**

We serve: ${areaLinks}

**Related Services**

Explore: ${keywordLinks}

**Contact Us**

Ready for solar installation in Undera, Vadodara?

Contact us for a free assessment!`,

  faqs: [
    {
      question: "What is industrial solar cost in Undera?",
      answer: "Industrial solar costs ₹24 lakhs for 50kW with ₹65,000+ monthly savings."
    },
    {
      question: "What is residential solar cost?",
      answer: "Residential solar costs ₹1,04,000 for 3kW after ₹78,000 subsidy."
    },
    {
      question: "Is OPEX model available?",
      answer: "Yes, OPEX/lease models available for industrial solar with zero investment."
    },
    {
      question: "Do industries get tax benefits?",
      answer: "Yes, 40% accelerated depreciation and other tax benefits."
    },
    {
      question: "How much can industries save?",
      answer: "Industries save 60-70% on electricity. A 50kW system saves ₹65,000+ monthly."
    },
    {
      question: "What warranty is provided?",
      answer: "25-year panel warranty, 5-10 year inverter warranty."
    },
    {
      question: "How long does installation take?",
      answer: "Residential: 1 day. Industrial: 1-4 weeks depending on capacity."
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
      answer: "Yes, comprehensive operations and maintenance for all systems."
    }
  ],

  whyChooseUs: [
    "200+ installations in Undera",
    "Industrial solar expertise",
    "Residential solutions",
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
      title: "Industrial Solar",
      description: "Solar for Undera industries."
    },
    {
      title: "Residential Solar",
      description: "Rooftop solar for homes."
    },
    {
      title: "Commercial Solar",
      description: "Solar for warehouses and commercial."
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
