import { PageContentInput } from "../content-generator";
import { vadodaraAreas, getAreaDisplayName } from "../business-config";
import { solarKeywords } from "../keywords-config";

const nearbyAreas = ["solar-installation-in-vadodara", "solar-installation-in-makarpura-vadodara", "solar-installation-in-manjusar-vadodara", "solar-installation-in-gorwa-vadodara", "solar-installation-in-halol-road-vadodara"];
const areaLinks = nearbyAreas.map(area => `<a href="/${area}" class="text-orange-600 hover:underline">${getAreaDisplayName(area)}</a>`).join(", ");
const keywordLinks = solarKeywords.slice(0, 12).map(kw => `<a href="/${kw.slug}" class="text-orange-600 hover:underline">${kw.title}</a>`).join(", ");

export const solarInstallationInNandesariVadodaraContent: PageContentInput = {
  heroTitle: "Solar Installation in Nandesari, Vadodara | Chemical Belt Solar Experts",
  heroSubtitle: "Expert solar installation in Nandesari, Vadodara for the chemical industrial belt. Industrial specialists, residential solutions, 25-year warranty. 320+ installations in Nandesari GIDC.",
  
  aboutContent: `Welcome to Nandesari's comprehensive solar installation provider. We specialize in solar installation in Nandesari, Vadodara, serving this important chemical and industrial belt. Nandesari GIDC is known for chemical industries, and our solar installation in Nandesari, Vadodara helps these power-intensive industries reduce operational costs.

Solar installation in Nandesari, Vadodara offers significant potential for industrial energy savings. The Nandesari belt features chemical processing plants, pharmaceutical units, and manufacturing facilities with high energy consumption. Our expertise ensures optimal solar installation in Nandesari, Vadodara.

**Nandesari: Chemical Industrial Hub**

Nandesari's characteristics:
- Major chemical industrial belt
- Pharmaceutical industries
- Processing plants
- High power consumption
- Surrounding residential areas

This industrial character makes solar installation in Nandesari, Vadodara highly impactful.

**Why Nandesari Chooses Solar**

Industries in Nandesari value:
- Significant cost reduction
- Environmental compliance
- Tax benefits
- Energy security
- Sustainable operations

Our solar installation in Nandesari, Vadodara delivers these benefits.

**Our Nandesari Experience**

With 320+ successful installations, we understand solar installation in Nandesari, Vadodara. Our portfolio includes:
- Chemical plants
- Pharmaceutical units
- Manufacturing facilities
- Residential homes

**Pricing**

**Industrial:**
| Capacity | Cost | Monthly Savings |
|----------|------|-----------------|
| 100kW | ₹46,00,000 | ₹1,30,000+ |
| 200kW | ₹90,00,000 | ₹2,60,000+ |
| 500kW | ₹2,20,00,000 | ₹6,50,000+ |

**Residential:**
| System | Cost | Subsidy | Net Cost |
|--------|------|---------|----------|
| 3kW | ₹1,82,000 | ₹78,000 | ₹1,04,000 |
| 5kW | ₹2,85,000 | ₹78,000 | ₹2,07,000 |

**Industrial ROI**

Example for 200kW system:
- Investment: ₹90,00,000
- Monthly Savings: ₹2,60,000+
- Annual Savings: ₹31,20,000+
- Payback: 2.5-3 years
- 25-Year Savings: ₹7+ Crore

**Types of Systems**

**Industrial Solar Installation in Nandesari, Vadodara**
Large-scale systems for chemical and manufacturing plants.

**Residential Solar Installation in Nandesari, Vadodara**
Grid-connected systems for homes with net metering.

**Customer Testimonials**

⭐⭐⭐⭐⭐ *"Our chemical plant's 300kW solar saves ₹4 lakhs monthly!"* - Chemical Industry, Nandesari GIDC

⭐⭐⭐⭐⭐ *"Great residential solar near Nandesari."* - Home Owner

**Nearby Areas**

We serve: ${areaLinks}

**Related Services**

Explore: ${keywordLinks}

**Contact Us**

Ready for solar installation in Nandesari, Vadodara?

Contact us for a free industrial assessment!`,

  faqs: [
    {
      question: "What is industrial solar cost in Nandesari GIDC?",
      answer: "Industrial solar costs ₹46 lakhs for 100kW with ₹1.3 lakh monthly savings and 3-year payback."
    },
    {
      question: "Is solar suitable for chemical industries?",
      answer: "Yes, solar is ideal for power-intensive chemical industries in Nandesari for significant cost reduction."
    },
    {
      question: "Do industries get tax benefits?",
      answer: "Yes, 40% accelerated depreciation and other tax benefits for industrial solar."
    },
    {
      question: "How much can Nandesari industries save?",
      answer: "Industries save 60-70% on electricity. A 200kW system saves ₹2.6 lakh+ monthly."
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
      question: "How long does large installation take?",
      answer: "Large industrial solar takes 3-8 weeks depending on capacity."
    },
    {
      question: "What is residential solar cost?",
      answer: "Residential solar costs ₹1,04,000 for 3kW after ₹78,000 subsidy."
    },
    {
      question: "Do you handle all approvals?",
      answer: "Yes, we process GUVNL/DGVCL approvals and all documentation."
    },
    {
      question: "Do you provide O&M services?",
      answer: "Yes, comprehensive operations and maintenance for industrial solar."
    }
  ],

  whyChooseUs: [
    "320+ installations in Nandesari",
    "Chemical industry experience",
    "Large-scale expertise",
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
      description: "Large-scale solar for Nandesari chemical and manufacturing industries."
    },
    {
      title: "Residential Solar",
      description: "Rooftop solar for homes near Nandesari."
    },
    {
      title: "OPEX Solar",
      description: "Zero-investment lease model for industries."
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
