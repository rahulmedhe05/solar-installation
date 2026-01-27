import { PageContentInput } from "../content-generator";
import { vadodaraAreas, getAreaDisplayName } from "../business-config";
import { solarKeywords } from "../keywords-config";

const nearbyAreas = ["solar-installation-in-vadodara", "solar-installation-in-manjalpur-vadodara", "solar-installation-in-tarsali-vadodara", "solar-installation-in-makarpura-vadodara", "solar-installation-in-dabhoi-road-vadodara"];
const areaLinks = nearbyAreas.map(area => `<a href="/${area}" class="text-orange-600 hover:underline">${getAreaDisplayName(area)}</a>`).join(", ");
const keywordLinks = solarKeywords.slice(0, 12).map(kw => `<a href="/${kw.slug}" class="text-orange-600 hover:underline">${kw.title}</a>`).join(", ");

export const solarInstallationInJetalpurVadodaraContent: PageContentInput = {
  heroTitle: "Solar Installation in Jetalpur, Vadodara | Residential & Agricultural Area",
  heroSubtitle: "Quality solar installation in Jetalpur, Vadodara for homes and farms. Affordable residential solar, PM KUSUM agricultural, 25-year warranty. 160+ installations.",
  
  aboutContent: `Welcome to Jetalpur's trusted solar installation provider. We specialize in solar installation in Jetalpur, Vadodara, serving this residential and agricultural area near Vadodara city. Jetalpur offers excellent solar potential with its mix of residential properties and agricultural lands. Our solar installation in Jetalpur, Vadodara delivers affordable, reliable energy solutions.

Solar installation in Jetalpur, Vadodara is ideal for the area's diverse property types. From homes to agricultural properties, Jetalpur's spacious plots and sunny climate provide excellent conditions for solar. Our expertise ensures optimal solar installation in Jetalpur, Vadodara.

**Jetalpur: Residential-Agricultural Area**

Jetalpur's characteristics:
- Residential area near Vadodara
- Agricultural surroundings
- Mix of homes and farms
- Spacious properties
- Good connectivity to city

This character makes solar installation in Jetalpur, Vadodara valuable for homes and farms.

**Why Jetalpur Chooses Solar**

Jetalpur residents value:
- Electricity cost reduction
- Agricultural pump solutions
- Government subsidies
- Long-term savings
- Energy independence

Our solar installation in Jetalpur, Vadodara delivers these benefits.

**Our Jetalpur Experience**

With 160+ successful installations, we understand solar installation in Jetalpur, Vadodara. We've served:
- Residential homes
- Agricultural properties
- Farm houses
- Small businesses

**Pricing**

**Residential:**
| System | Cost | Subsidy | Net Cost |
|--------|------|---------|----------|
| 2kW | ₹1,28,000 | ₹60,000 | ₹68,000 |
| 3kW | ₹1,82,000 | ₹78,000 | ₹1,04,000 |
| 5kW | ₹2,85,000 | ₹78,000 | ₹2,07,000 |

**Government Schemes**

- PM Surya Ghar: Up to ₹78,000 for homes
- PM KUSUM: Subsidized agricultural solar

**Types of Systems**

**Residential Solar Installation in Jetalpur, Vadodara**
Grid-connected systems for homes with net metering.

**Agricultural Solar in Jetalpur, Vadodara**
Solar pumps with PM KUSUM benefits.

**Hybrid Solar**
Grid + battery for properties needing backup.

**Savings**

| Bill | System | Monthly Save | Annual Save |
|------|--------|--------------|-------------|
| ₹2,500 | 2kW | ₹2,250 | ₹27,000 |
| ₹3,500 | 3kW | ₹3,150 | ₹37,800 |
| ₹5,000 | 4kW | ₹4,500 | ₹54,000 |

**Customer Testimonials**

⭐⭐⭐⭐⭐ *"Great solar installation for our home in Jetalpur!"* - Home Owner

⭐⭐⭐⭐⭐ *"Solar pump has reduced our agricultural expenses!"* - Farmer, Jetalpur

**Nearby Areas**

We serve: ${areaLinks}

**Related Services**

Explore: ${keywordLinks}

**Contact Us**

Ready for solar installation in Jetalpur, Vadodara?

Contact us for a free site visit!`,

  faqs: [
    {
      question: "What is solar cost in Jetalpur?",
      answer: "Solar costs ₹68,000 for 2kW to ₹2,07,000 for 5kW after government subsidy."
    },
    {
      question: "Do you provide agricultural solar?",
      answer: "Yes, we provide solar pumps with PM KUSUM subsidies for farms."
    },
    {
      question: "How much can Jetalpur homes save?",
      answer: "Jetalpur homes save 80-90% on electricity with solar."
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
      question: "Is hybrid solar available?",
      answer: "Yes, hybrid solar with battery backup is available."
    },
    {
      question: "How long does installation take?",
      answer: "Residential: 1 day. Complete process: 4-6 weeks."
    },
    {
      question: "What size system do Jetalpur homes need?",
      answer: "Most Jetalpur homes need 2-4kW based on consumption."
    },
    {
      question: "Do you serve farms?",
      answer: "Yes, we provide solar solutions for agricultural properties."
    }
  ],

  whyChooseUs: [
    "160+ installations in Jetalpur area",
    "Agricultural solar expertise",
    "PM KUSUM assistance",
    "Complete subsidy handling",
    "25-year warranty",
    "Easy EMI",
    "Hybrid solar options",
    "Local presence",
    "Quality components",
    "Reliable support"
  ],

  services: [
    {
      title: "Residential Solar",
      description: "Rooftop solar for Jetalpur homes."
    },
    {
      title: "Agricultural Solar",
      description: "Solar pumps with PM KUSUM."
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
      description: "Solar for businesses."
    },
    {
      title: "Solar Maintenance",
      description: "Maintenance services."
    }
  ]
};
