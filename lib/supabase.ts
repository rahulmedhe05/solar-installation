import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

// Initialize real Supabase client if credentials exist, otherwise set up a safe null reference
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Mock database storage for out-of-the-box functionality
const isServer = typeof window === "undefined";
const getStorageItem = (key: string, defaultValue: any) => {
  if (isServer) return defaultValue;
  const val = localStorage.getItem(key);
  return val ? JSON.parse(val) : defaultValue;
};

const setStorageItem = (key: string, value: any) => {
  if (!isServer) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Initial mock data
const defaultLeads = [
  { id: "lead-1", client_name: "Rahul Mehta", mobile: "9033451995", email: "rahul@gmail.com", address: "Gotri Road, Vadodara", status: "New", source: "Website", requirements: "3kW Residential solar panels", created_at: new Date().toISOString() },
  { id: "lead-2", client_name: "Aarav Shah", mobile: "9876543210", email: "aarav@gmail.com", address: "Alkapuri, Vadodara", status: "Site Visit Scheduled", source: "Referral", requirements: "5kW On-Grid solar panels", created_at: new Date(Date.now() - 86400000).toISOString() },
  { id: "lead-3", client_name: "Sunita Patel", mobile: "9988776655", email: "sunita@gmail.com", address: "Manjalpur, Vadodara", status: "Quote Sent", source: "Facebook Ad", requirements: "10kW Commercial setup", created_at: new Date(Date.now() - 2 * 86400000).toISOString() }
];

const defaultVisits = [
  { id: "visit-1", lead_id: "lead-2", scheduled_date: new Date(Date.now() + 86400000).toISOString().split('T')[0], completed_date: "", findings: "Shadow-free roof space of 600 sq ft. Roof load capacity is good.", photos: [], technician_id: "tech-1", status: "Scheduled" }
];

const defaultQuotes = [
  { id: "quote-1", lead_id: "lead-3", system_size_kw: 10, price: 550000, subsidy_amount: 0, net_price: 550000, pdf_url: "", status: "Sent", created_at: new Date().toISOString() }
];

const defaultProjects = [
  { id: "proj-1", lead_id: "lead-3", quotation_id: "quote-1", status: "In Progress", start_date: new Date().toISOString().split('T')[0], end_date: "" }
];

const defaultInstallations = [
  { id: "inst-1", project_id: "proj-1", installer_id: "emp-2", check_list: { roofMountsSecure: true, panelsWired: true, inverterMounted: false, netMeteringConnected: false }, photos: [], status: "In Progress" }
];

const defaultServices = [
  { id: "srv-1", project_id: "proj-1", client_name: "Sunita Patel", issue_desc: "Inverter showing red indicator light.", status: "Pending" }
];

const defaultEmployees = [
  { id: "emp-1", name: "Ketan Trivedi", role: "Sales Manager", salary: 45000, joining_date: "2024-01-10" },
  { id: "emp-2", name: "Jayesh Parmar", role: "Solar Installer", salary: 28000, joining_date: "2024-03-15" },
  { id: "emp-3", name: "Anjali Vyas", role: "Support Executive", salary: 22000, joining_date: "2025-05-01" }
];

const defaultAttendance = [
  { id: "att-1", employee_id: "emp-1", date: new Date().toISOString().split('T')[0], status: "Present" },
  { id: "att-2", employee_id: "emp-2", date: new Date().toISOString().split('T')[0], status: "Present" }
];

const defaultExpenses = [
  { id: "exp-1", category: "Transport", amount: 1500, date: new Date().toISOString().split('T')[0], description: "Fuel for site visits", receipt_url: "", status: "Approved" }
];

const defaultTemplates = [
  { id: "tmp-1", name: "Welcome Lead", text: "Hello {{name}}, thanks for reaching out. We will schedule a free solar consultation for your property at {{address}} soon.", variables: ["name", "address"] },
  { id: "tmp-2", name: "Site Visit Confirmation", text: "Dear {{name}}, our solar installer will visit your site on {{date}} for a feasibility check. Please call us for queries.", variables: ["name", "date"] }
];

export const mockDb = {
  getLeads: () => getStorageItem("crm_leads", defaultLeads),
  saveLeads: (leads: any) => setStorageItem("crm_leads", leads),

  getVisits: () => getStorageItem("crm_visits", defaultVisits),
  saveVisits: (visits: any) => setStorageItem("crm_visits", visits),

  getQuotes: () => getStorageItem("crm_quotes", defaultQuotes),
  saveQuotes: (quotes: any) => setStorageItem("crm_quotes", quotes),

  getProjects: () => getStorageItem("crm_projects", defaultProjects),
  saveProjects: (projects: any) => setStorageItem("crm_projects", projects),

  getInstallations: () => getStorageItem("crm_installations", defaultInstallations),
  saveInstallations: (inst: any) => setStorageItem("crm_installations", inst),

  getServices: () => getStorageItem("crm_services", defaultServices),
  saveServices: (srv: any) => setStorageItem("crm_services", srv),

  getEmployees: () => getStorageItem("crm_employees", defaultEmployees),
  saveEmployees: (emp: any) => setStorageItem("crm_employees", emp),

  getAttendance: () => getStorageItem("crm_attendance", defaultAttendance),
  saveAttendance: (att: any) => setStorageItem("crm_attendance", att),

  getExpenses: () => getStorageItem("crm_expenses", defaultExpenses),
  saveExpenses: (exp: any) => setStorageItem("crm_expenses", exp),

  getTemplates: () => getStorageItem("crm_templates", defaultTemplates),
  saveTemplates: (tmp: any) => setStorageItem("crm_templates", tmp),
};
