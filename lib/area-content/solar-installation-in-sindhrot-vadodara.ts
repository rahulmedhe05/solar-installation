import { PageContentInput } from "../content-generator";
import { vadodaraAreas, getAreaDisplayName } from "../business-config";
import { solarKeywords } from "../keywords-config";

const nearbyAreas = ["solar-installation-in-vadodara", "solar-installation-in-ajwa-road-vadodara", "solar-installation-in-padra-vadodara", "solar-installation-in-karjan-vadodara", "solar-installation-in-bil-vadodara"];
const areaLinks = nearbyAreas.map(area => `<a href="/${area}" class="text-orange-600 hover:underline">${getAreaDisplayName(area)}</a>`).join(", ");
const keywordLinks = solarKeywords.slice(0, 12).map(kw => `<a href="/${kw.slug}" class="text-orange-600 hover:underline">${kw.title}</a>`).join(", ");

export const solarInstallationInSindhrotVadodaraContent: PageContentInput = {
  heroTitle: "Solar Installation in Sindhrot, Vadodara | Near Ajwa Garden",
  heroSubtitle: "Quality solar installation in Sindhrot, Vadodara near the scenic Ajwa area. Residential solar, agricultural solutions, ₹78,000 subsidy, 25-year warranty. 150+ installations.",
  
  aboutContent: `Welcome to Sindhrot's trusted solar installation provider. We specialize in solar installation in Sindhrot, Vadodara, serving this scenic area near Ajwa Garden and dam. Sindhrot offers excellent solar conditions with its spacious properties and sunny climate. Our solar installation in Sindhrot, Vadodara delivers reliable and affordable energy solutions.

Solar installation in Sindhrot, Vadodara is ideal for the area's character. From farmhouses and residential properties to agricultural lands, Sindhrot provides excellent solar potential. Our expertise ensures optimal solar installation in Sindhrot, Vadodara for all property types.

**Sindhrot: Scenic Area with Solar Potential**

Sindhrot's characteristics:
- Near Ajwa Garden and Dam
- Scenic residential area
- Agricultural surroundings
- Farmhouses and bungalows
- Excellent sunshine conditions

This peaceful character makes solar installation in Sindhrot, Vadodara attractive for homes and farms.

**Why Sindhrot Chooses Solar**

Sindhrot residents value:
- Electricity cost reduction
- Agricultural pump solutions
- Energy independence
- Government subsidies
- Sustainable living

Our solar installation in Sindhrot, Vadodara delivers these benefits.

**Our Sindhrot Experience**

With 150+ successful installations, we understand solar installation in Sindhrot, Vadodara. We've served:
- Farmhouses
- Residential bungalows
- Agricultural properties
- Resort facilities

**Pricing**

**Residential:**
| System | Cost | Subsidy | Net Cost |
|--------|------|---------|----------|
| 3kW | ₹1,82,000 | ₹78,000 | ₹1,04,000 |
| 5kW | ₹2,85,000 | ₹78,000 | ₹2,07,000 |
| 10kW | ₹5,50,000 | ₹78,000 | ₹4,72,000 |

**Government Schemes**

- PM Surya Ghar: Up to ₹78,000 for homes
- PM KUSUM: Subsidized agricultural solar

**Types of Systems**

**Residential Solar Installation in Sindhrot, Vadodara**
Grid-connected and hybrid systems for homes.

**Agricultural Solar in Sindhrot, Vadodara**
Solar pumps with PM KUSUM benefits.

**Off-Grid Solar**
Independent systems for remote properties.

**Farmhouse Solar**
Large systems for farmhouses with battery backup.

**Customer Testimonials**

⭐⭐⭐⭐⭐ *"Beautiful solar installation for our farmhouse near Sindhrot!"* - Farmhouse Owner

⭐⭐⭐⭐⭐ *"Solar pump works great for our agricultural land!"* - Farmer, Sindhrot

**Nearby Areas**

We serve: ${areaLinks}

**Related Services**

Explore: ${keywordLinks}

**Contact Us**

Ready for solar installation in Sindhrot, Vadodara?

Contact us for a free site assessment!`,

  faqs: [
    {
      question: "What is solar cost in Sindhrot?",
      answer: "Solar costs ₹1,04,000 for 3kW to ₹4,72,000 for 10kW after government subsidy."
    },
    {
      question: "Do you provide farmhouse solar?",
      answer: "Yes, we specialize in farmhouse solar with larger systems and battery backup."
    },
    {
      question: "Is agricultural solar available?",
      answer: "Yes, we provide solar pumps with PM KUSUM subsidies."
    },
    {
      question: "How much can Sindhrot homes save?",
      answer: "Sindhrot homes save 80-90% on electricity with solar."
    },
    {
      question: "Is off-grid solar available?",
      answer: "Yes, off-grid solar is available for remote properties."
    },
    {
      question: "What warranty is provided?",
      answer: "25-year panel warranty, 5-year inverter warranty."
    },
    {
      question: "Is hybrid solar available?",
      answer: "Yes, hybrid solar with battery backup for power independence."
    },
    {
      question: "How long does installation take?",
      answer: "Residential: 1-2 days. Larger systems: 2-4 days."
    },
    {
      question: "Do you handle subsidy?",
      answer: "Yes, we process PM Surya Ghar and PM KUSUM subsidies."
    },
    {
      question: "Is EMI available?",
      answer: "Yes, EMI starts at ₹1,599/month with zero down payment."
    }
  ],

  whyChooseUs: [
    "150+ installations in Sindhrot area",
    "Farmhouse solar expertise",
    "Agricultural solar specialists",
    "Off-grid capabilities",
    "Complete subsidy handling",
    "25-year warranty",
    "Hybrid solar options",
    "Local presence",
    "Quality components",
    "Reliable support"
  ],

  services: [
    {
      title: "Residential Solar",
      description: "Rooftop solar for Sindhrot homes."
    },
    {
      title: "Farmhouse Solar",
      description: "Large systems for farmhouses."
    },
    {
      title: "Agricultural Solar",
      description: "Solar pumps with PM KUSUM."
    },
    {
      title: "Hybrid Solar",
      description: "Grid + battery for backup."
    },
    {
      title: "Off-Grid Solar",
      description: "Independent solar systems."
    },
    {
      title: "Solar Maintenance",
      description: "Maintenance services."
    }
  ]
};
