"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Users, MapPin, FileText, Briefcase, 
  TrendingUp, Activity, PlusCircle, AlertCircle, ArrowUpRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockDb } from "@/lib/supabase";

export default function CRMDashboard() {
  const [stats, setStats] = useState({
    totalLeads: 0,
    newLeads: 0,
    activeProjects: 0,
    revenue: 0,
    pendingServices: 0
  });

  const [recentLeads, setRecentLeads] = useState<any[]>([]);

  useEffect(() => {
    // Load dynamic data from mock database
    const leads = mockDb.getLeads();
    const projects = mockDb.getProjects();
    const quotes = mockDb.getQuotes();
    const services = mockDb.getServices();

    const wonQuotes = quotes.filter((q: any) => q.status === "Accepted");
    const totalRev = wonQuotes.reduce((acc: number, curr: any) => acc + Number(curr.net_price), 0);

    setStats({
      totalLeads: leads.length,
      newLeads: leads.filter((l: any) => l.status === "New").length,
      activeProjects: projects.filter((p: any) => p.status === "In Progress" || p.status === "Signed").length,
      revenue: totalRev,
      pendingServices: services.filter((s: any) => s.status === "Pending").length
    });

    setRecentLeads(leads.slice(-3).reverse());
  }, []);

  return (
    <div className="space-y-8 font-sans">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-amber-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden border border-slate-800">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-3xl font-bold font-serif text-amber-400">Welcome to Tarun & Co. Control Center</h1>
          <p className="text-slate-300 max-w-xl text-sm leading-relaxed">
            Monitor and manage your entire solar installation business operations — from the initial lead capture to installation sign-off and service maintenance.
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="space-y-1.5">
              <p className="text-sm font-semibold text-gray-500 font-mono uppercase tracking-wider">Total Pipeline Leads</p>
              <h3 className="text-3xl font-extrabold text-slate-900">{stats.totalLeads}</h3>
              <p className="text-xs text-emerald-600 font-medium">+{stats.newLeads} new leads</p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              <Users className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="space-y-1.5">
              <p className="text-sm font-semibold text-gray-500 font-mono uppercase tracking-wider">Active Projects</p>
              <h3 className="text-3xl font-extrabold text-slate-900">{stats.activeProjects}</h3>
              <p className="text-xs text-gray-500">In-progress setups</p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
              <Briefcase className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="space-y-1.5">
              <p className="text-sm font-semibold text-gray-500 font-mono uppercase tracking-wider">Total Revenue</p>
              <h3 className="text-3xl font-extrabold text-slate-900">₹{stats.revenue.toLocaleString('en-IN')}</h3>
              <p className="text-xs text-emerald-600 font-medium">Based on won deals</p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <TrendingUp className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="space-y-1.5">
              <p className="text-sm font-semibold text-gray-500 font-mono uppercase tracking-wider">Service Tickets</p>
              <h3 className="text-3xl font-extrabold text-slate-900">{stats.pendingServices}</h3>
              <p className="text-xs text-red-500 font-medium">Requires immediate response</p>
            </div>
            <div className="h-12 w-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
              <AlertCircle className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Recent Leads */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-serif text-gray-900">Recent Pipeline Actions</h2>
            <Link href="/crm/leads" className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1">
              <span>View Pipeline</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {recentLeads.map((lead) => (
              <div key={lead.id} className="bg-white rounded-2xl p-5 border border-gray-200 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <h4 className="font-bold text-gray-900 text-base">{lead.client_name}</h4>
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                      {lead.status}
                    </span>
                  </div>
                  <div className="flex gap-4 text-xs text-gray-500 font-mono">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-gray-400" /> {lead.address}</span>
                    <span>Source: {lead.source}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-mono">{new Date(lead.created_at).toLocaleDateString('en-IN')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Quick Operations */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-serif text-gray-900">Quick Actions</h2>
          
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
            <Link 
              href="/crm/leads" 
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-amber-50 hover:border-amber-200 transition-all font-medium text-sm group"
            >
              <PlusCircle className="w-5 h-5 text-gray-500 group-hover:text-amber-600" />
              <div>
                <p className="font-bold text-gray-900">Add New Lead</p>
                <p className="text-xs text-gray-500 mt-0.5">Register client details & requirements</p>
              </div>
            </Link>

            <Link 
              href="/crm/quotes" 
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-amber-50 hover:border-amber-200 transition-all font-medium text-sm group"
            >
              <FileText className="w-5 h-5 text-gray-500 group-hover:text-amber-600" />
              <div>
                <p className="font-bold text-gray-900">Create Quotation</p>
                <p className="text-xs text-gray-500 mt-0.5">Calculate system size & subsidy pricing</p>
              </div>
            </Link>

            <Link 
              href="/crm/expenses" 
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50 hover:bg-amber-50 hover:border-amber-200 transition-all font-medium text-sm group"
            >
              <TrendingUp className="w-5 h-5 text-gray-500 group-hover:text-amber-600" />
              <div>
                <p className="font-bold text-gray-900">Record Expense</p>
                <p className="text-xs text-gray-500 mt-0.5">Log travel or operational expense</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
