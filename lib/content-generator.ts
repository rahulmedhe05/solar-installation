import { getAreaDisplayName } from "./business-config";
import { getAreaContent } from "./area-content";

// Input interface that accepts both field name variants
export interface PageContentInput {
  heroTitle: string;
  heroSubtitle: string;
  aboutContent: string;
  whyChooseUs: string[];
  // Support both field names for compatibility
  detailedServices?: { title: string; description: string }[];
  services?: { title: string; description: string }[];
  areaSpecificContent?: string;
  faqItems?: { question: string; answer: string }[];
  faqs?: { question: string; answer: string }[];
  processSteps?: { title: string; description: string }[];
}

// Normalized output interface with guaranteed fields
export interface PageContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutContent: string;
  whyChooseUs: string[];
  detailedServices: { title: string; description: string }[];
  services?: { title: string; description: string }[];
  areaSpecificContent: string;
  faqItems: { question: string; answer: string }[];
  faqs?: { question: string; answer: string }[];
  processSteps: { title: string; description: string }[];
}

// Helper to normalize content fields
export function normalizeContent(content: PageContentInput): PageContent {
  return {
    heroTitle: content.heroTitle,
    heroSubtitle: content.heroSubtitle,
    aboutContent: content.aboutContent,
    whyChooseUs: content.whyChooseUs,
    detailedServices: content.detailedServices || content.services || [],
    faqItems: content.faqItems || content.faqs || [],
    areaSpecificContent: content.areaSpecificContent || "",
    processSteps: content.processSteps || [
      { title: "Site Survey", description: "Free assessment of your property for solar installation" },
      { title: "System Design", description: "Custom solar system designed for your needs" },
      { title: "Installation", description: "Professional installation by certified technicians" },
      { title: "Grid Connection", description: "Net metering setup and system commissioning" },
    ],
  };
}

