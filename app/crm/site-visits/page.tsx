"use client";

import React, { useState, useEffect } from "react";
import { Calendar, User, MapPin, Plus, CheckCircle2, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mockDb } from "@/lib/supabase";

export default function SiteVisitsPage() {
  const [visits, setVisits] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [employees, setEmployees] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Form states
  const [leadId, setLeadId] = useState("");
  const [scheduledDate, setScheduledDate] = useState("");
  const [technicianId, setTechnicianId] = useState("");
  const [findings, setFindings] = useState("");

  // Edit states
  const [editingVisit, setEditingVisit] = useState<any>(null);
  const [editFindings, setEditFindings] = useState("");
  const [editStatus, setEditStatus] = useState("Scheduled");
  const [editCompletedDate, setEditCompletedDate] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setVisits(mockDb.getVisits());
    setLeads(mockDb.getLeads());
    setEmployees(mockDb.getEmployees().filter((e: any) => e.role === "Solar Installer"));
  };

  const handleScheduleVisit = (e: React.FormEvent) => {
    e.preventDefault();

    const newVisit = {
      id: "visit-" + Date.now(),
      lead_id: leadId,
      scheduled_date: scheduledDate,
      completed_date: "",
      findings,
      photos: [],
      technician_id: technicianId,
      status: "Scheduled"
    };

    // Transition lead status to "Site Visit Scheduled"
    const updatedLeads = mockDb.getLeads().map((l: any) =>
      l.id === leadId ? { ...l, status: "Site Visit Scheduled" } : l
    );
    mockDb.saveLeads(updatedLeads);

    const updatedVisits = [...visits, newVisit];
    mockDb.saveVisits(updatedVisits);
    setVisits(updatedVisits);
    setIsOpen(false);

    // Reset Form
    setLeadId("");
    setScheduledDate("");
    setTechnicianId("");
    setFindings("");
  };

  const handleUpdateVisit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingVisit) return;

    const updatedVisits = visits.map((v) =>
      v.id === editingVisit.id
        ? {
            ...v,
            findings: editFindings,
            status: editStatus,
            completed_date: editStatus === "Completed" ? editCompletedDate || new Date().toISOString().split('T')[0] : ""
          }
        : v
    );

    // If completed, transition lead status to "Site Visit Done"
    if (editStatus === "Completed") {
      const updatedLeads = mockDb.getLeads().map((l: any) =>
        l.id === editingVisit.lead_id ? { ...l, status: "Site Visit Done" } : l
      );
      mockDb.saveLeads(updatedLeads);
    }

    mockDb.saveVisits(updatedVisits);
    setVisits(updatedVisits);
    setEditingVisit(null);
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-slate-900">Site Visits Scheduler</h1>
          <p className="text-gray-500 text-sm">Schedule and log technical rooftop feasibility surveys.</p>
        </div>

        {/* Schedule Visit Modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 px-4 rounded-xl shadow-lg shadow-amber-500/10 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              <span>Schedule Visit</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold font-serif">Schedule Feasibility Visit</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleScheduleVisit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="leadSelect">Select Pipeline Lead *</Label>
                <select
                  id="leadSelect"
                  value={leadId}
                  onChange={(e) => setLeadId(e.target.value)}
                  required
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                >
                  <option value="">Choose a lead...</option>
                  {leads.map((lead) => (
                    <option key={lead.id} value={lead.id}>
                      {lead.client_name} - {lead.address} ({lead.status})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="visitDate">Scheduled Date *</Label>
                  <Input
                    id="visitDate"
                    type="date"
                    value={scheduledDate}
                    onChange={(e) => setScheduledDate(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="techSelect">Assign Technician *</Label>
                  <select
                    id="techSelect"
                    value={technicianId}
                    onChange={(e) => setTechnicianId(e.target.value)}
                    required
                    className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                  >
                    <option value="">Choose technician...</option>
                    {employees.map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name} ({emp.role})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="initialNotes">Initial Work Instructions</Label>
                <Textarea
                  id="initialNotes"
                  value={findings}
                  onChange={(e) => setFindings(e.target.value)}
                  placeholder="e.g. check roof load strength, shadow spots near parapet..."
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 mt-4">
                Confirm Schedule
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Grid of visits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visits.map((visit) => {
          const lead = leads.find((l) => l.id === visit.lead_id);
          const tech = mockDb.getEmployees().find((e: any) => e.id === visit.technician_id);
          if (!lead) return null;

          return (
            <div key={visit.id} className="bg-white border border-gray-200 shadow-sm rounded-2xl p-5 space-y-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="space-y-0.5">
                  <h4 className="font-bold text-gray-900 text-base">{lead.client_name}</h4>
                  <span className={`text-[10px] font-bold font-mono uppercase px-2 py-0.5 rounded-full border ${
                    visit.status === "Completed"
                      ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                      : "bg-amber-50 border-amber-200 text-amber-800"
                  }`}>
                    {visit.status}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 font-mono text-xs">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span>{visit.scheduled_date}</span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-600 font-medium">
                <p className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" /> {lead.address}</p>
                <p className="flex items-center gap-1.5"><User className="w-4 h-4 text-gray-400 flex-shrink-0" /> Tech: {tech?.name || "Unassigned"}</p>
              </div>

              <div className="border-t border-gray-100 pt-3 bg-slate-50 p-3 rounded-xl border">
                <span className="text-xs font-bold text-gray-400 font-mono uppercase tracking-wider block">Findings & Notes</span>
                <p className="text-xs text-gray-700 mt-1 leading-relaxed">{visit.findings || "No findings logged yet."}</p>
              </div>

              {/* Log Results Trigger */}
              {visit.status === "Scheduled" && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      onClick={() => {
                        setEditingVisit(visit);
                        setEditFindings(visit.findings);
                        setEditStatus(visit.status);
                        setEditCompletedDate(new Date().toISOString().split('T')[0]);
                      }}
                      className="w-full bg-slate-100 hover:bg-amber-500 text-slate-800 hover:text-slate-950 font-bold border border-slate-200 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/10 active:scale-[0.99] transition-all"
                    >
                      <Clipboard className="w-4 h-4 mr-2" />
                      Log Feasibility Findings
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="text-lg font-bold font-serif">Log Findings: {lead.client_name}</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleUpdateVisit} className="space-y-4 mt-4 text-sm">
                      <div className="space-y-2">
                        <Label htmlFor="editStatus">Visits Status</Label>
                        <select
                          id="editStatus"
                          value={editStatus}
                          onChange={(e) => setEditStatus(e.target.value)}
                          className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                        >
                          <option value="Scheduled">Scheduled</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </div>

                      {editStatus === "Completed" && (
                        <div className="space-y-2">
                          <Label htmlFor="completedDate">Completion Date</Label>
                          <Input
                            id="completedDate"
                            type="date"
                            value={editCompletedDate}
                            onChange={(e) => setEditCompletedDate(e.target.value)}
                            required
                          />
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="editFindings">Feasibility Report Findings</Label>
                        <Textarea
                          id="editFindings"
                          value={editFindings}
                          onChange={(e) => setEditFindings(e.target.value)}
                          required
                          placeholder="Log roof load ability, shading details, cable routing length etc."
                          rows={4}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 mt-4">
                        Save Report
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
