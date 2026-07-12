import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBusinessBySlug } from "@/lib/business-config";
import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { BusinessWhatsAppFloat } from "@/components/business-whatsapp-float";
import { BlogBreadcrumbs } from "@/components/breadcrumbs";
import { ArticleSchema } from "@/components/seo-schemas";
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react";

// In-content images for blog posts
const blogImages = {
  solar_panel_installation: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop",
  solar_panels_field: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=500&fit=crop",
  rooftop_solar: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=500&fit=crop",
  solar_farm: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=500&fit=crop",
  solar_closeup: "https://images.unsplash.com/photo-1548098343-8c8b6abe8ebf?w=800&h=500&fit=crop",
  solar_technician: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?w=800&h=500&fit=crop",
  solar_worker: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&h=500&fit=crop",
  solar_array: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&h=500&fit=crop",
  solar_home: "https://images.unsplash.com/photo-1611365892117-00ac6fb5544d?w=800&h=500&fit=crop",
  modern_solar: "https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&h=500&fit=crop",
};

// Blog posts database
const blogPosts: Record<string, {
  title: string;
  h1: string;
  metaDescription: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
  relatedPosts: string[];
}> = {
  "pm-surya-ghar-yojana-complete-guide-2026": {
    title: "PM Surya Ghar Yojana Complete Guide 2026 - Get ₹78,000 Subsidy",
    h1: "PM Surya Ghar Yojana 2026: Complete Guide to Get ₹78,000 Subsidy",
    metaDescription: "Everything about PM Surya Ghar Muft Bijli Yojana - eligibility, subsidy amounts, application process & benefits for Vadodara residents. Apply now!",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=600&fit=crop",
    category: "Government Schemes",
    author: "Solar Expert Team",
    date: "January 25, 2026",
    readTime: "8 min read",
    content: `
## What is PM Surya Ghar Yojana?

PM Surya Ghar Muft Bijli Yojana is a flagship scheme launched by the Government of India to promote rooftop solar installation across the country. The scheme aims to provide **300 units of free electricity** to households by enabling them to generate their own solar power.

### Key Benefits of PM Surya Ghar Yojana

1. **Government Subsidy up to ₹78,000**
   - 1-2 kW system: ₹30,000/kW (max ₹60,000)
   - 2-3 kW system: ₹18,000/kW (additional ₹18,000)
   - Total maximum subsidy: ₹78,000

2. **Free Electricity Generation**
   - Generate 300+ units monthly with 3kW system
   - Reduce electricity bill to zero or near-zero
   - Sell excess power to grid through net metering

3. **25-Year Savings**
   - Typical household saves ₹15-20 lakh over 25 years
   - ROI period: 3-4 years with subsidy
   - Electricity price protection for life

## Eligibility Criteria for Vadodara Residents

To avail PM Surya Ghar subsidy in Vadodara, you must meet these criteria:

- **Residential property owner** (not applicable for commercial)
- **Valid UGVCL electricity connection** in your name
- **Adequate shadow-free roof space** (100 sq ft per kW)
- **Indian citizen** with valid Aadhaar

## Step-by-Step Application Process

### Step 1: Register on National Portal
Visit [pmsuryaghar.gov.in](https://pmsuryaghar.gov.in) and create your account using Aadhaar and electricity consumer number.

### Step 2: Submit Application
Fill the online application with:
- Property documents
- Electricity bill
- Roof photographs
- Bank account details

### Step 3: Feasibility Check
UGVCL will verify your rooftop feasibility within 15-20 days.

### Step 4: Choose Empanelled Vendor
Select an MNRE-approved solar installer like SolarInstallationVadodara.in from the portal.

### Step 5: Installation
Complete installation within 60 days of approval.

### Step 6: Inspection & Commissioning
UGVCL inspection followed by net meter installation.

### Step 7: Subsidy Credit
Subsidy amount credited directly to your bank account within 30 days.

## System Recommendations for Vadodara Homes

| Monthly Bill | Recommended System | Subsidy | Final Cost |
|-------------|-------------------|---------|------------|
| ₹1,000-2,000 | 1-2 kW | ₹30,000-60,000 | ₹15,000-45,000 |
| ₹2,000-3,500 | 3 kW | ₹78,000 | ₹90,000-1,10,000 |
| ₹3,500-5,000 | 4-5 kW | ₹78,000 | ₹1,50,000-2,20,000 |
| ₹5,000+ | 5-10 kW | ₹78,000 | ₹2,50,000+ |

## Why Choose SolarInstallationVadodara.in?

- ✅ **MNRE & GEDA Approved** installer
- ✅ **Complete subsidy assistance** - we handle all paperwork
- ✅ **5000+ installations** in Vadodara
- ✅ **25-year warranty** on panels
- ✅ **Free site survey** and consultation

## Frequently Asked Questions

**Q: How long does the entire process take?**
A: From application to installation, typically 45-60 days including all approvals.

**Q: Can I get subsidy for commercial property?**
A: No, PM Surya Ghar subsidy is only for residential properties. Commercial properties have different schemes.

**Q: What if I have limited roof space?**
A: High-efficiency bifacial panels can generate more power in limited space. We recommend a site survey to assess options.

## Get Started Today!

Ready to harness solar power and save on electricity? Contact SolarInstallationVadodara.in for a **free consultation** and let us handle your PM Surya Ghar application.

📞 Call: +91-9033451995
📧 Email: info@solarinstallationvadodara.in
    `,
    relatedPosts: ["how-much-solar-panel-cost-vadodara-2026", "how-net-metering-works-ugvcl-vadodara"],
  },
  "how-much-solar-panel-cost-vadodara-2026": {
    title: "How Much Do Solar Panels Cost in Vadodara? 2026 Price Guide",
    h1: "Solar Panel Cost in Vadodara 2026: Complete Price Guide",
    metaDescription: "Complete breakdown of solar panel costs in Vadodara. Compare 1kW to 10kW system prices, installation costs, and government subsidy benefits.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&h=600&fit=crop",
    category: "Pricing",
    author: "Solar Expert Team",
    date: "January 20, 2026",
    readTime: "10 min read",
    content: `
## Solar Panel Pricing in Vadodara 2026

If you're considering solar installation in Vadodara, understanding the costs involved is crucial for making an informed decision. This comprehensive guide covers everything from panel costs to installation charges.

### Current Solar Panel Prices (January 2026)

| System Size | Gross Price | After Subsidy | Monthly Generation |
|------------|-------------|---------------|-------------------|
| 1 kW | ₹75,000 | ₹45,000 | 120-140 units |
| 2 kW | ₹1,40,000 | ₹80,000 | 240-280 units |
| 3 kW | ₹1,90,000 | ₹1,12,000 | 360-420 units |
| 5 kW | ₹2,80,000 | ₹2,02,000 | 600-700 units |
| 10 kW | ₹5,20,000 | ₹4,42,000 | 1200-1400 units |

### What's Included in the Price?

A complete solar installation package from SolarInstallationVadodara.in includes:

1. **Solar Panels** - Tier-1 mono PERC panels (Waaree/Tata/Adani)
2. **Solar Inverter** - Grid-tied inverter with monitoring
3. **Mounting Structure** - Galvanized iron or aluminum
4. **Wiring & Accessories** - DC cables, MC4 connectors, earthing
5. **Installation** - Professional installation by certified team
6. **Net Metering** - UGVCL application and coordination
7. **Warranty** - 25 years on panels, 5 years on inverter

### Factors Affecting Solar Panel Cost

**1. Panel Type**
- Polycrystalline: ₹20-25/watt (budget option)
- Mono PERC: ₹25-30/watt (most popular)
- Bifacial: ₹30-40/watt (premium, +15% output)

**2. Inverter Brand**
- Basic: ₹8,000-12,000 per kW
- Premium (Fronius, SMA): ₹15,000-20,000 per kW

**3. Installation Complexity**
- Flat RCC roof: Standard pricing
- Sloped tile roof: +10-15%
- Ground mount: +20-25%

### ROI Calculation for Vadodara

With Vadodara receiving excellent sunshine (5.5-6 peak hours daily):

- **3 kW system after subsidy**: ₹1,12,000
- **Monthly savings**: ₹2,500-3,000
- **Annual savings**: ₹30,000-36,000
- **Payback period**: 3-4 years
- **25-year savings**: ₹7-8 lakhs

### Get a Free Quote

Every roof is unique. Contact us for a detailed site survey and customized quote:

📞 +91-9033451995
    `,
    relatedPosts: ["pm-surya-ghar-yojana-complete-guide-2026", "calculate-solar-system-size-home"],
  },

  "on-grid-vs-off-grid-vs-hybrid-solar-system": {
    title: "On-Grid vs Off-Grid vs Hybrid Solar: Which is Best for You?",
    h1: "On-Grid vs Off-Grid vs Hybrid Solar Systems: Complete Comparison Guide",
    metaDescription: "Detailed comparison of on-grid, off-grid, and hybrid solar systems. Pros, cons, costs, and which is best for your home or business in Vadodara.",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&h=600&fit=crop",
    category: "Solar Guide",
    author: "Solar Expert Team",
    date: "January 15, 2026",
    readTime: "7 min read",
    content: `
## Understanding Solar System Types

Choosing the right solar system type is crucial for maximizing your investment. Let's explore each option in detail.

### 1. On-Grid Solar System (Grid-Tied)

**How it Works:**
Connected directly to the electricity grid. Excess power is exported to UGVCL, and you earn credits through net metering.

**Best For:**
- Homes with reliable grid supply
- Areas with minimal power cuts
- Those wanting maximum ROI
- PM Surya Ghar subsidy applicants

**Pros:**
✅ Lowest cost (no battery needed)
✅ Eligible for government subsidy
✅ Net metering income
✅ Minimal maintenance
✅ 3-4 year payback period

**Cons:**
❌ No power during grid outages
❌ Depends on grid availability

**Cost in Vadodara:** ₹50,000-55,000 per kW

---

### 2. Off-Grid Solar System

**How it Works:**
Completely independent from the grid. Uses batteries to store power for use when sun isn't shining.

**Best For:**
- Remote locations without grid
- Farmhouses and agricultural land
- Areas with unreliable electricity
- Complete energy independence

**Pros:**
✅ Total independence from grid
✅ Power available 24/7
✅ No electricity bills ever
✅ Ideal for remote locations

**Cons:**
❌ Higher cost (batteries expensive)
❌ Battery replacement every 5-10 years
❌ Not eligible for subsidy
❌ Longer payback period

**Cost in Vadodara:** ₹90,000-1,20,000 per kW

---

### 3. Hybrid Solar System

**How it Works:**
Best of both worlds - connected to grid AND has battery backup. Prioritizes solar, then battery, then grid.

**Best For:**
- Areas with frequent power cuts
- Critical power requirements
- Future-proofing your system
- Maximum self-consumption

**Pros:**
✅ Power during outages
✅ Net metering benefits
✅ Reduced grid dependency
✅ Smart energy management
✅ Expandable battery capacity

**Cons:**
❌ Higher initial cost
❌ More complex system
❌ Battery maintenance needed

**Cost in Vadodara:** ₹75,000-95,000 per kW

---

## Quick Comparison Table

| Feature | On-Grid | Off-Grid | Hybrid |
|---------|---------|----------|--------|
| Cost per kW | ₹50-55K | ₹90-120K | ₹75-95K |
| Battery | No | Yes | Yes |
| Grid Connection | Required | Not needed | Optional |
| Power in Outage | No | Yes | Yes |
| Subsidy Eligible | Yes | No | Partial |
| Maintenance | Low | Medium | Medium |
| Best ROI | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |

## Our Recommendation for Vadodara

For most Vadodara residents, we recommend:

1. **On-Grid** - If power cuts are rare in your area
2. **Hybrid** - If you experience 2+ hours of daily power cuts
3. **Off-Grid** - Only for farmhouses or areas without grid

📞 Call +91-9033451995 for a free consultation!
    `,
    relatedPosts: ["how-much-solar-panel-cost-vadodara-2026", "solar-battery-lithium-vs-lead-acid"],
  },

  "best-solar-panel-brands-india-2026": {
    title: "Top 5 Best Solar Panel Brands in India 2026 (Price List & Subsidy)",
    h1: "Best Solar Panel Brands in India 2026: Expert Review & Comparison",
    metaDescription: "⚡ Compare the best solar panel brands in India for 2026 (Tata, Waaree, Adani, Luminous). Check pricing, efficiency ratings, and subsidy eligibility. Read our expert review!",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&h=600&fit=crop",
    category: "Reviews",
    author: "Solar Expert Team",
    date: "January 10, 2026",
    readTime: "12 min read",
    content: `
## Best Solar Panel Brands Available in Vadodara

Choosing the right solar panel brand is crucial for long-term performance. Here's our expert review of top brands available in India.

### 1. Waaree Solar ⭐⭐⭐⭐⭐

**India's Largest Solar Manufacturer**

- **Efficiency:** 20-22%
- **Warranty:** 25 years
- **Made in:** India (Gujarat)
- **Price:** ₹25-30/watt

**Why We Recommend:**
Waaree is India's largest solar panel manufacturer with state-of-the-art facilities in Gujarat. Their proximity to Vadodara means better service and faster warranty claims.

---

### 2. Tata Solar ⭐⭐⭐⭐⭐

**Trusted Tata Brand Quality**

- **Efficiency:** 20-21%
- **Warranty:** 25 years
- **Made in:** India
- **Price:** ₹28-32/watt

**Why We Recommend:**
Tata brand trust combined with excellent build quality. Ideal for customers who prioritize brand reliability.

---

### 3. Adani Solar ⭐⭐⭐⭐

**Premium Performance**

- **Efficiency:** 21-22%
- **Warranty:** 25 years
- **Made in:** India (Gujarat)
- **Price:** ₹26-30/watt

**Why We Recommend:**
Another Gujarat-based manufacturer with excellent efficiency ratings and strong after-sales network in Vadodara.

---

### 4. Vikram Solar ⭐⭐⭐⭐

**Export-Quality Panels**

- **Efficiency:** 20-21.5%
- **Warranty:** 25 years
- **Made in:** India
- **Price:** ₹25-28/watt

**Why We Recommend:**
Known for export-quality manufacturing with strict quality controls. Great value for money.

---

### 5. Loom Solar ⭐⭐⭐⭐

**Best for Residential**

- **Efficiency:** 19-21%
- **Warranty:** 25 years
- **Made in:** India
- **Price:** ₹24-28/watt

**Why We Recommend:**
Excellent for small residential installations with good aesthetics and reliable performance.

---

### 6. Luminous Solar ⭐⭐⭐⭐

**Trusted Inverter Brand**

- **Efficiency:** 19-20%
- **Warranty:** 25 years
- **Made in:** India
- **Price:** ₹23-27/watt

**Why We Recommend:**
Known for their inverters, Luminous solar panels offer good quality at competitive prices.

---

## Panel Type Comparison

| Type | Efficiency | Best For | Price |
|------|------------|----------|-------|
| Polycrystalline | 16-18% | Budget installations | ₹20-24/W |
| Mono PERC | 19-21% | Most homes | ₹25-30/W |
| Bifacial | 21-23% | Limited roof space | ₹32-40/W |
| Half-Cut | 20-22% | Better shade tolerance | ₹28-32/W |

## Our Brand Recommendations

**For Residential (3-5 kW):**
1. Waaree Mono PERC
2. Tata Solar
3. Loom Solar

**For Commercial (10-100 kW):**
1. Adani Solar
2. Waaree Solar
3. Vikram Solar

**Best Value for Money:**
Waaree or Vikram Solar

📞 Contact us at +91-9033451995 for brand-specific quotes!
    `,
    relatedPosts: ["how-much-solar-panel-cost-vadodara-2026", "calculate-solar-system-size-home"],
  },

  "solar-panel-maintenance-tips-vadodara": {
    title: "Solar Panel Maintenance Tips for Vadodara Climate",
    h1: "Solar Panel Maintenance Guide for Vadodara's Climate",
    metaDescription: "Essential maintenance tips to keep your solar panels running efficiently in Vadodara's dusty climate. Cleaning schedules, monsoon care, and more.",
    image: "https://images.unsplash.com/photo-1548098343-8c8b6abe8ebf?w=1200&h=600&fit=crop",
    category: "Maintenance",
    author: "Solar Expert Team",
    date: "January 5, 2026",
    readTime: "6 min read",
    content: `
## Solar Panel Maintenance in Vadodara

Vadodara's climate presents unique challenges for solar panels - dust, high temperatures, and monsoon rains. Here's how to maintain peak performance.

### Why Maintenance Matters

- Dirty panels can lose **15-25% efficiency**
- Proper maintenance extends panel life to **30+ years**
- Regular checks prevent costly repairs
- Maintains warranty validity

---

## Cleaning Schedule for Vadodara

### Summer (March-June)
**Frequency:** Every 2-3 weeks

Vadodara's hot, dusty summers require frequent cleaning:
- Clean early morning (6-8 AM) or evening
- Use soft brush and plain water
- Never use harsh chemicals
- Avoid cleaning when panels are hot

### Monsoon (July-September)
**Frequency:** Monthly check

Rain naturally cleans panels, but:
- Check for debris accumulation
- Inspect drainage around panels
- Look for water pooling
- Check all electrical connections

### Winter (October-February)
**Frequency:** Monthly

Best season for solar in Vadodara:
- Light cleaning monthly
- Check for bird droppings
- Inspect mounting structure
- Monitor production levels

---

## DIY Cleaning Steps

**What You Need:**
- Soft brush or sponge
- Garden hose with gentle spray
- Bucket of plain water
- Soft cloth for drying (optional)

**Steps:**
1. Clean early morning when panels are cool
2. Rinse with plain water first
3. Gently brush any stubborn dirt
4. Rinse again thoroughly
5. Let air dry naturally

**Never Use:**
❌ Pressure washers
❌ Abrasive materials
❌ Harsh detergents
❌ Metal scrapers

---

## Professional Maintenance Checklist

**Quarterly Inspection:**
- Panel surface condition
- Mounting structure integrity
- Cable connections
- Inverter performance
- Production monitoring

**Annual Service:**
- Deep cleaning
- Thermal imaging scan
- Electrical testing
- Inverter servicing
- Net meter verification

---

## Common Issues in Vadodara Climate

### 1. Dust Accumulation
**Problem:** Reduces output by 15-25%
**Solution:** Regular cleaning every 2-3 weeks in summer

### 2. Hot Spots
**Problem:** Caused by shading or dirt
**Solution:** Keep panels clean, trim nearby trees

### 3. Bird Nesting
**Problem:** Birds nest under panels
**Solution:** Install bird mesh around panels

### 4. Monsoon Damage
**Problem:** Water ingress in connections
**Solution:** Check waterproof seals annually

---

## AMC Services from SolarInstallationVadodara.in

**Annual Maintenance Contract:**
- 4 professional cleanings per year
- Quarterly inspection
- Free minor repairs
- Priority support
- Performance guarantee

**Cost:** ₹2,000-5,000/year (based on system size)

📞 Call +91-9033451995 for AMC enrollment!
    `,
    relatedPosts: ["best-solar-panel-brands-india-2026", "how-net-metering-works-ugvcl-vadodara"],
  },

  "how-net-metering-works-ugvcl-vadodara": {
    title: "How Net Metering Works with UGVCL in Vadodara - Complete Guide",
    h1: "UGVCL Net Metering in Vadodara: Complete Guide to Sell Solar Power",
    metaDescription: "Understand how net metering works with UGVCL. Learn the application process, billing mechanism, and maximize your solar savings in Vadodara.",
    image: "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?w=1200&h=600&fit=crop",
    category: "Net Metering",
    author: "Solar Expert Team",
    date: "December 28, 2025",
    readTime: "9 min read",
    content: `
## What is Net Metering?

Net metering allows you to sell excess solar power back to UGVCL (Uttar Gujarat Vij Company Ltd). Your electricity meter runs backward when you export power, giving you credits.

### How It Works

1. **Daytime:** Solar panels generate electricity
2. **Self-consumption:** Power your home first
3. **Export excess:** Extra power goes to grid
4. **Earn credits:** Meter records export units
5. **Nighttime:** Use grid power (counted against credits)
6. **Monthly bill:** Pay only net consumption

---

## Net Metering Rules in Gujarat

### GERC Regulations (2024-26)

- **Maximum capacity:** Up to sanctioned load or 500 kW
- **Billing cycle:** Annual settlement
- **Export rate:** ₹2.25/unit (for excess generation)
- **Validity:** 25 years from commissioning
- **Meter type:** Bidirectional meter (provided by UGVCL)

### Example Calculation

**3 kW System in Vadodara:**
- Monthly generation: ~400 units
- Self-consumption: ~250 units
- Export to grid: ~150 units
- Import from grid (night): ~100 units
- **Net bill:** Zero (150 export - 100 import = 50 credit units)

---

## UGVCL Net Metering Process

### Step 1: Technical Feasibility
Apply online at UGVCL portal with:
- Consumer number
- Sanctioned load details
- Proposed solar capacity

**Timeline:** 7-10 days

### Step 2: Installation Approval
After feasibility approval:
- Submit detailed project report
- Pay processing fee (₹500)
- Receive work order

**Timeline:** 15-20 days

### Step 3: Installation & Inspection
- Install solar system
- Apply for UGVCL inspection
- Inspector verifies installation

**Timeline:** 7-15 days after application

### Step 4: Net Meter Installation
- UGVCL installs bidirectional meter
- Old meter replaced
- System commissioned

**Timeline:** 7-10 days

### Step 5: Subsidy Application
- Apply on PM Surya Ghar portal
- Submit commissioning report
- Receive subsidy in bank

**Timeline:** 30-45 days

---

## Required Documents

**For UGVCL Application:**
- Electricity bill copy
- Property ownership proof
- Aadhaar card
- Passport photo
- Bank account details
- Roof photographs

**We Handle Everything:**
SolarInstallationVadodara.in manages the complete net metering process for you!

---

## Net Metering Benefits

### Financial Benefits
- Zero electricity bills possible
- Sell excess power
- 25-year income guarantee
- Hedge against tariff hikes

### Technical Benefits
- No battery required
- Grid acts as free storage
- Automatic switchover
- Real-time monitoring

---

## Common Questions

**Q: What happens to unused credits?**
A: Credits carry forward. At year-end, UGVCL pays ₹2.25/unit for excess.

**Q: Can I increase my solar capacity later?**
A: Yes, apply for capacity enhancement through UGVCL.

**Q: Is net metering available for 3-phase connections?**
A: Yes, available for both single and three-phase connections.

📞 Need help with net metering? Call +91-9033451995
    `,
    relatedPosts: ["pm-surya-ghar-yojana-complete-guide-2026", "on-grid-vs-off-grid-vs-hybrid-solar-system"],
  },

  "calculate-solar-system-size-home": {
    title: "How to Calculate the Right Solar System Size for Your Home",
    h1: "Solar System Size Calculator: Find the Perfect Capacity for Your Home",
    metaDescription: "Step-by-step guide to calculate the perfect solar system capacity based on electricity consumption, roof space, and budget. Free calculator included.",
    image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=1200&h=600&fit=crop",
    category: "Solar Guide",
    author: "Solar Expert Team",
    date: "December 20, 2025",
    readTime: "8 min read",
    content: `
## How to Size Your Solar System

Choosing the right solar system size is crucial. Too small won't cover your needs; too large wastes money. Here's how to calculate perfectly.

### Quick Formula

**Solar Capacity (kW) = Monthly Consumption (units) ÷ 120**

Example: 360 units/month ÷ 120 = 3 kW system

---

## Step-by-Step Calculation

### Step 1: Check Your Electricity Bill

Look at your last 12 months of bills and note:
- Monthly consumption (units/kWh)
- Calculate average monthly consumption
- Note peak summer consumption

**Vadodara Average:**
- 1 BHK: 150-200 units
- 2 BHK: 250-350 units
- 3 BHK: 350-500 units
- 4 BHK+: 500-800 units
- Bungalow: 800-1500 units

### Step 2: Consider Future Needs

Plan for next 5-10 years:
- Planning to buy AC? Add 100-150 units
- Electric vehicle? Add 200-300 units
- Family expansion? Add 20-30%

### Step 3: Check Roof Space

**Space Required per kW:**
- Mono PERC panels: 60-70 sq ft
- Polycrystalline: 80-90 sq ft
- Bifacial: 55-65 sq ft

**Vadodara Roof Types:**
- RCC flat roof: Best for solar
- Sloped tile roof: Needs special mounting
- Metal sheet roof: Requires reinforcement

### Step 4: Account for Efficiency

Vadodara solar generation:
- 1 kW generates ~120-140 units/month
- Summer: 140-150 units/kW
- Winter: 100-120 units/kW
- Monsoon: 80-100 units/kW

---

## Solar Size Recommendation Chart

| Monthly Bill | Units Consumed | Recommended Size |
|-------------|----------------|------------------|
| ₹500-1,000 | 100-150 | 1 kW |
| ₹1,000-1,500 | 150-250 | 2 kW |
| ₹1,500-2,500 | 250-350 | 3 kW |
| ₹2,500-3,500 | 350-500 | 4 kW |
| ₹3,500-5,000 | 500-700 | 5-6 kW |
| ₹5,000-8,000 | 700-1000 | 7-8 kW |
| ₹8,000+ | 1000+ | 10 kW+ |

---

## Subsidy Consideration

**PM Surya Ghar Subsidy Structure:**
- Up to 2 kW: ₹30,000/kW
- 2-3 kW: Additional ₹18,000/kW
- Above 3 kW: No additional subsidy

**Optimal Residential Size:** 3 kW
- Maximum subsidy benefit (₹78,000)
- Covers most household needs
- Excellent ROI

---

## Sample Calculations

### Case 1: 2 BHK Apartment
- Monthly bill: ₹2,000
- Consumption: 300 units
- **Recommended: 3 kW system**
- Generation: 360-400 units
- Result: Zero bill + surplus credits

### Case 2: 3 BHK Villa
- Monthly bill: ₹4,000
- Consumption: 550 units
- **Recommended: 5 kW system**
- Generation: 600-700 units
- Result: Zero bill + export income

### Case 3: Large Bungalow
- Monthly bill: ₹8,000
- Consumption: 1100 units
- **Recommended: 10 kW system**
- Generation: 1200-1400 units
- Result: Complete energy independence

---

## Free Site Survey

Not sure about your requirements? We offer **FREE site surveys** in Vadodara:
- Roof assessment
- Shadow analysis
- Custom system design
- Exact cost estimate

📞 Book your free survey: +91-9033451995
    `,
    relatedPosts: ["how-much-solar-panel-cost-vadodara-2026", "on-grid-vs-off-grid-vs-hybrid-solar-system"],
  },

  "solar-battery-lithium-vs-lead-acid": {
    title: "Solar Batteries: Lithium-Ion vs Lead Acid - Which to Choose?",
    h1: "Lithium-Ion vs Lead Acid Solar Batteries: Complete Comparison",
    metaDescription: "Compare lithium-ion and lead-acid batteries for solar systems. Cost, lifespan, performance analysis for Vadodara's climate and power backup needs.",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=1200&h=600&fit=crop",
    category: "Products",
    author: "Solar Expert Team",
    date: "December 15, 2025",
    readTime: "7 min read",
    content: `
## Solar Battery Comparison: Make the Right Choice

If you're considering a hybrid or off-grid solar system, battery selection is crucial. Let's compare the two main options.

### Lead Acid Batteries

**Types Available:**
- Tubular (most common for solar)
- Flat plate
- Gel batteries
- AGM batteries

**Specifications:**
- Lifespan: 3-5 years
- Depth of Discharge (DoD): 50-60%
- Cycles: 1,000-1,500
- Efficiency: 80-85%
- Temperature sensitivity: High

**Pros:**
✅ Lower upfront cost
✅ Widely available
✅ Easy to find replacements
✅ Proven technology
✅ Local service support

**Cons:**
❌ Shorter lifespan
❌ Heavy and bulky
❌ Requires maintenance
❌ Lower efficiency
❌ Poor performance in heat

**Cost:** ₹8,000-12,000 per kWh

---

### Lithium-Ion Batteries

**Types Available:**
- LiFePO4 (Lithium Iron Phosphate) - Recommended
- NMC (Nickel Manganese Cobalt)
- LTO (Lithium Titanate)

**Specifications:**
- Lifespan: 10-15 years
- Depth of Discharge (DoD): 80-95%
- Cycles: 4,000-6,000
- Efficiency: 95-98%
- Temperature sensitivity: Low

**Pros:**
✅ Much longer lifespan
✅ Compact and lightweight
✅ Maintenance-free
✅ Higher efficiency
✅ Better in hot climate
✅ Deeper discharge safe

**Cons:**
❌ Higher upfront cost
❌ Requires BMS (Battery Management System)
❌ Specialized recycling needed

**Cost:** ₹25,000-40,000 per kWh

---

## Head-to-Head Comparison

| Feature | Lead Acid | Lithium-Ion |
|---------|-----------|-------------|
| Initial Cost | ₹8-12K/kWh | ₹25-40K/kWh |
| Lifespan | 3-5 years | 10-15 years |
| Usable Capacity | 50-60% | 80-95% |
| Weight (5kWh) | 150-200 kg | 40-60 kg |
| Maintenance | Monthly | None |
| Efficiency | 80-85% | 95-98% |
| Warranty | 2-3 years | 8-10 years |
| Vadodara Heat | Poor | Excellent |

---

## True Cost Analysis (10-Year Period)

### Lead Acid (150Ah Tubular Battery)
- Initial cost: ₹15,000 × 4 batteries = ₹60,000
- Replacement at year 4: ₹60,000
- Replacement at year 8: ₹60,000
- **Total 10-year cost: ₹1,80,000**

### Lithium-Ion (5kWh LiFePO4)
- Initial cost: ₹1,50,000
- No replacement needed
- **Total 10-year cost: ₹1,50,000**

**Lithium saves ₹30,000 over 10 years!**

---

## Recommendation for Vadodara

### Choose Lead Acid If:
- Budget is tight
- Light backup needs (2-4 hours)
- Have space for batteries
- Don't mind maintenance

### Choose Lithium-Ion If:
- Want long-term savings
- Need reliable backup (6+ hours)
- Limited space
- Prefer zero maintenance
- Hot climate tolerance needed

---

## Best Battery Brands

**Lead Acid:**
- Exide (Inva Tubular)
- Luminous (Red Charge)
- Amaron
- Okaya

**Lithium-Ion:**
- Waaree ESS
- Luminous Li-On
- Okaya Lithium
- V-Guard Lithium

---

## Our Recommendation

For Vadodara's hot climate and long-term value, **we strongly recommend Lithium-Ion (LiFePO4) batteries** for hybrid solar systems.

📞 Get battery consultation: +91-9033451995
    `,
    relatedPosts: ["on-grid-vs-off-grid-vs-hybrid-solar-system", "how-much-solar-panel-cost-vadodara-2026"],
  },
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | SolarInstallationVadodara.in Blog`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://solarinstallationvadodara.in/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 600, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];
  const business = getBusinessBySlug("solar-installation")!;

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPostsData = post.relatedPosts
    .map((relatedSlug) => ({ slug: relatedSlug, ...blogPosts[relatedSlug] }))
    .filter((p) => p.title);

  return (
    <div className="min-h-screen flex flex-col">
      <BusinessNav currentBusiness={business} currentArea="vadodara" />
      
      {/* Article Schema for SEO */}
      <ArticleSchema
        title={post.title}
        description={post.metaDescription}
        image={post.image}
        datePublished={post.date}
        author={post.author}
        url={`https://solarinstallationvadodara.in/blog/${slug}`}
      />
      
      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <span className="inline-block px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">
              {post.h1}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-4">
        <BlogBreadcrumbs postTitle={post.title.substring(0, 40) + "..."} />
      </div>

      {/* Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Share buttons */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b">
              <span className="text-gray-500 text-sm">Share:</span>
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=https://solarinstallationvadodara.in/blog/${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=https://solarinstallationvadodara.in/blog/${slug}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://solarinstallationvadodara.in/blog/${slug}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Article content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-orange-600 prose-strong:text-gray-900 prose-table:border-collapse prose-th:bg-gray-100 prose-th:p-3 prose-td:p-3 prose-td:border prose-th:border"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />

            {/* In-article image */}
            <div className="my-8">
              <img
                src={blogImages.solar_home}
                alt="Solar installation on home in Vadodara"
                className="w-full h-64 object-cover rounded-xl"
              />
              <p className="text-sm text-gray-500 text-center mt-2">Professional solar installation by SolarInstallationVadodara.in</p>
            </div>

            {/* CTA Box */}
            <div className="mt-12 p-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Go Solar?</h3>
              <p className="opacity-90 mb-6">Get a free site survey and quote for your property in Vadodara</p>
              <a
                href="tel:+919033451995"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Call Now: +91-9033451995
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPostsData.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPostsData.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-center">
                    <span className="text-xs text-orange-600 font-medium">{relatedPost.category}</span>
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{relatedPost.title}</h3>
                    <span className="text-sm text-gray-500 flex items-center gap-1 mt-2">
                      Read More <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Articles
          </Link>
        </div>
      </section>

      <MegaFooter />
      <BusinessWhatsAppFloat business={business} area="vadodara" />
    </div>
  );
}

// Format markdown content to HTML
function formatContent(content: string): string {
  return content
    .replace(/\n/g, '<br/>')
    .replace(/## (.*?)<br\/>/g, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/### (.*?)<br\/>/g, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/✅/g, '<span class="text-green-600">✅</span>')
    .replace(/❌/g, '<span class="text-red-600">❌</span>')
    .replace(/📞/g, '<span>📞</span>')
    .replace(/📧/g, '<span>📧</span>')
    .replace(/⭐/g, '<span class="text-yellow-500">⭐</span>');
}

// Generate static params for known blog posts
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}