// Solar Installation Content - Check for unique area content first
export function getSolarInstallationContent(area: string): PageContent {
  // Check if we have unique content for this area
  const uniqueContent = getAreaContent(area);
  if (uniqueContent) {
    return normalizeContent(uniqueContent);
  }
  
  // Fallback to generated content
  const areaName = getAreaDisplayName(area);
  const isMainVadodara = area === "solar-installation-in-vadodara" || area === "vadodara" || areaName === "Vadodara";
  const locationText = isMainVadodara ? "Vadodara" : `${areaName}, Vadodara`;
  
  return {
    heroTitle: `Best Solar Panel Installation in ${locationText}`,
    heroSubtitle: `Go solar and save up to 90% on electricity bills with our premium solar installation services in ${locationText}. Expert installation with government subsidies.`,
    aboutContent: `Welcome to Gujarat's leading solar energy company providing world-class solar panel installation services in ${locationText}. With the rising electricity costs and growing environmental concerns, solar energy has become the smartest choice for homes and businesses. Our company has been at the forefront of the solar revolution in Vadodara, helping thousands of customers switch to clean, renewable energy.

As authorized solar installers in ${areaName}, we offer complete solar solutions including residential rooftop solar systems, commercial solar installations, and industrial solar power plants. We are empaneled with GUVNL (Gujarat Urja Vikas Nigam Limited) and help our customers avail government subsidies of up to ₹78,000 on residential solar installations under the PM Surya Ghar Muft Bijli Yojana.

Our solar panels in ${areaName} are sourced from India's top manufacturers and come with 25-year performance warranty. We use only high-efficiency monocrystalline and polycrystalline solar panels that deliver maximum power output even in Gujarat's varying weather conditions. Our solar inverters are from trusted brands like Growatt, Havells, Luminous, and Delta, ensuring reliable performance for decades.

What makes us the preferred solar company in ${areaName} is our end-to-end service approach. From initial site assessment and system design to installation, net metering, and after-sales service, we handle everything. Our certified solar engineers conduct thorough roof analysis, shadow assessment, and load calculation to design the optimal system size for your property.

We have successfully completed 2000+ solar installations across Vadodara, including many in ${areaName}. Our installations range from 1 kW residential systems to 500 kW industrial power plants. Each installation is done by our trained technicians following the highest safety standards and best practices recommended by MNRE (Ministry of New and Renewable Energy).

The solar system we install in your ${areaName} property will generate free electricity for 25+ years with minimal maintenance. Our customers typically see ROI within 4-5 years, after which they enjoy virtually free electricity. With net metering, you can even sell excess power back to GUVNL and earn credits on your electricity bill.`,
    
    whyChooseUs: [
      "GUVNL empaneled solar installer in Vadodara",
      "2000+ successful solar installations completed",
      "Premium solar panels with 25-year warranty",
      "Complete subsidy assistance (up to ₹78,000)",
      "Free site survey and system design",
      "Expert installation by certified engineers",
      "Net metering setup and grid connection",
      "5-year comprehensive installation warranty",
      "Dedicated after-sales service team",
      "Flexible financing options available",
    ],
    
    detailedServices: [
      {
        title: "Residential Solar Installation",
        description: `Complete rooftop solar solutions for homes in ${areaName}. Systems from 1kW to 10kW with government subsidies, perfect for reducing your monthly electricity bills.`,
      },
      {
        title: "Commercial Solar Systems",
        description: `Large-scale solar installations for offices, factories, and commercial establishments in ${areaName}. Save on operational costs and demonstrate environmental responsibility.`,
      },
      {
        title: "Industrial Solar Solutions",
        description: `High-capacity solar power plants for industries in ${areaName}. Reduce dependency on grid power and lock in electricity costs for 25 years.`,
      },
      {
        title: "Solar Panel Installation",
        description: `Expert installation of mono and poly crystalline solar panels on all roof types - RCC, metal sheets, and sloped roofs. Quality mounting structures for durability.`,
      },
      {
        title: "Solar Inverter Installation",
        description: `On-grid, off-grid, and hybrid solar inverter solutions. We recommend the best inverter type based on your requirements and grid reliability in ${areaName}.`,
      },
      {
        title: "Net Metering Setup",
        description: `Complete net metering application and installation for selling excess solar power to GUVNL. We handle all documentation and liaison with DGVCL.`,
      },
      {
        title: "Solar Subsidy Assistance",
        description: `Full support for availing central and state government subsidies on residential solar systems. We handle the entire subsidy application process.`,
      },
      {
        title: "Solar System Maintenance",
        description: `Annual maintenance contracts for optimal solar system performance. Regular cleaning, inspection, and performance monitoring for maximum generation.`,
      },
      {
        title: "Solar Water Heater",
        description: `Energy-efficient solar water heaters for homes and commercial establishments. Reduce water heating costs by up to 70% with our premium systems.`,
      },
    ],
    
    areaSpecificContent: `${areaName} receives excellent solar radiation throughout the year, making it an ideal location for solar power generation. With an average of 300+ sunny days annually, solar panels in ${areaName} can generate substantial electricity, often exceeding the household consumption.

Many residents of ${areaName} have already made the switch to solar energy and are enjoying significant savings on their electricity bills. The typical 3-4 kW residential solar system in ${areaName} generates 12-16 units of electricity per day, which is sufficient for most households with AC and other appliances.

The roof types in ${areaName} are well-suited for solar installation. Whether you have an RCC roof, metal sheet roof, or sloped roof, we have the expertise and mounting solutions to install solar panels safely and efficiently. Our installations are designed to withstand Gujarat's weather conditions including strong winds and heavy monsoon rains.

We have a dedicated service team based in Vadodara that can reach ${areaName} within hours for any maintenance or service requirements. This local presence ensures quick response times and reliable after-sales support for all our customers in the area.

The electricity tariff in Gujarat has been increasing steadily, making solar installation increasingly attractive. At current rates, a solar system in ${areaName} provides returns of 20-25% annually, far better than traditional investment options. Plus, you're contributing to a cleaner environment by reducing carbon emissions.`,
    
    faqItems: [
      {
        question: `What is the cost of solar panel installation in ${locationText}?`,
        answer: `For residential systems, the cost ranges from ₹55,000-70,000 per kW before subsidy. After government subsidies (up to ₹78,000 for up to 3kW systems), the effective cost is significantly lower. A typical 3kW system costs around ₹1.8 lakhs before subsidy.`,
      },
      {
        question: `How much government subsidy can I get for solar installation in ${locationText}?`,
        answer: `Under PM Surya Ghar Muft Bijli Yojana, you can get ₹30,000 for 1kW, ₹60,000 for 2kW, and ₹78,000 for 3kW and above residential solar systems. We handle the complete subsidy application process.`,
      },
      {
        question: `How much electricity will a solar system generate in ${locationText}?`,
        answer: `In ${areaName}'s sunny climate, a 1kW solar system generates approximately 4-5 units per day on average, totaling 1400-1500 units annually. A 3kW system typically generates 12-15 units daily.`,
      },
      {
        question: `What is the warranty on solar panels and installation?`,
        answer: `Solar panels come with 25-year performance warranty from manufacturers. Inverters typically have 5-10 year warranty. We provide 5-year comprehensive warranty on installation workmanship.`,
      },
      {
        question: `What is net metering and how does it work?`,
        answer: `Net metering allows you to export excess solar power to the grid and get credits on your electricity bill. Your meter runs backward when you export power and forward when you consume grid power. You pay only for net consumption.`,
      },
      {
        question: `How long does solar installation take in ${locationText}?`,
        answer: `Physical installation takes 1-2 days for residential systems. However, the complete process including site survey, design, permissions, and net metering setup takes about 30-45 days.`,
      },
    ],
    
    processSteps: [
      {
        title: "Site Survey",
        description: "Free site visit to assess roof condition, shadow analysis, and system sizing",
      },
      {
        title: "Design & Quote",
        description: "Custom system design with detailed quotation and subsidy calculation",
      },
      {
        title: "Installation",
        description: "Professional installation by certified engineers with safety compliance",
      },
      {
        title: "Grid Connection",
        description: "Net metering setup, DGVCL liaison, and system commissioning",
      },
    ],
  };
}

