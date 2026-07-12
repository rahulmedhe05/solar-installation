"use client";

import React, { useState, useEffect } from "react";
import { Plus, Search, Filter, Phone, MapPin, Edit, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mockDb } from "@/lib/supabase";

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  // Form states
  const [clientName, setClientName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [requirements, setRequirements] = useState("");
  const [source, setSource] = useState("Website");

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = () => {
    const data = mockDb.getLeads();
    setLeads(data);
    setFilteredLeads(data);
  };

  useEffect(() => {
    let result = leads;

    if (searchQuery) {
      result = result.filter(
        (lead) =>
          lead.client_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          lead.mobile.includes(searchQuery) ||
          lead.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter !== "All") {
      result = result.filter((lead) => lead.status === statusFilter);
    }

    setFilteredLeads(result);
  }, [searchQuery, statusFilter, leads]);

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();

    const newLead = {
      id: "lead-" + Date.now(),
      client_name: clientName,
      mobile,
      email,
      address,
      requirements,
      source,
      status: "New",
      created_at: new Date().toISOString()
    };

    const updatedLeads = [...leads, newLead];
    mockDb.saveLeads(updatedLeads);
    setLeads(updatedLeads);
    setIsOpen(false);

    // Reset Form
    setClientName("");
    setMobile("");
    setEmail("");
    setAddress("");
    setRequirements("");
    setSource("Website");
  };

  const handleUpdateStatus = (leadId: string, newStatus: string) => {
    const updatedLeads = leads.map((lead) =>
      lead.id === leadId ? { ...lead, status: newStatus } : lead
    );
    mockDb.saveLeads(updatedLeads);
    setLeads(updatedLeads);
  };

  const statuses = ["New", "Contacted", "Site Visit Scheduled", "Site Visit Done", "Quote Sent", "Won", "Lost"];

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-slate-900">Leads Pipeline</h1>
          <p className="text-gray-500 text-sm">Register and qualify sales leads through the pipeline stages.</p>
        </div>

        {/* Create Lead Modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 px-4 rounded-xl shadow-lg shadow-amber-500/10 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              <span>Add Lead</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold font-serif">Add New Lead</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateLead} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="clientName">Client Full Name *</Label>
                  <Input
                    id="clientName"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                    placeholder="Enter full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                    placeholder="10-digit mobile"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="client@gmail.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="source">Lead Source</Label>
                  <select
                    id="source"
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  >
                    <option value="Website">Website</option>
                    <option value="Referral">Referral</option>
                    <option value="Facebook Ad">Facebook Ad</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Direct Walk-in">Direct Walk-in</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Installation Address *</Label>
                <Input
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  placeholder="Street address, neighborhood, Vadodara"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Load / Requirements Details</Label>
                <Textarea
                  id="requirements"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="e.g. 3kW On-grid system, monthly bill ₹5000..."
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 mt-4">
                Register Lead
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filter and search toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by client name, mobile or address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 text-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none"
          >
            <option value="All">All Stages</option>
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table / List */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider font-mono">
                <th className="p-4 pl-6">Client Name</th>
                <th className="p-4">Contact Info</th>
                <th className="p-4">Address</th>
                <th className="p-4">Pipeline Stage</th>
                <th className="p-4 text-right pr-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 pl-6 font-bold text-gray-900">{lead.client_name}</td>
                  <td className="p-4">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-1.5 text-gray-600 font-mono text-xs">
                        <Phone className="w-3.5 h-3.5 text-gray-400" />
                        <span>{lead.mobile}</span>
                      </div>
                      {lead.email && <div className="text-xs text-gray-400">{lead.email}</div>}
                    </div>
                  </td>
                  <td className="p-4 max-w-xs truncate text-gray-600 font-medium">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" /> {lead.address}</span>
                  </td>
                  <td className="p-4">
                    <select
                      value={lead.status}
                      onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                      className={`text-xs font-bold font-mono uppercase border rounded-full px-3 py-1 focus:outline-none ${
                        lead.status === "Won" 
                          ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
                          : lead.status === "Lost" 
                          ? "bg-red-50 border-red-200 text-red-800" 
                          : "bg-slate-50 border-slate-200 text-slate-700"
                      }`}
                    >
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4 text-right pr-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="text-gray-400 hover:text-amber-600 transition-colors p-1.5 rounded-lg hover:bg-slate-100">
                          <Edit className="w-4 h-4" />
                        </button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-lg font-bold font-serif">Lead Details: {lead.client_name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-3 mt-4 text-sm">
                          <div>
                            <span className="font-bold text-gray-500 text-xs uppercase tracking-wider block">Requirements</span>
                            <p className="text-gray-800 mt-1 bg-slate-50 p-3 rounded-lg border border-slate-100">{lead.requirements || "No specific details logged."}</p>
                          </div>
                          <div>
                            <span className="font-bold text-gray-500 text-xs uppercase tracking-wider block">Lead Source</span>
                            <p className="text-gray-800 mt-1 font-medium">{lead.source}</p>
                          </div>
                          <div>
                            <span className="font-bold text-gray-500 text-xs uppercase tracking-wider block">Registered At</span>
                            <p className="text-gray-800 mt-1 font-mono text-xs">{new Date(lead.created_at).toLocaleString('en-IN')}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </td>
                </tr>
              ))}
              {filteredLeads.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center p-8 text-gray-400 font-mono">
                    No leads found matching current criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
