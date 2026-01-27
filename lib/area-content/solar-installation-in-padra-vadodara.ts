import { PageContentInput } from "../content-generator";
import { vadodaraAreas, getAreaDisplayName } from "../business-config";
import { solarKeywords } from "../keywords-config";

const nearbyAreas = ["solar-installation-in-vadodara", "solar-installation-in-dabhoi-road-vadodara", "solar-installation-in-manjalpur-vadodara", "solar-installation-in-karjan-vadodara", "solar-installation-in-savli-vadodara"];
const areaLinks = nearbyAreas.map(area => `<a href="/${area}" class="text-orange-600 hover:underline">${getAreaDisplayName(area)}</a>`).join(", ");
const keywordLinks = solarKeywords.slice(0, 12).map(kw => `<a href="/${kw.slug}" class="text-orange-600 hover:underline">${kw.title}</a>`).join(", ");

export const solarInstallationInPadraVadodaraContent: PageContentInput = {
  heroTitle: "Solar Installation in Padra, Vadodara | Town & Agricultural Solar",
  heroSubtitle: "Quality solar installation in Padra, Vadodara for the historic town. ₹78,000 residential subsidy, agricultural solutions, 25-year warranty. 220+ installations in Padra.",
  
  aboutContent: `Welcome to Padra's trusted solar installation provider. We deliver quality solar installation in Padra, Vadodara for this historic town near Vadodara city. Padra combines urban character with agricultural surroundings, creating diverse solar opportunities. Our solar installation in Padra, Vadodara serves both residential and agricultural needs.

Solar installation in Padra, Vadodara is well-suited for the town's mix of properties. From traditional homes to agricultural lands, Padra offers excellent solar potential. Our expertise ensures optimal solar installation in Padra, Vadodara for all property types.

**Padra: Historic Town with Solar Potential**

Padra's characteristics:
- Historic town near Vadodara
- Mix of urban and rural
- Agricultural surroundings
- Growing infrastructure
- Traditional and modern homes

This diverse character makes solar installation in Padra, Vadodara valuable for multiple segments.

**Why Padra Chooses Solar**

Padra residents value:
- Electricity cost reduction
- Agricultural pump solutions
- Long-term savings
- Government subsidies
- Sustainable living

Our solar installation in Padra, Vadodara delivers these benefits.

**Our Padra Experience**

With 220+ successful installations, we understand solar installation in Padra, Vadodara. We've served:
- Town homes
- Agricultural properties
- Commercial establishments
- Farmhouses

**Pricing**

**Residential:**
| System | Cost | Subsidy | Net Cost |
|--------|------|---------|----------|
| 2kW | ₹1,28,000 | ₹60,000 | ₹68,000 |
| 3kW | ₹1,82,000 | ₹78,000 | ₹1,04,000 |
| 5kW | ₹2,85,000 | ₹78,000 | ₹2,07,000 |

**Government Schemes**

- PM Surya Ghar: Up to ₹78,000 for homes
- PM KUSUM: Subsidized solar pumps for agriculture

**Types of Systems**

**Residential Solar Installation in Padra, Vadodara**
Grid-connected systems for homes with net metering.

**Agricultural Solar in Padra, Vadodara**
Solar pumps and farm electricity with PM KUSUM benefits.

**Hybrid Solar**
Grid + battery for areas with power fluctuations.

**Savings**

| Bill | System | Monthly Save | Annual Save |
|------|--------|--------------|-------------|
| ₹2,500 | 2kW | ₹2,250 | ₹27,000 |
| ₹3,500 | 3kW | ₹3,150 | ₹37,800 |
| ₹5,000 | 4kW | ₹4,500 | ₹54,000 |

**EMI Options**

- **₹1,099/month** for 2kW
- **₹1,599/month** for 3kW
- **Zero Down Payment** available

**Customer Testimonials**

⭐⭐⭐⭐⭐ *"Great solar installation in Padra. Affordable and reliable!"* - Home Owner, Padra

⭐⭐⭐⭐⭐ *"Solar pump transformed our farm irrigation!"* - Farmer, Near Padra

**Nearby Areas**

We serve: ${areaLinks}

**Related Services**

Explore: ${keywordLinks}

**Contact Us**

Ready for solar installation in Padra, Vadodara?

Contact us for a free site visit!`,

  faqs: [
    {
      question: "What is solar cost in Padra?",
      answer: "Solar costs ₹68,000 for 2kW to ₹2,07,000 for 5kW after government subsidy."
    },
    {
      question: "Do you provide agricultural solar in Padra?",
      answer: "Yes, we provide solar pumps and farm electricity with PM KUSUM subsidies."
    },
    {
      question: "How much can Padra homes save?",
      answer: "Padra homes save 80-90% on electricity with appropriate solar installation."
    },
    {
      question: "Is EMI available?",
      answer: "Yes, EMI starts at ₹1,099/month with zero down payment."
    },
    {
      question: "Do you handle subsidy?",
      answer: "Yes, we process PM Surya Ghar and PM KUSUM subsidies."
    },
    {
      question: "What warranty is provided?",
      answer: "25-year panel warranty, 5-year inverter warranty."
    },
    {
      question: "How long does installation take?",
      answer: "Residential: 1 day. Complete process: 4-6 weeks."
    },
    {
      question: "Is hybrid solar available?",
      answer: "Yes, hybrid solar with battery backup is available."
    },
    {
      question: "Do you serve farms around Padra?",
      answer: "Yes, we provide solar solutions for agricultural properties."
    },
    {
      question: "What size system do Padra homes need?",
      answer: "Most Padra homes need 2-4kW based on consumption."
    }
  ],

  whyChooseUs: [
    "220+ installations in Padra",
    "Agricultural solar expertise",
    "PM KUSUM assistance",
    "Complete subsidy handling",
    "25-year warranty",
    "Easy EMI",
    "Quick installation",
    "Local presence",
    "Quality components",
    "Reliable support"
  ],

  services: [
    {
      title: "Residential Solar",
      description: "Rooftop solar for Padra homes."
    },
    {
      title: "Agricultural Solar",
      description: "Solar pumps and farm electricity."
    },
    {
      title: "On-Grid Solar",
      description: "Grid-connected with net metering."
    },
    {
      title: "Hybrid Solar",
      description: "Grid + battery for backup."
    },
    {
      title: "Commercial Solar",
      description: "Solar for businesses in Padra."
    },
    {
      title: "Solar Maintenance",
      description: "Maintenance services."
    }
  ]
};