// Main content getter function
export function getBusinessContent(businessSlug: string, area: string): PageContent {
  // Only solar installation is supported
  const content = getSolarInstallationContent(area);
  return normalizeContent(content);
}

// Keyword page content generator
import { KeywordConfig } from "./keywords-config";

export interface KeywordPageContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutContent: string;
  whyChooseUs: string[];
  detailedServices: { title: string; description: string }[];
  areaSpecificContent: string;
  faqItems: { question: string; answer: string }[];
  processSteps: { title: string; description: string }[];
}

const keyTakeaways: Record<string, string> = {
  "solar-panel-price-vadodara": `
<div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-6 rounded-r-xl shadow-sm">
  <p class="text-orange-800 font-bold text-lg mb-2">⚡ Direct Answer (Key Takeaway):</p>
  <p class="text-gray-700 text-base leading-relaxed">
    The average cost of a <strong>3kW residential solar system in Vadodara is ₹1,17,000</strong> after applying the maximum government subsidy of <strong>₹78,000</strong> (gross price is ₹1,95,000). A 1kW system starts at <strong>₹45,000</strong> after a ₹30,000 subsidy. Homeowners typically achieve a full return on investment (ROI) within 3 to 4 years, enjoying free electricity thereafter.
  </p>
</div>
`,
  "solar-subsidy-vadodara": `
<div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-6 rounded-r-xl shadow-sm">
  <p class="text-orange-800 font-bold text-lg mb-2">⚡ Direct Answer (Key Takeaway):</p>
  <p class="text-gray-700 text-base leading-relaxed">
    Under the PM Surya Ghar Muft Bijli Yojana, residential subsidies in Vadodara are: <strong>₹30,000 for 1kW</strong>, <strong>₹60,000 for 2kW</strong>, and a maximum of <strong>₹78,000 for 3kW and above</strong>. Commercial and industrial properties do not qualify for direct consumer subsidies, but can claim a 40% accelerated depreciation tax benefit.
  </p>
</div>
`,
  "pm-surya-ghar-vadodara": `
<div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-6 rounded-r-xl shadow-sm">
  <p class="text-orange-800 font-bold text-lg mb-2">⚡ Direct Answer (Key Takeaway):</p>
  <p class="text-gray-700 text-base leading-relaxed">
    The PM Surya Ghar Muft Bijli Yojana allows Vadodara residents to claim up to <strong>₹78,000 in central government subsidy</strong> for rooftop solar installations. The scheme is designed to provide <strong>300 units of free electricity per month</strong>. Homeowners must use a GUVNL-empanelled vendor like us to qualify for the subsidy disbursement.
  </p>
</div>
`,
  "solar-net-metering-vadodara": `
<div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-6 rounded-r-xl shadow-sm">
  <p class="text-orange-800 font-bold text-lg mb-2">⚡ Direct Answer (Key Takeaway):</p>
  <p class="text-gray-700 text-base leading-relaxed">
    Net metering with UGVCL/MGVCL in Vadodara allows you to export surplus electricity back to the grid. UGVCL pays a GERC-approved tariff of <strong>₹2.25 per unit</strong> for net excess power exported at the end of the annual settlement cycle. The bidirectional net meter is provided and installed by UGVCL/MGVCL.
  </p>
</div>
`,
  "solar-inverter-shop-vadodara": `
<div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-6 rounded-r-xl shadow-sm">
  <p class="text-orange-800 font-bold text-lg mb-2">⚡ Direct Answer (Key Takeaway):</p>
  <p class="text-gray-700 text-base leading-relaxed">
    We are Vadodara's authorized dealer and service centre for all major solar inverter brands including <strong>Luminous, Growatt, SolarEdge, Fronius, Delta, and Sungrow</strong>. On-grid string inverters start from <strong>₹8,000/kW</strong>, while hybrid inverters with battery management start from <strong>₹18,000/kW</strong>. We also offer same-day inverter repair and AMC services.
  </p>
</div>
`,
  "luminous-solar-panel-vadodara": `
<div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-6 rounded-r-xl shadow-sm">
  <p class="text-orange-800 font-bold text-lg mb-2">⚡ Direct Answer (Key Takeaway):</p>
  <p class="text-gray-700 text-base leading-relaxed">
    Luminous solar panels are available in Vadodara starting from <strong>₹23–27 per watt</strong>. Their popular NXG series (380W–440W) offers <strong>19–21% efficiency</strong> with a 25-year linear performance warranty. Compared to Tata Solar or Waaree, Luminous panels are priced slightly lower and are ideal for budget-conscious residential buyers who also want the reliability of a Luminous inverter in a single-brand system.
  </p>
</div>
`,
  "solar-panel-loan-vadodara": `
<div class="bg-orange-50 border-l-4 border-orange-500 p-6 my-6 rounded-r-xl shadow-sm">
  <p class="text-orange-800 font-bold text-lg mb-2">⚡ Direct Answer (Key Takeaway):</p>
  <p class="text-gray-700 text-base leading-relaxed">
    Solar panel loans in Vadodara are available from <strong>SBI, Bank of Baroda, HDFC, and approved NBFCs</strong> under the PM Surya Ghar scheme. After applying the ₹78,000 government subsidy, a 3kW system costing ₹1,17,000 can be financed at an EMI of approx. <strong>₹1,800–₹2,200/month over 5 years</strong> at 7–9% interest. We assist you with the complete loan paperwork at no extra cost.
  </p>
</div>
`
};

