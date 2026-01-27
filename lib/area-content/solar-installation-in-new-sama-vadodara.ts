import { PageContentInput } from "../content-generator";
import { vadodaraAreas, getAreaDisplayName } from "../business-config";
import { solarKeywords } from "../keywords-config";

const nearbyAreas = ["solar-installation-in-vadodara", "solar-installation-in-sama-vadodara", "solar-installation-in-waghodia-vadodara", "solar-installation-in-gotri-vadodara", "solar-installation-in-harni-vadodara"];
const areaLinks = nearbyAreas.map(area => `<a href="/${area}" class="text-orange-600 hover:underline">${getAreaDisplayName(area)}</a>`).join(", ");
const keywordLinks = solarKeywords.slice(0, 12).map(kw => `<a href="/${kw.slug}" class="text-orange-600 hover:underline">${kw.title}</a>`).join(", ");

export const solarInstallationInNewSamaVadodaraContent: PageContentInput = {
  heroTitle: "Solar Installation in New Sama, Vadodara | Modern Township Solar",
  heroSubtitle: "Expert solar installation in New Sama, Vadodara for the planned residential area. ₹78,000 government subsidy, 25-year warranty, 350+ installations. New Sama's trusted solar provider.",
  
  aboutContent: `Welcome to New Sama's reliable solar installation provider. We specialize in solar installation in New Sama, Vadodara, serving this well-planned residential extension of Sama. New Sama features modern housing developments with excellent infrastructure, making it ideal for solar adoption. Our solar installation in New Sama, Vadodara helps residents achieve energy savings.

Solar installation in New Sama, Vadodara is particularly suited for the area's modern constructions. With planned layouts, spacious plots, and quality housing, New Sama offers excellent conditions for solar. Our expertise ensures optimal solar installation in New Sama, Vadodara for all properties.

**New Sama: Planned Residential Excellence**

New Sama's characteristics:
- Planned residential development
- Modern housing construction
- Good infrastructure
- Young family demographic
- Growing community

This modern character makes solar installation in New Sama, Vadodara natural for progressive homeowners.

**Why New Sama Chooses Solar**

New Sama residents value:
- Modern sustainable living
- Cost savings
- Long-term investment
- Quality amenities
- Environmental responsibility

Our solar installation in New Sama, Vadodara delivers on these priorities.

**Our New Sama Experience**

With 350+ successful installations, we understand solar installation in New Sama, Vadodara. Our portfolio includes:
- Modern bungalows
- Row houses
- Township homes
- Society developments
- New constructions

**Pricing for Solar Installation in New Sama, Vadodara**

Competitive rates for New Sama:

| System | Cost | Subsidy | Net Cost |
|--------|------|---------|----------|
| 2kW | ₹1,30,000 | ₹60,000 | ₹70,000 |
| 3kW | ₹1,85,000 | ₹78,000 | ₹1,07,000 |
| 4kW | ₹2,40,000 | ₹78,000 | ₹1,62,000 |
| 5kW | ₹2,90,000 | ₹78,000 | ₹2,12,000 |

**Government Subsidy**

PM Surya Ghar for solar installation in New Sama, Vadodara:
- Up to ₹78,000 subsidy
- Direct bank transfer
- Complete documentation handled

**Quality Components**

Every solar installation in New Sama, Vadodara includes:
- High-efficiency 540W panels
- Smart inverters with monitoring
- Durable mounting structures
- Quality accessories

**Types of Systems**

**On-Grid Solar Installation in New Sama, Vadodara**
Grid-connected systems with net metering for maximum savings.

**Hybrid Solar Installation in New Sama, Vadodara**
Grid + battery for power backup needs.

**New Construction Integration**
Solar design integration during home construction.

**Installation Process**

Simple process for solar installation in New Sama, Vadodara:
1. Free site assessment
2. Custom design
3. Documentation handling
4. 1-day installation
5. Commissioning

**Savings for New Sama Families**

| Bill | System | Monthly Save | Annual Save |
|------|--------|--------------|-------------|
| ₹3,000 | 2kW | ₹2,700 | ₹32,400 |
| ₹4,500 | 3kW | ₹4,050 | ₹48,600 |
| ₹6,000 | 4kW | ₹5,400 | ₹64,800 |

**EMI Options**

Affordable EMI for solar installation in New Sama, Vadodara:
- **₹1,199/month** for 2kW
- **₹1,699/month** for 3kW
- **Zero Down Payment** available

**Customer Testimonials**

⭐⭐⭐⭐⭐ *"Excellent solar installation in New Sama. Modern system, great savings!"* - Kumar Family, New Sama

⭐⭐⭐⭐⭐ *"Professional service. Very satisfied with solar installation in New Sama."* - Patel Family, New Sama Road

**Nearby Areas**

We serve: ${areaLinks}

**Related Services**

Explore: ${keywordLinks}

**Contact Us**

Ready for solar installation in New Sama, Vadodara?

Contact us for a free site visit. Join 350+ New Sama families enjoying solar savings!`,

  faqs: [
    {
      question: "What is the cost of solar installation in New Sama, Vadodara?",
      answer: "Solar installation in New Sama costs ₹70,000 for 2kW to ₹2,12,000 for 5kW after government subsidy."
    },
    {
      question: "Is solar suitable for new homes in New Sama?",
      answer: "Yes, new homes in New Sama are ideal for solar installation with modern rooftops."
    },
    {
      question: "How much can New Sama families save?",
      answer: "New Sama families save 80-90% on electricity with appropriate solar installation."
    },
    {
      question: "Is EMI available for New Sama?",
      answer: "Yes, EMI starts at ₹1,199/month with zero down payment for solar installation in New Sama."
    },
    {
      question: "Do you handle subsidy?",
      answer: "Yes, we process complete PM Surya Ghar subsidy – up to ₹78,000 for solar installation in New Sama."
    },
    {
      question: "How long does installation take?",
      answer: "Solar installation in New Sama takes 1 day. Complete process takes 4-6 weeks."
    },
    {
      question: "What warranty is provided?",
      answer: "25-year panel warranty, 5-year inverter warranty, and 5-year installation warranty."
    },
    {
      question: "Is smart monitoring included?",
      answer: "Yes, all solar installation in New Sama includes Wi-Fi monitoring with smartphone apps."
    },
    {
      question: "Can you integrate solar during construction?",
      answer: "Yes, we coordinate solar installation during new home construction in New Sama."
    },
    {
      question: "Is hybrid solar available?",
      answer: "Yes, hybrid solar installation with battery backup is available in New Sama."
    }
  ],

  whyChooseUs: [
    "350+ installations in New Sama",
    "Modern home expertise",
    "Complete subsidy handling",
    "25-year panel warranty",
    "Smart monitoring included",
    "Easy EMI options",
    "Quick installation",
    "New construction integration",
    "Local presence",
    "Reliable support"
  ],

  services: [
    {
      title: "Residential Solar Installation",
      description: "Quality rooftop solar for New Sama homes with subsidy."
    },
    {
      title: "New Home Solar Integration",
      description: "Solar design during construction for optimal integration."
    },
    {
      title: "On-Grid Solar Systems",
      description: "Grid-connected solar with net metering for savings."
    },
    {
      title: "Hybrid Solar Systems",
      description: "Grid + battery for backup power needs."
    },
    {
      title: "Society Solar",
      description: "Group installations for New Sama societies."
    },
    {
      title: "Solar Maintenance",
      description: "Maintenance services for New Sama solar systems."
    }
  ]
};
