import { PageContentInput } from "../content-generator";
import { vadodaraAreas, getAreaDisplayName } from "../business-config";
import { solarKeywords } from "../keywords-config";

const nearbyAreas = ["solar-installation-in-vadodara", "solar-installation-in-bhayli-vadodara", "solar-installation-in-gotri-vadodara", "solar-installation-in-chhani-vadodara", "solar-installation-in-harni-vadodara"];
const areaLinks = nearbyAreas.map(area => `<a href="/${area}" class="text-orange-600 hover:underline">${getAreaDisplayName(area)}</a>`).join(", ");
const keywordLinks = solarKeywords.slice(0, 12).map(kw => `<a href="/${kw.slug}" class="text-orange-600 hover:underline">${kw.title}</a>`).join(", ");

export const solarInstallationInSevasiVadodaraContent: PageContentInput = {
  heroTitle: "Solar Installation in Sevasi, Vadodara | Modern Township Solar Experts",
  heroSubtitle: "Quality solar installation in Sevasi, Vadodara for the emerging residential belt. ₹78,000 government subsidy, 25-year warranty, 380+ installations. Sevasi's trusted solar partner.",
  
  aboutContent: `Welcome to Sevasi's reliable solar installation provider. We deliver professional solar installation in Sevasi, Vadodara, serving this rapidly emerging residential area. Sevasi, strategically located near the Vadodara-Ahmedabad highway, has become a hotspot for modern residential development. Our solar installation in Sevasi, Vadodara helps these new communities embrace sustainable energy.

Solar installation in Sevasi, Vadodara is particularly suited for the area's modern developments. With new townships, planned communities, and spacious properties, Sevasi offers excellent conditions for solar adoption. Our expertise ensures optimal solar installation in Sevasi, Vadodara for all property types.

**Sevasi: Emerging Residential Hub**

Sevasi's characteristics include:
- Modern residential townships
- New construction developments
- Proximity to NH8
- Spacious properties
- Growing infrastructure

This emerging character makes solar installation in Sevasi, Vadodara ideal for new homeowners.

**Why Sevasi Chooses Solar**

Sevasi's progressive residents value:
- Modern home amenities
- Sustainable living
- Cost savings
- Investment value
- Future-ready homes

Our solar installation in Sevasi, Vadodara delivers on these priorities.

**Our Sevasi Experience**

With 380+ successful installations, we understand solar installation in Sevasi, Vadodara well. Our portfolio includes:
- Township homes
- Independent bungalows
- Row houses
- Farmhouses
- Commercial establishments

**Pricing for Solar Installation in Sevasi, Vadodara**

Competitive rates for Sevasi:

| System | Cost | Subsidy | Net Cost |
|--------|------|---------|----------|
| 2kW | ₹1,30,000 | ₹60,000 | ₹70,000 |
| 3kW | ₹1,85,000 | ₹78,000 | ₹1,07,000 |
| 4kW | ₹2,40,000 | ₹78,000 | ₹1,62,000 |
| 5kW | ₹2,90,000 | ₹78,000 | ₹2,12,000 |
| 6kW | ₹3,40,000 | ₹78,000 | ₹2,62,000 |

**Government Subsidy**

PM Surya Ghar for solar installation in Sevasi, Vadodara:
- Up to ₹78,000 subsidy
- Direct bank transfer
- We handle all paperwork

**Quality Components**

Every solar installation in Sevasi, Vadodara includes:

**High-Performance Panels:**
- 540W-550W modules
- Mono PERC technology
- 25-year warranty

**Smart Inverters:**
- Wi-Fi monitoring
- Mobile app
- 5-year warranty

**Durable Mounting:**
- Galvanized steel
- Weather resistant
- 15+ year life

**Types of Systems**

**On-Grid Solar Installation in Sevasi, Vadodara**
Grid-connected systems with net metering for maximum savings.

**Hybrid Solar Installation in Sevasi, Vadodara**
Grid + battery for areas with power fluctuations or backup needs.

**New Construction Solar**
Integrate solar installation in Sevasi, Vadodara during home construction for optimal design.

**Installation Process**

Simple process for solar installation in Sevasi, Vadodara:

1. **Free Site Assessment**
2. **Custom Proposal**
3. **Documentation Handling**
4. **Professional Installation** (1 day)
5. **Commissioning & Handover**

**Savings for Sevasi Families**

| Bill | System | Monthly Save | Annual Save |
|------|--------|--------------|-------------|
| ₹3,000 | 2kW | ₹2,700 | ₹32,400 |
| ₹4,500 | 3kW | ₹4,050 | ₹48,600 |
| ₹6,000 | 4kW | ₹5,400 | ₹64,800 |
| ₹8,000 | 5kW | ₹7,200 | ₹86,400 |

**EMI Options**

Affordable EMI for solar installation in Sevasi, Vadodara:
- **Zero Down Payment**
- **₹1,199/month** for 2kW
- **₹1,699/month** for 3kW
- **₹2,699/month** for 5kW
- **Up to 60 months** tenure

**Customer Testimonials**

⭐⭐⭐⭐⭐ *"Excellent solar installation in Sevasi. Modern panels, great monitoring app!"* - Sharma Family, Sevasi

⭐⭐⭐⭐⭐ *"Our new home in Sevasi is now solar powered. Very satisfied!"* - Kumar Family, Sevasi Township

⭐⭐⭐⭐⭐ *"Professional team, quality work. Recommended for solar installation in Sevasi."* - Patel Family, Near Sevasi

**Nearby Areas**

We serve: ${areaLinks}

**Related Services**

Explore: ${keywordLinks}

**Contact Us**

Ready for solar installation in Sevasi, Vadodara?

Contact us for a free site visit. Join 380+ Sevasi families enjoying solar savings!`,

  faqs: [
    {
      question: "What is the cost of solar installation in Sevasi, Vadodara?",
      answer: "Solar installation in Sevasi, Vadodara costs ₹70,000 for 2kW to ₹2,62,000 for 6kW after government subsidy."
    },
    {
      question: "Is solar suitable for new Sevasi township homes?",
      answer: "Yes, new homes in Sevasi townships are ideal for solar installation with modern rooftops and designs."
    },
    {
      question: "How much can Sevasi families save with solar?",
      answer: "Sevasi families save 80-90% on electricity. A ₹5,000 bill reduces to approximately ₹500 with solar."
    },
    {
      question: "Is EMI available for solar installation in Sevasi?",
      answer: "Yes, EMI for solar installation in Sevasi starts at ₹1,199/month with zero down payment."
    },
    {
      question: "Do you handle subsidy for Sevasi?",
      answer: "Yes, we process complete PM Surya Ghar subsidy – up to ₹78,000 for solar installation in Sevasi."
    },
    {
      question: "How long does installation take in Sevasi?",
      answer: "Solar installation in Sevasi takes 1 day. Complete process with approvals takes 4-6 weeks."
    },
    {
      question: "What warranty is provided?",
      answer: "Our solar installation in Sevasi includes 25-year panel warranty, 5-year inverter warranty, and 5-year installation warranty."
    },
    {
      question: "Is hybrid solar available for Sevasi?",
      answer: "Yes, we offer hybrid solar installation in Sevasi with battery backup for uninterrupted power."
    },
    {
      question: "Do you provide smart monitoring?",
      answer: "Yes, all solar installation in Sevasi includes Wi-Fi enabled inverters with smartphone monitoring apps."
    },
    {
      question: "Can you integrate solar during new home construction?",
      answer: "Yes, we coordinate solar installation in Sevasi during construction for optimal design and aesthetics."
    }
  ],

  whyChooseUs: [
    "380+ installations in Sevasi area",
    "New township expertise",
    "Complete subsidy handling",
    "25-year panel warranty",
    "Smart monitoring included",
    "Easy EMI options",
    "Quick installation",
    "Professional team",
    "New construction integration",
    "Reliable support"
  ],

  services: [
    {
      title: "Residential Solar Installation",
      description: "Quality rooftop solar for Sevasi homes with subsidy and EMI options."
    },
    {
      title: "New Home Solar Integration",
      description: "Solar design during construction for optimal integration."
    },
    {
      title: "Township Solar Programs",
      description: "Group solar installation for Sevasi societies and townships."
    },
    {
      title: "On-Grid Solar Systems",
      description: "Grid-connected solar with net metering for maximum savings."
    },
    {
      title: "Hybrid Solar Systems",
      description: "Grid + battery systems for backup power needs."
    },
    {
      title: "Solar Maintenance",
      description: "Maintenance services for Sevasi solar installations."
    }
  ]
};
