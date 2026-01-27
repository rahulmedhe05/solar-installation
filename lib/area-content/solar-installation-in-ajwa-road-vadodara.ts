import { PageContentInput } from "../content-generator";
import { vadodaraAreas, getAreaDisplayName } from "../business-config";
import { solarKeywords } from "../keywords-config";

const nearbyAreas = ["solar-installation-in-vadodara", "solar-installation-in-gorwa-vadodara", "solar-installation-in-chhani-vadodara", "solar-installation-in-bil-vadodara", "solar-installation-in-manjalpur-vadodara"];
const areaLinks = nearbyAreas.map(area => `<a href="/${area}" class="text-orange-600 hover:underline">${getAreaDisplayName(area)}</a>`).join(", ");
const keywordLinks = solarKeywords.slice(0, 12).map(kw => `<a href="/${kw.slug}" class="text-orange-600 hover:underline">${kw.title}</a>`).join(", ");

export const solarInstallationInAjwaRoadVadodaraContent: PageContentInput = {
  heroTitle: "Solar Installation in Ajwa Road, Vadodara | Garden Area Solar Experts",
  heroSubtitle: "Quality solar installation in Ajwa Road, Vadodara near the famous garden. ₹78,000 government subsidy, 25-year warranty, 360+ installations. Ajwa Road's trusted solar partner.",
  
  aboutContent: `Welcome to Ajwa Road's reliable solar installation provider. We specialize in solar installation in Ajwa Road, Vadodara, serving this scenic corridor leading to the famous Ajwa Garden. Ajwa Road features a mix of residential areas, farmhouses, and developing townships. Our solar installation in Ajwa Road, Vadodara caters to this diverse landscape.

Solar installation in Ajwa Road, Vadodara offers unique potential due to the area's semi-urban character. With larger plots, farmhouse properties, and new residential developments, Ajwa Road provides excellent conditions for solar adoption. Our expertise ensures optimal solar installation in Ajwa Road, Vadodara for all property types.

**Ajwa Road: Scenic Route with Solar Potential**

Ajwa Road's characteristics:
- Route to Ajwa Garden
- Farmhouse properties
- New residential developments
- Semi-urban landscape
- Larger plot sizes

This scenic character makes solar installation in Ajwa Road, Vadodara valuable for property owners.

**Why Ajwa Road Chooses Solar**

Ajwa Road residents value:
- Energy independence for remote properties
- Cost savings
- Sustainable living
- Long-term investment
- Modern amenities for farmhouses

Our solar installation in Ajwa Road, Vadodara delivers these benefits.

**Our Ajwa Road Experience**

With 360+ successful installations, we understand solar installation in Ajwa Road, Vadodara. Our portfolio includes:
- Farmhouses
- Residential homes
- Weekend properties
- New developments
- Agricultural lands

**Pricing for Solar Installation in Ajwa Road, Vadodara**

Competitive rates for Ajwa Road:

| System | Cost | Subsidy | Net Cost |
|--------|------|---------|----------|
| 2kW | ₹1,30,000 | ₹60,000 | ₹70,000 |
| 3kW | ₹1,85,000 | ₹78,000 | ₹1,07,000 |
| 5kW | ₹2,90,000 | ₹78,000 | ₹2,12,000 |
| 7kW | ₹3,85,000 | ₹78,000 | ₹3,07,000 |
| 10kW | ₹5,40,000 | ₹78,000 | ₹4,62,000 |

**Government Subsidy**

PM Surya Ghar for solar installation in Ajwa Road, Vadodara:
- Up to ₹78,000 subsidy
- Direct bank transfer
- Complete documentation handled

**Quality Components**

Every solar installation in Ajwa Road, Vadodara includes:
- High-efficiency panels
- Reliable inverters
- Durable mounting
- Smart monitoring

**Types of Systems**

**On-Grid Solar Installation in Ajwa Road, Vadodara**
Grid-connected systems for properties with DGVCL connection.

**Hybrid Solar Installation in Ajwa Road, Vadodara**
Grid + battery for farmhouses needing power independence.

**Off-Grid Solar Systems**
Complete off-grid solutions for remote Ajwa Road properties.

**Farmhouse Solar**
Specialized systems for weekend homes and farmhouses.

**Installation Process**

Simple process for solar installation in Ajwa Road, Vadodara:
1. Free site assessment
2. Custom design for property type
3. Documentation
4. Professional installation
5. Commissioning

**Savings Potential**

| Bill | System | Monthly Save | Annual Save |
|------|--------|--------------|-------------|
| ₹3,500 | 3kW | ₹3,150 | ₹37,800 |
| ₹5,500 | 5kW | ₹4,950 | ₹59,400 |
| ₹8,000 | 7kW | ₹7,200 | ₹86,400 |
| ₹12,000 | 10kW | ₹10,800 | ₹1,29,600 |

**EMI Options**

Flexible EMI for solar installation in Ajwa Road, Vadodara:
- **₹1,699/month** for 3kW
- **₹2,699/month** for 5kW
- **Zero Down Payment** available

**Customer Testimonials**

⭐⭐⭐⭐⭐ *"Perfect solar installation for our Ajwa Road farmhouse!"* - Farmhouse Owner

⭐⭐⭐⭐⭐ *"Great service for our home near Ajwa Garden."* - Patel Family, Ajwa Road

**Nearby Areas**

We serve: ${areaLinks}

**Related Services**

Explore: ${keywordLinks}

**Contact Us**

Ready for solar installation in Ajwa Road, Vadodara?

Contact us for a free site visit. Join 360+ Ajwa Road customers enjoying solar!`,

  faqs: [
    {
      question: "What is the cost of solar installation in Ajwa Road, Vadodara?",
      answer: "Solar installation in Ajwa Road costs ₹70,000 for 2kW to ₹4,62,000 for 10kW after government subsidy."
    },
    {
      question: "Do you provide farmhouse solar installation in Ajwa Road?",
      answer: "Yes, we specialize in farmhouse solar installation with both grid-connected and off-grid options."
    },
    {
      question: "Is off-grid solar available for remote Ajwa Road properties?",
      answer: "Yes, we provide off-grid solar installation with battery storage for remote properties."
    },
    {
      question: "How much can Ajwa Road properties save?",
      answer: "Properties save 80-90% on electricity with appropriate solar installation."
    },
    {
      question: "Is EMI available?",
      answer: "Yes, EMI starts at ₹1,699/month with zero down payment for solar installation in Ajwa Road."
    },
    {
      question: "Do you handle subsidy?",
      answer: "Yes, we process complete PM Surya Ghar subsidy – up to ₹78,000 for solar installation in Ajwa Road."
    },
    {
      question: "What warranty is provided?",
      answer: "25-year panel warranty, 5-year inverter warranty, and 5-year installation warranty."
    },
    {
      question: "Can larger farmhouse systems be installed?",
      answer: "Yes, we install systems from 3kW to 50kW+ for large Ajwa Road farmhouses."
    },
    {
      question: "Is hybrid solar available?",
      answer: "Yes, hybrid solar with battery backup is ideal for Ajwa Road farmhouses."
    },
    {
      question: "How long does installation take?",
      answer: "Residential: 1-2 days. Larger farmhouse systems: 2-5 days."
    }
  ],

  whyChooseUs: [
    "360+ installations in Ajwa Road area",
    "Farmhouse solar expertise",
    "On-grid, off-grid, hybrid options",
    "Complete subsidy handling",
    "25-year panel warranty",
    "Larger system capability",
    "Easy EMI options",
    "Professional service",
    "Local presence",
    "Reliable support"
  ],

  services: [
    {
      title: "Residential Solar Installation",
      description: "Quality rooftop solar for Ajwa Road homes."
    },
    {
      title: "Farmhouse Solar",
      description: "Specialized solar for farmhouses and weekend properties."
    },
    {
      title: "Off-Grid Solar",
      description: "Complete off-grid systems for remote properties."
    },
    {
      title: "Hybrid Solar",
      description: "Grid + battery for power independence."
    },
    {
      title: "Large Capacity Solar",
      description: "High-capacity systems for large properties."
    },
    {
      title: "Solar Maintenance",
      description: "Maintenance for Ajwa Road solar systems."
    }
  ]
};
