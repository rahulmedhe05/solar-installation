-- ==========================================
-- TARUN & CO. SOLAR CRM DATABASE SCHEMA
-- ==========================================

-- 1. Profiles & Role-Based Access Control
CREATE TYPE user_role AS ENUM ('Admin', 'Sales', 'Installer', 'Support');

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  role user_role NOT NULL DEFAULT 'Sales',
  phone TEXT,
  active BOOLEAN NOT NULL DEFAULT true,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS for profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read-access to profiles"
  ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Allow users to update own profile"
  ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- 2. Leads pipeline
CREATE TYPE lead_status AS ENUM ('New', 'Contacted', 'Site Visit Scheduled', 'Site Visit Done', 'Quote Sent', 'Won', 'Lost');

CREATE TABLE IF NOT EXISTS public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  mobile TEXT NOT NULL,
  email TEXT,
  address TEXT NOT NULL,
  status lead_status NOT NULL DEFAULT 'New',
  source TEXT NOT NULL DEFAULT 'Website',
  requirements TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  assigned_to UUID REFERENCES public.profiles(id)
);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "CRM access to leads" ON public.leads FOR ALL USING (true);

-- 3. Site Visits
CREATE TABLE IF NOT EXISTS public.site_visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE NOT NULL,
  scheduled_date DATE NOT NULL,
  completed_date DATE,
  findings TEXT,
  photos TEXT[] DEFAULT '{}',
  technician_id UUID REFERENCES public.profiles(id),
  status TEXT NOT NULL DEFAULT 'Scheduled' CHECK (status IN ('Scheduled', 'Completed', 'Cancelled'))
);

ALTER TABLE public.site_visits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "CRM access to visits" ON public.site_visits FOR ALL USING (true);

-- 4. Quotations
CREATE TABLE IF NOT EXISTS public.quotations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE NOT NULL,
  system_size_kw NUMERIC NOT NULL,
  price NUMERIC NOT NULL,
  subsidy_amount NUMERIC NOT NULL DEFAULT 0,
  net_price NUMERIC NOT NULL,
  pdf_url TEXT,
  status TEXT NOT NULL DEFAULT 'Draft' CHECK (status IN ('Draft', 'Sent', 'Accepted', 'Rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.quotations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "CRM access to quotes" ON public.quotations FOR ALL USING (true);

-- 5. Projects
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES public.leads(id) NOT NULL,
  quotation_id UUID REFERENCES public.quotations(id) NOT NULL,
  status TEXT NOT NULL DEFAULT 'Signed' CHECK (status IN ('Signed', 'Installation Scheduled', 'In Progress', 'Installed', 'Commissioned')),
  start_date DATE NOT NULL,
  end_date DATE
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "CRM access to projects" ON public.projects FOR ALL USING (true);

-- 6. Installations
CREATE TABLE IF NOT EXISTS public.installations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE NOT NULL,
  installer_id UUID REFERENCES public.profiles(id),
  check_list JSONB NOT NULL DEFAULT '{"roofMountsSecure": false, "panelsWired": false, "inverterMounted": false, "netMeteringConnected": false}'::jsonb,
  photos TEXT[] DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'In Progress' CHECK (status IN ('In Progress', 'Completed'))
);

ALTER TABLE public.installations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "CRM access to installations" ON public.installations FOR ALL USING (true);

-- 7. After-Sales Service Tickets
CREATE TABLE IF NOT EXISTS public.services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE NOT NULL,
  client_name TEXT NOT NULL,
  issue_desc TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'Scheduled', 'Resolved'))
);

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "CRM access to services" ON public.services FOR ALL USING (true);

-- 8. Employees, Attendance, Payroll & Expenses
CREATE TABLE IF NOT EXISTS public.employees (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  salary NUMERIC NOT NULL,
  joining_date DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS public.attendance (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  employee_id UUID REFERENCES public.employees(id) ON DELETE CASCADE NOT NULL,
  date DATE NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('Present', 'Absent', 'Leave'))
);

CREATE TABLE IF NOT EXISTS public.expenses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  date DATE NOT NULL,
  description TEXT,
  receipt_url TEXT,
  status TEXT NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'Approved', 'Rejected'))
);

ALTER TABLE public.employees ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expenses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "CRM access to employees" ON public.employees FOR ALL USING (true);
CREATE POLICY "CRM access to attendance" ON public.attendance FOR ALL USING (true);
CREATE POLICY "CRM access to expenses" ON public.expenses FOR ALL USING (true);

-- 9. WhatsApp Templates
CREATE TABLE IF NOT EXISTS public.whatsapp_templates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  text TEXT NOT NULL,
  variables TEXT[] NOT NULL
);

ALTER TABLE public.whatsapp_templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "CRM access to templates" ON public.whatsapp_templates FOR ALL USING (true);