const pricingTableHTML = `
<h3 class="text-2xl font-bold mt-8 mb-4">Vadodara Solar Panel Price List 2026 (Before vs. After Subsidy)</h3>
<p class="mb-4">Here is the detailed cost breakdown for rooftop solar systems in Vadodara including GUVNL empanelled installer support, net metering, and GEDA approvals:</p>

<div class="overflow-x-auto my-8 border border-gray-200 rounded-xl shadow-sm">
  <table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">System Size</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Sanctioned Load</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Gross Cost (Before Subsidy)</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Govt Subsidy Benefit</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Net Cost (After Subsidy)</th>
        <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Est. Payback (ROI)</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200 text-sm text-gray-700">
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 whitespace-nowrap font-semibold text-blue-900">1 kW System</td>
        <td class="px-6 py-4 whitespace-nowrap">1 kW</td>
        <td class="px-6 py-4 whitespace-nowrap">₹75,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">-₹30,000</td>
        <td class="px-6 py-4 whitespace-nowrap font-bold text-gray-900">₹45,000</td>
        <td class="px-6 py-4 whitespace-nowrap">3.0 Years</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 whitespace-nowrap font-semibold text-blue-900">2 kW System</td>
        <td class="px-6 py-4 whitespace-nowrap">2 kW</td>
        <td class="px-6 py-4 whitespace-nowrap">₹1,40,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">-₹60,000</td>
        <td class="px-6 py-4 whitespace-nowrap font-bold text-gray-900">₹80,000</td>
        <td class="px-6 py-4 whitespace-nowrap">3.2 Years</td>
      </tr>
      <tr class="bg-orange-50/50 hover:bg-orange-50 font-medium">
        <td class="px-6 py-4 whitespace-nowrap font-bold text-orange-600">3 kW System (Best Value)</td>
        <td class="px-6 py-4 whitespace-nowrap">3 kW</td>
        <td class="px-6 py-4 whitespace-nowrap">₹1,95,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-green-600 font-bold">-₹78,000 (Max)</td>
        <td class="px-6 py-4 whitespace-nowrap font-extrabold text-gray-900">₹1,17,000</td>
        <td class="px-6 py-4 whitespace-nowrap">3.5 Years</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 whitespace-nowrap font-semibold text-blue-900">5 kW System</td>
        <td class="px-6 py-4 whitespace-nowrap">5 kW</td>
        <td class="px-6 py-4 whitespace-nowrap">₹3,00,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">-₹78,000</td>
        <td class="px-6 py-4 whitespace-nowrap font-bold text-gray-900">₹2,22,000</td>
        <td class="px-6 py-4 whitespace-nowrap">4.0 Years</td>
      </tr>
      <tr class="hover:bg-gray-50">
        <td class="px-6 py-4 whitespace-nowrap font-semibold text-blue-900">10 kW System</td>
        <td class="px-6 py-4 whitespace-nowrap">10 kW</td>
        <td class="px-6 py-4 whitespace-nowrap">₹5,50,000</td>
        <td class="px-6 py-4 whitespace-nowrap text-green-600 font-semibold">-₹78,000</td>
        <td class="px-6 py-4 whitespace-nowrap font-bold text-gray-900">₹4,72,000</td>
        <td class="px-6 py-4 whitespace-nowrap">4.5 Years</td>
      </tr>
    </tbody>
  </table>
</div>
`;

