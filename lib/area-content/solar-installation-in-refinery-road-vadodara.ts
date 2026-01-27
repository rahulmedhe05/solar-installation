import { PageContentInput } from "../content-generator";
import { vadodaraAreas, getAreaDisplayName } from "../business-config";
import { solarKeywords } from "../keywords-config";

const nearbyAreas = ["solar-installation-in-vadodara", "solar-installation-in-gorwa-vadodara", "solar-installation-in-makarpura-vadodara", "solar-installation-in-nandesari-vadodara", "solar-installation-in-halol-road-vadodara"];
const areaLinks = nearbyAreas.map(area => `<a href="/${area}" class="text-orange-600 hover:underline">${getAreaDisplayName(area)}</a>`).join(", ");
const keywordLinks = solarKeywords.slice(0, 12).map(kw => `<a href="/${kw.slug}" class="text-orange-600 hover:underline">${kw.title}</a>`).join(", ");

export const solarInstallationInRefineryRoadVadodaraContent: PageContentInput = {
  heroTitle: "Solar Installation in Refinery Road, Vadodara | IOCL Area Solar",
  heroSubtitle: "Expert solar installation on Refinery Road, Vadodara near IOCL refinery. Residential and commercial solar, ₹78,000 subsidy, 25-year warranty. 180+ installations.",
  
  aboutContent: `Welcome to Refinery Road's trusted solar installation provider. We specialize in solar installation in Refinery Road, Vadodara, serving the area near IOCL refinery. Refinery Road features a mix of residential colonies and commercial establishments, creating excellent solar opportunities. Our solar installation in Refinery Road, Vadodara delivers reliable energy solutions.

Solar installation in Refinery Road, Vadodara is ideal for the area's residential and commercial properties. The proximity to IOCL and industrial areas makes energy cost a priority. Our expertise ensures optimal solar installation in Refinery Road, Vadodara with maximum benefits.

**Refinery Road: Industrial-Residential Mix**

Refinery Road's characteristics:
- Near IOCL Refinery
- Residential colonies
- Commercial establishments
- Well-connected area
- Mix of property types

This character makes solar installation in Refinery Road, Vadodara valuable for residents and businesses.

**Why Refinery Road Chooses Solar**

Refinery Road residents value:
- Electricity cost reduction
- Energy independence
- Government subsidies
- Long-term savings
- Sustainable living

Our solar installation in Refinery Road, Vadodara delivers these benefits.

**Our Refinery Road Experience**

With 180+ successful installations, we understand solar installation in Refinery Road, Vadodara. We've served:
- Residential homes
- IOCL colony residences
- Commercial establishments
- Small businesses

**Pricing**

**Residential:**
| System | Cost | Subsidy | Net Cost |
|--------|------|---------|----------|
| 2kW | ₹1,28,000 | ₹60,000 | ₹68,000 |
| 3kW | ₹1,82,000 | ₹78,000 | ₹1,04,000 |
| 5kW | ₹2,85,000 | ₹78,000 | ₹2,07,000 |

**Commercial:**
| Capacity | Cost | Monthly Savings |
|----------|------|-----------------|
| 10kW | ₹5,50,000 | ₹15,000+ |
| 25kW | ₹12,50,000 | ₹35,000+ |

**Savings**

| Bill | System | Monthly Save | Annual Save |
|------|--------|--------------|-------------|
| ₹3,000 | 3kW | ₹2,700 | ₹32,400 |
| ₹4,500 | 4kW | ₹4,000 | ₹48,000 |
| ₹6,000 | 5kW | ₹5,400 | ₹64,800 |

**Types of Systems**

**Residential Solar Installation on Refinery Road, Vadodara**
Grid-connected systems with net metering for homes.

**Commercial Solar**
Solar systems for businesses and commercial establishments.

**Hybrid Solar**
Grid + battery for backup requirements.

**Customer Testimonials**

⭐⭐⭐⭐⭐ *"Great solar installation in our IOCL colony home!"* - IOCL Employee

⭐⭐⭐⭐⭐ *"Commercial solar reduced our shop's electricity costs!"* - Shop Owner, Refinery Road

**Nearby Areas**

We serve: ${areaLinks}

**Related Services**

Explore: ${keywordLinks}

**Contact Us**

Ready for solar installation on Refinery Road, Vadodara?

Contact us for a free site assessment!`,

  faqs: [
    {
      question: "What is residential solar cost on Refinery Road?",
      answer: "Solar costs ₹68,000 for 2kW to ₹2,07,000 for 5kW after government subsidy."
    },
    {
      question: "What is commercial solar cost?",
      answer: "Commercial solar costs ₹5.5 lakhs for 10kW with ₹15,000+ monthly savings."
    },
    {
      question: "Is EMI available?",
      answer: "Yes, EMI starts at ₹1,099/month with zero down payment."
    },
    {
      question: "How much can homes save?",
      answer: "Homes save 80-90% on electricity. A 3kW system saves ₹2,700+ monthly."
    },
    {
      question: "Do you handle subsidy?",
      answer: "Yes, we process PM Surya Ghar subsidy up to ₹78,000."
    },
    {
      question: "What warranty is provided?",
      answer: "25-year panel warranty, 5-year inverter warranty."
    },
    {
      question: "How long does installation take?",
      answer: "Residential: 1 day. Commercial: 2-3 days."
    },
    {
      question: "Is hybrid solar available?",
      answer: "Yes, hybrid solar with battery backup is available."
    },
    {
      question: "Do you serve IOCL colony?",
      answer: "Yes, we have served several homes in IOCL colony."
    },
    {
      question: "Can commercial units get subsidy?",
      answer: "Commercial units don't get PM Surya Ghar subsidy but can benefit from depreciation."
    }
  ],

  whyChooseUs: [
    "180+ installations on Refinery Road",
    "Residential expertise",
    "Commercial solutions",
    "IOCL colony experience",
    "Complete subsidy handling",
    "25-year warranty",
    "Easy EMI",
    "Local presence",
    "Quality components",
    "Reliable support"
  ],

  services: [
    {
      title: "Residential Solar",
      description: "Rooftop solar for homes."
    },
    {
      title: "Commercial Solar",
      description: "Solar for shops and businesses."
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
      title: "Solar Financing",
      description: "Easy EMI options."
    },
    {
      title: "Solar Maintenance",
      description: "Maintenance services."
    }
  ]
};
