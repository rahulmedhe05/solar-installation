import { PageContentInput } from "../content-generator";
import { vadodaraAreas, getAreaDisplayName } from "../business-config";
import { solarKeywords } from "../keywords-config";

const nearbyAreas = ["solar-installation-in-vadodara", "solar-installation-in-tarsali-vadodara", "solar-installation-in-manjalpur-vadodara", "solar-installation-in-dabhoi-road-vadodara", "solar-installation-in-padra-vadodara"];
const areaLinks = nearbyAreas.map(area => `<a href="/${area}" class="text-orange-600 hover:underline">${getAreaDisplayName(area)}</a>`).join(", ");
const keywordLinks = solarKeywords.slice(0, 12).map(kw => `<a href="/${kw.slug}" class="text-orange-600 hover:underline">${kw.title}</a>`).join(", ");

export const solarInstallationInDabhoiRoadVadodaraContent: PageContentInput = {
  heroTitle: "Solar Installation in Dabhoi Road, Vadodara | Industrial & Residential Solar",
  heroSubtitle: "Expert solar installation in Dabhoi Road, Vadodara for the industrial corridor. ₹78,000 residential subsidy, industrial solutions, 25-year warranty. 380+ installations on Dabhoi Road.",
  
  aboutContent: `Welcome to Dabhoi Road's comprehensive solar installation provider. We specialize in solar installation in Dabhoi Road, Vadodara, serving this important industrial and commercial corridor. Dabhoi Road connects Vadodara to Dabhoi and features significant industrial activity alongside residential developments. Our solar installation in Dabhoi Road, Vadodara caters to both segments.

Solar installation in Dabhoi Road, Vadodara offers excellent potential for industries seeking operational cost reduction and residents seeking energy savings. The corridor's mix of manufacturing units, warehouses, and residential areas creates diverse opportunities. Our expertise ensures optimal solar installation in Dabhoi Road, Vadodara.

**Dabhoi Road: Industrial Corridor**

Dabhoi Road's characteristics:
- Major industrial corridor
- Manufacturing and warehouses
- Residential developments
- Commercial establishments
- Growing infrastructure

This industrial character makes solar installation in Dabhoi Road, Vadodara impactful for businesses.

**Why Dabhoi Road Chooses Solar**

Property owners on Dabhoi Road value:
- Industrial cost reduction
- Residential savings
- Tax benefits for industries
- Environmental compliance
- Long-term investment

Our solar installation in Dabhoi Road, Vadodara delivers these benefits.

**Our Dabhoi Road Experience**

With 380+ successful installations, we understand solar installation in Dabhoi Road, Vadodara. Our portfolio includes:
- Manufacturing units
- Warehouses
- Residential homes
- Commercial establishments

**Pricing for Solar Installation in Dabhoi Road, Vadodara**

**Residential:**
| System | Cost | Subsidy | Net Cost |
|--------|------|---------|----------|
| 2kW | ₹1,28,000 | ₹60,000 | ₹68,000 |
| 3kW | ₹1,82,000 | ₹78,000 | ₹1,04,000 |
| 5kW | ₹2,85,000 | ₹78,000 | ₹2,07,000 |

**Industrial/Commercial:**
| Capacity | Cost | Monthly Savings |
|----------|------|-----------------|
| 25kW | ₹12,50,000 | ₹32,000+ |
| 50kW | ₹24,00,000 | ₹65,000+ |
| 100kW | ₹46,00,000 | ₹1,30,000+ |

**Government Benefits**

**Residential:** PM Surya Ghar up to ₹78,000 subsidy

**Industrial:**
- 40% accelerated depreciation
- Tax benefits
- Operational cost reduction

**Quality Components**

Every solar installation in Dabhoi Road, Vadodara includes:
- High-efficiency panels
- Industrial-grade inverters
- Durable mounting
- SCADA monitoring for industries

**Types of Systems**

**Industrial Solar Installation in Dabhoi Road, Vadodara**
Large-scale rooftop systems for factories and warehouses.

**Residential Solar Installation in Dabhoi Road, Vadodara**
Grid-connected systems for homes with net metering.

**Commercial Solar**
Systems for offices and commercial establishments.

**Installation Process**

**Industrial:**
1. Technical assessment
2. Feasibility study
3. Engineering design
4. Installation (1-4 weeks)
5. Commissioning

**Residential:**
1. Site visit
2. Quote
3. 1-day installation
4. Commissioning

**Savings Potential**

**Residential:**
| Bill | System | Monthly Save |
|------|--------|--------------|
| ₹3,000 | 2kW | ₹2,700 |
| ₹4,500 | 3kW | ₹4,050 |

**Industrial:**
| Capacity | Monthly Save | Annual Save |
|----------|--------------|-------------|
| 50kW | ₹65,000 | ₹7,80,000 |
| 100kW | ₹1,30,000 | ₹15,60,000 |

**Customer Testimonials**

⭐⭐⭐⭐⭐ *"Our factory's solar installation on Dabhoi Road saves lakhs annually!"* - Manufacturing Unit

⭐⭐⭐⭐⭐ *"Great residential solar installation on Dabhoi Road."* - Home Owner

**Nearby Areas**

We serve: ${areaLinks}

**Related Services**

Explore: ${keywordLinks}

**Contact Us**

Ready for solar installation in Dabhoi Road, Vadodara?

Contact us for a free assessment!`,

  faqs: [
    {
      question: "What is the cost of industrial solar on Dabhoi Road?",
      answer: "Industrial solar costs approximately ₹46 lakhs for 100kW with 3-year payback and ₹1.3 lakh monthly savings."
    },
    {
      question: "What is residential solar cost on Dabhoi Road?",
      answer: "Residential solar costs ₹68,000 for 2kW to ₹2,07,000 for 5kW after subsidy."
    },
    {
      question: "Do industries get tax benefits?",
      answer: "Yes, industrial solar qualifies for 40% accelerated depreciation and other tax benefits."
    },
    {
      question: "How much can industries save?",
      answer: "Industries save 60-70% on electricity. A 100kW system saves ₹1.3 lakh+ monthly."
    },
    {
      question: "Is residential subsidy available?",
      answer: "Yes, PM Surya Ghar provides up to ₹78,000 subsidy for residential solar."
    },
    {
      question: "What warranty is provided?",
      answer: "25-year panel warranty, 5-10 year inverter warranty, and installation warranty."
    },
    {
      question: "How long does industrial installation take?",
      answer: "Industrial solar takes 1-4 weeks depending on capacity."
    },
    {
      question: "Do you provide OPEX models?",
      answer: "Yes, OPEX/lease models available for industrial solar with zero investment."
    },
    {
      question: "Is residential EMI available?",
      answer: "Yes, EMI starts at ₹1,099/month with zero down payment."
    },
    {
      question: "Do you handle all documentation?",
      answer: "Yes, we process all approvals, subsidies, and permits."
    }
  ],

  whyChooseUs: [
    "380+ installations on Dabhoi Road",
    "Industrial solar specialists",
    "Residential and commercial expertise",
    "Complete documentation handling",
    "25-year warranties",
    "Tax benefit guidance",
    "OPEX options for industries",
    "Professional execution",
    "Local presence",
    "Comprehensive support"
  ],

  services: [
    {
      title: "Industrial Solar Installation",
      description: "Large-scale solar for factories and warehouses on Dabhoi Road."
    },
    {
      title: "Residential Solar",
      description: "Rooftop solar for homes with subsidy."
    },
    {
      title: "Commercial Solar",
      description: "Solar for offices and businesses."
    },
    {
      title: "OPEX Solar",
      description: "Zero-investment lease model for industries."
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