export function getKeywordContent(keyword: KeywordConfig): KeywordPageContent {
  let aboutContent = `Looking for ${keyword.title.toLowerCase()}? You've come to the right place! We are Vadodara's leading solar installation company, specializing in ${keyword.title.toLowerCase()}. With over 15 years of experience and 5000+ successful installations, we provide premium quality solar solutions at the best prices in Gujarat.

Our team of MNRE certified professionals ensures that every installation meets the highest standards of quality and safety. We use only the best solar panels from top brands like Adani, Tata, Waaree, and Loom Solar, backed by 25-year performance warranties.

Whether you need a small 1kW system for your home or a large 500kW industrial solar plant, we have the expertise to handle projects of any scale. Our end-to-end service includes free site survey, custom system design, professional installation, government subsidy assistance, and comprehensive after-sales support.`;

  // Inject Key Takeaway callout box at the top if defined
  const takeaway = keyTakeaways[keyword.slug];
  if (takeaway) {
    aboutContent = takeaway + "\n" + aboutContent;
  }

  // Inject styled pricing table for price page
  if (keyword.slug === "solar-panel-price-vadodara") {
    aboutContent += "\n" + pricingTableHTML;
  }

  // Inject internal links to "Solar for Flats" page
  if (
    keyword.slug === "solar-system-for-home-vadodara" ||
    keyword.slug === "rooftop-solar-vadodara" ||
    keyword.slug === "residential-solar-vadodara" ||
    keyword.slug === "solar-panel-price-vadodara"
  ) {
    aboutContent += `\n\n🏢 **Apartment Solar Solutions:** If you reside in a high-rise building or apartment complex in Vadodara, you can still transition to solar energy. Read our specialized guide on <a href="/solar-for-flat-vadodara" class="text-orange-600 hover:underline font-semibold">solar system for flats in Vadodara</a> to explore shared rooftop options and balcony solar panels.`;
  }

  return {
    heroTitle: keyword.h1,
    heroSubtitle: keyword.metaDescription,
    aboutContent,
    whyChooseUs: [
      "MNRE & GEDA Approved Installer - Eligible for Government Subsidies",
      "15+ Years Experience in Solar Industry",
      "5000+ Successful Installations Across Vadodara",
      "Premium Quality Solar Panels - Adani, Tata, Waaree, Loom",
      "25 Year Performance Warranty on Solar Panels",
      "Free Site Survey & System Design",
      "Complete Subsidy Documentation Assistance",
      "Professional Installation by Certified Engineers",
      "Net Metering Setup & DGVCL Liaison",
      "Comprehensive After-Sales Support & AMC"
    ],
    detailedServices: [
      { title: "Residential Solar Installation", description: "Complete home solar solutions from 1kW to 10kW with government subsidy up to ₹78,000" },
      { title: "Commercial Solar Installation", description: "Solar solutions for shops, offices, and commercial buildings to reduce operational costs" },
      { title: "Industrial Solar Installation", description: "Large scale solar for factories, warehouses, and industrial complexes" },
      { title: "On-Grid Solar Systems", description: "Grid-connected solar with net metering for maximum savings" },
      { title: "Off-Grid Solar Systems", description: "Standalone solar with battery backup for complete grid independence" },
      { title: "Hybrid Solar Systems", description: "Best of both worlds - grid connected with battery backup" },
      { title: "Solar AMC & Maintenance", description: "Regular maintenance to keep your solar system running at peak efficiency" },
      { title: "Solar Panel Cleaning", description: "Professional cleaning services to maximize power generation" },
    ],
    areaSpecificContent: `We provide ${keyword.title.toLowerCase()} across all areas of Vadodara including Alkapuri, Gotri, Manjalpur, Karelibaug, Fatehgunj, Sayajigunj, Akota, Race Course, Sama, Waghodia, Vasna, Tandalja, Harni, Subhanpura, Makarpura, Tarsali, and many more. Our service area covers the entire Vadodara district.`,
    faqItems: [
      { question: `What is the cost of ${keyword.title.toLowerCase()}?`, answer: `The cost varies based on system size and type. For residential systems, prices start from ₹45,000/kW after subsidy. Contact us for a free quote customized to your requirements.` },
      { question: "What government subsidies are available?", answer: "Under PM Surya Ghar Yojana, residential customers can get up to ₹78,000 subsidy. We handle all documentation and subsidy claims for you." },
      { question: "How much space is needed for solar panels?", answer: "Approximately 100 sq.ft per kW of solar panels. A 3kW system needs about 300 sq.ft of shadow-free roof space." },
      { question: "What is the warranty on solar systems?", answer: "Solar panels come with 25-year performance warranty, inverters with 5-10 year warranty, and our installation has 5-year workmanship warranty." },
      { question: "How long does installation take?", answer: "Residential installations take 1-2 days, commercial 3-5 days, and industrial projects 1-4 weeks depending on size." },
      { question: "Do you help with net metering?", answer: "Yes, we handle complete net metering process including application, meter installation, and DGVCL liaison." },
    ],
    processSteps: [
      { title: "Free Site Survey", description: "Our engineers visit your location for shadow analysis, roof assessment, and load calculation" },
      { title: "Custom Design", description: "We design the optimal solar system based on your consumption and roof specifications" },
      { title: "Quotation & Subsidy", description: "Detailed quotation with subsidy calculation and financing options" },
      { title: "Installation", description: "Professional installation by certified engineers with safety compliance" },
      { title: "Inspection & Commissioning", description: "Government inspection, net metering setup, and system commissioning" },
      { title: "After-Sales Support", description: "Ongoing monitoring, maintenance, and support for the lifetime of your system" },
    ],
  };
}
