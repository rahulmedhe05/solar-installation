"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  Sun, LayoutDashboard, Users, MapPin, FileText, 
  Briefcase, Wrench, ShieldAlert, Receipt, MessageSquare, 
  LogOut, ClipboardList, Settings, Landmark
} from "lucide-react";

interface SidebarLink {
  href: string;
  label: string;
  icon: React.ComponentType<any>;
  roles?: string[];
}

const sidebarLinks: SidebarLink[] = [
  { href: "/crm", label: "Dashboard", icon: LayoutDashboard },
  { href: "/crm/leads", label: "Leads Pipeline", icon: Users },
  { href: "/crm/site-visits", label: "Site Visits", icon: MapPin },
  { href: "/crm/quotes", label: "Quotations", icon: FileText },
  { href: "/crm/projects", label: "Projects", icon: Briefcase },
  { href: "/crm/installations", label: "Installations", icon: Wrench },
  { href: "/crm/services", label: "Service Tickets", icon: ShieldAlert },
  { href: "/crm/employees", label: "Employees & Attendance", icon: ClipboardList },
  { href: "/crm/expenses", label: "Expenses Tracker", icon: Receipt },
  { href: "/crm/templates", label: "WhatsApp Templates", icon: MessageSquare }
];

export default function CRMLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);

  useEffect(() => {
    // Check local mock user or session
    const mockUser = localStorage.getItem("crm_user");
    if (!mockUser && pathname !== "/crm/login") {
      router.push("/crm/login");
    } else if (mockUser) {
      setUser(JSON.parse(mockUser));
    }
  }, [pathname, router]);

  // If we are on the login page, render without sidebar
  if (pathname === "/crm/login") {
    return <>{children}</>;
  }

  const handleLogout = () => {
    localStorage.removeItem("crm_user");
    setUser(null);
    router.push("/crm/login");
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col justify-between border-r border-slate-800 shadow-xl">
        <div>
          {/* Header Branding */}
          <div className="p-6 border-b border-slate-800 flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30">
              <Sun className="w-6 h-6 text-slate-950 font-bold" />
            </div>
            <div>
              <h1 className="font-extrabold text-lg leading-tight tracking-wider text-amber-400">TARUN & CO.</h1>
              <p className="text-xs text-slate-400 tracking-widest font-mono">SOLAR CRM</p>
            </div>
          </div>

          {/* Links list */}
          <nav className="p-4 space-y-1.5 flex-1 max-h-[calc(100vh-180px)] overflow-y-auto">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href || (link.href !== "/crm" && pathname.startsWith(link.href));
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                    isActive 
                      ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 font-bold" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-slate-950" : "text-slate-400"}`} />
                  <span className="text-sm">{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Card & Logout */}
        <div className="p-4 border-t border-slate-800 space-y-3 bg-slate-950/40">
          {user && (
            <div className="flex items-center gap-3 px-2">
              <div className="h-9 w-9 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold border border-slate-600">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-bold text-slate-100 truncate">{user.name}</p>
                <p className="text-xs text-amber-500 font-mono tracking-wider">{user.role}</p>
              </div>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all font-medium text-sm"
          >
            <LogOut className="w-5 h-5 text-red-400" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header toolbar */}
        <header className="h-16 border-b border-gray-200 bg-white px-8 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 font-serif">
            {sidebarLinks.find(l => l.href === pathname || (l.href !== "/crm" && pathname.startsWith(l.href)))?.label || "CRM Dashboard"}
          </h2>
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs text-gray-500 font-mono">Live Session</span>
          </div>
        </header>

        {/* Content body */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
