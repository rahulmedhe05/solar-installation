import { PageContentInput } from "../content-generator";
import { vadodaraAreas, getAreaDisplayName } from "../business-config";
import { solarKeywords } from "../keywords-config";

const nearbyAreas = ["solar-installation-in-vadodara", "solar-installation-in-padra-vadodara", "solar-installation-in-dabhoi-road-vadodara", "solar-installation-in-savli-vadodara", "solar-installation-in-sindhrot-vadodara"];
const areaLinks = nearbyAreas.map(area => `<a href="/${area}" class="text-orange-600 hover:underline">${getAreaDisplayName(area)}</a>`).join(", ");
const keywordLinks = solarKeywords.slice(0, 12).map(kw => `<a href="/${kw.slug}" class="text-orange-600 hover:underline">${kw.title}</a>`).join(", ");

export const solarInstallationInKarjanVadodaraContent: PageContentInput = {
  heroTitle: "Solar Installation in Karjan, Vadodara | Rural Excellence",
  heroSubtitle: "Quality solar installation in Karjan, Vadodara for the town and surrounding areas. Agricultural solar solutions, residential systems, 25-year warranty. 180+ installations.",
  
  aboutContent: `Welcome to Karjan's trusted solar installation provider. We specialize in solar installation in Karjan, Vadodara, serving this growing town and surrounding rural areas. Karjan offers excellent solar potential for both residential homes and agricultural properties. Our solar installation in Karjan, Vadodara delivers affordable, reliable energy solutions.

Solar installation in Karjan, Vadodara is ideal for the area's diverse property types. From town homes to agricultural lands, Karjan's sunny climate and spacious properties provide excellent conditions for solar. Our expertise ensures optimal solar installation in Karjan, Vadodara.

**Karjan: Growing Town with Solar Potential**

Karjan's characteristics:
- Growing town near Vadodara
- Agricultural surroundings
- Mix of urban and rural properties
- Spacious homes
- Good sunshine throughout the year

This character makes solar installation in Karjan, Vadodara a valuable investment.

**Why Karjan Chooses Solar**

Karjan residents value:
- Electricity cost reduction
- Agricultural pump solutions
- Government subsidies
- Long-term savings
- Energy independence

Our solar installation in Karjan, Vadodara delivers these benefits.

**Our Karjan Experience**

With 180+ successful installations, we understand solar installation in Karjan, Vadodara. We've served:
- Town homes
- Agricultural properties
- Rural residences
- Small businesses

**Pricing**

**Residential:**
| System | Cost | Subsidy | Net Cost |
|--------|------|---------|----------|
| 2kW | ₹1,28,000 | ₹60,000 | ₹68,000 |
| 3kW | ₹1,82,000 | ₹78,000 | ₹1,04,000 |
| 5kW | ₹2,85,000 | ₹78,000 | ₹2,07,000 |

**Agricultural Solar:**

PM KUSUM Scheme provides significant subsidies for agricultural solar.

**Government Benefits**

- PM Surya Ghar: ₹78,000 for homes
- PM KUSUM: Subsidized agricultural solar

**Types of Systems**

**Residential Solar Installation in Karjan, Vadodara**
Grid-connected systems with net metering for homes.

**Agricultural Solar in Karjan, Vadodara**
Solar water pumps with PM KUSUM benefits.

**Off-Grid Solar**
Independent solar for areas without reliable grid.

**Customer Testimonials**

⭐⭐⭐⭐⭐ *"Affordable solar installation in Karjan. Very satisfied!"* - Home Owner, Karjan

⭐⭐⭐⭐⭐ *"Solar pump has reduced our irrigation costs significantly!"* - Farmer, Near Karjan

**Nearby Areas**

We serve: ${areaLinks}

**Related Services**

Explore: ${keywordLinks}

**Contact Us**

Ready for solar installation in Karjan, Vadodara?

Contact us for a free site assessment!`,

  faqs: [
    {
      question: "What is solar cost in Karjan?",
      answer: "Solar costs ₹68,000 for 2kW to ₹2,07,000 for 5kW after government subsidy."
    },
    {
      question: "Do you provide agricultural solar?",
      answer: "Yes, we provide solar pumps with PM KUSUM subsidies for agricultural use."
    },
    {
      question: "How much can Karjan homes save?",
      answer: "Karjan homes save 80-90% on electricity bills with solar."
    },
    {
      question: "Is EMI available?",
      answer: "Yes, EMI starts at ₹1,099/month with zero down payment."
    },
    {
      question: "Do you handle subsidy?",
      answer: "Yes, we process all government subsidies including PM Surya Ghar and PM KUSUM."
    },
    {
      question: "What warranty is provided?",
      answer: "25-year panel warranty, 5-year inverter warranty."
    },
    {
      question: "Is off-grid solar available?",
      answer: "Yes, off-grid solar is available for areas without reliable grid."
    },
    {
      question: "How long does installation take?",
      answer: "Residential: 1 day. Complete process: 4-6 weeks."
    },
    {
      question: "Do you serve farms around Karjan?",
      answer: "Yes, we provide solar solutions for farms and agricultural properties."
    },
    {
      question: "What size system do Karjan homes need?",
      answer: "Most Karjan homes need 2-4kW based on consumption."
    }
  ],

  whyChooseUs: [
    "180+ installations in Karjan area",
    "Agricultural solar expertise",
    "PM KUSUM assistance",
    "Complete subsidy handling",
    "25-year warranty",
    "Easy EMI",
    "Off-grid solutions",
    "Local presence",
    "Quality components",
    "Reliable support"
  ],

  services: [
    {
      title: "Residential Solar",
      description: "Rooftop solar for Karjan homes."
    },
    {
      title: "Agricultural Solar",
      description: "Solar pumps for irrigation."
    },
    {
      title: "On-Grid Solar",
      description: "Grid-connected with net metering."
    },
    {
      title: "Off-Grid Solar",
      description: "Independent solar systems."
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
