"use client";

import React, { useState, useEffect } from "react";
import { ShieldAlert, Plus, Phone, Hammer, CheckSquare, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mockDb } from "@/lib/supabase";

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Form states
  const [projectId, setProjectId] = useState("");
  const [clientName, setClientName] = useState("");
  const [issueDesc, setIssueDesc] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setServices(mockDb.getServices());
    setProjects(mockDb.getProjects());
    setLeads(mockDb.getLeads());
  };

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedProj = projects.find((p) => p.id === projectId);
    const selectedLead = leads.find((l) => l.id === selectedProj?.lead_id);

    const newTicket = {
      id: "srv-" + Date.now(),
      project_id: projectId,
      client_name: clientName || selectedLead?.client_name || "Unknown Client",
      issue_desc: issueDesc,
      status: "Pending"
    };

    const updated = [...services, newTicket];
    mockDb.saveServices(updated);
    setServices(updated);
    setIsOpen(false);

    // Reset Form
    setProjectId("");
    setClientName("");
    setIssueDesc("");
  };

  const handleUpdateStatus = (ticketId: string, newStatus: string) => {
    const updated = services.map((s) =>
      s.id === ticketId ? { ...s, status: newStatus } : s
    );
    mockDb.saveServices(updated);
    setServices(updated);
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-slate-900">Service Tickets</h1>
          <p className="text-gray-500 text-sm">Log and resolve after-sales support issues and maintenance tickets.</p>
        </div>

        {/* Create Ticket Trigger */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 px-4 rounded-xl shadow-lg shadow-amber-500/10 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              <span>Log Ticket</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[450px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold font-serif">Log Service Ticket</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateTicket} className="space-y-4 mt-4 text-sm">
              <div className="space-y-2">
                <Label htmlFor="projSelect">Select Active Project *</Label>
                <select
                  id="projSelect"
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                  required
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                >
                  <option value="">Choose project...</option>
                  {projects.map((p) => {
                    const l = leads.find((lead) => lead.id === p.lead_id);
                    return (
                      <option key={p.id} value={p.id}>
                        {l?.client_name || "Project"} - Ref: {p.id.slice(-6)}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="clientName">Customer Name (Optional)</Label>
                <Input
                  id="clientName"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="Defaults to project client"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="issueDesc">Issue Description *</Label>
                <Textarea
                  id="issueDesc"
                  value={issueDesc}
                  onChange={(e) => setIssueDesc(e.target.value)}
                  required
                  placeholder="e.g. inverter generation is lower than normal, panel damage after heavy wind..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 mt-4">
                Register Ticket
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tickets List */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider font-mono">
                <th className="p-4 pl-6">Client Name</th>
                <th className="p-4">Project Ref</th>
                <th className="p-4">Issue details</th>
                <th className="p-4">Ticket Status</th>
                <th className="p-4 text-right pr-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {services.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 pl-6 font-bold text-gray-900">{ticket.client_name}</td>
                  <td className="p-4 font-mono text-xs text-gray-500">Ref: {ticket.project_id.slice(-6)}</td>
                  <td className="p-4 max-w-xs truncate text-gray-600 font-medium">{ticket.issue_desc}</td>
                  <td className="p-4">
                    <select
                      value={ticket.status}
                      onChange={(e) => handleUpdateStatus(ticket.id, e.target.value)}
                      className={`text-xs font-bold font-mono uppercase border rounded-full px-3 py-1 focus:outline-none ${
                        ticket.status === "Resolved"
                          ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                          : ticket.status === "Scheduled"
                          ? "bg-amber-50 border-amber-200 text-amber-800"
                          : "bg-red-50 border-red-200 text-red-800"
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Scheduled">Scheduled</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </td>
                  <td className="p-4 text-right pr-6">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="text-gray-400 hover:text-amber-600 transition-colors p-1.5 rounded-lg hover:bg-slate-100">
                          <Eye className="w-4 h-4" />
                        </button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="text-lg font-bold font-serif">Service Ticket Log</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 mt-4 text-sm">
                          <div>
                            <span className="font-bold text-gray-400 text-xs uppercase tracking-wider block">Customer Name</span>
                            <p className="font-bold text-gray-900 mt-0.5">{ticket.client_name}</p>
                          </div>
                          <div>
                            <span className="font-bold text-gray-400 text-xs uppercase tracking-wider block">Log Details Description</span>
                            <p className="text-gray-700 mt-1 bg-slate-50 p-4 rounded-xl border border-slate-100 leading-relaxed">{ticket.issue_desc}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </td>
                </tr>
              ))}
              {services.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center p-8 text-gray-400 font-mono">
                    No active service tickets logged.
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
