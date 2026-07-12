"use client";

import React, { useState, useEffect } from "react";
import { Briefcase, Calendar, CheckCircle2, CircleDot, Play, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockDb } from "@/lib/supabase";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [quotes, setQuotes] = useState<any[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setProjects(mockDb.getProjects());
    setLeads(mockDb.getLeads());
    setQuotes(mockDb.getQuotes());
  };

  const handleUpdateStatus = (projectId: string, newStatus: string) => {
    const updated = projects.map((p) =>
      p.id === projectId
        ? {
            ...p,
            status: newStatus,
            end_date: newStatus === "Commissioned" ? new Date().toISOString().split('T')[0] : p.end_date
          }
        : p
    );
    mockDb.saveProjects(updated);
    setProjects(updated);
  };

  const statuses = ["Signed", "Installation Scheduled", "In Progress", "Installed", "Commissioned"];

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h1 className="text-3xl font-bold font-serif text-slate-900">Project Operations</h1>
        <p className="text-gray-500 text-sm">Track milestones and commissioning status for all active solar installations.</p>
      </div>

      <div className="space-y-4">
        {projects.map((project) => {
          const lead = leads.find((l) => l.id === project.lead_id);
          const quote = quotes.find((q) => q.id === project.quotation_id);
          if (!lead || !quote) return null;

          const currentStepIndex = statuses.indexOf(project.status);

          return (
            <div key={project.id} className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 space-y-6 hover:shadow-md transition-shadow">
              {/* Header row */}
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-slate-900 text-lg">{lead.client_name}</h3>
                    <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-mono">Location: {lead.address}</p>
                </div>

                <div className="flex items-center gap-6 text-xs text-gray-500">
                  <div>
                    <span className="font-bold text-gray-400 font-mono uppercase tracking-wider block text-[10px]">Solar Setup</span>
                    <span className="font-bold text-slate-800">{quote.system_size_kw} kW ({quote.panel_type || "Mono PERC"})</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-400 font-mono uppercase tracking-wider block text-[10px]">Start Date</span>
                    <span className="font-bold text-slate-800 flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-gray-400" /> {project.start_date}</span>
                  </div>
                </div>
              </div>

              {/* Progress Flow Timeline */}
              <div className="relative pt-2 pb-6">
                {/* Horizontal progress bar background */}
                <div className="absolute top-6 left-0 right-0 h-1 bg-gray-100 -z-10 rounded-full" />
                <div 
                  className="absolute top-6 left-0 h-1 bg-amber-500 -z-10 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStepIndex / (statuses.length - 1)) * 100}%` }}
                />

                <div className="flex justify-between items-center z-10">
                  {statuses.map((status, index) => {
                    const isDone = index < currentStepIndex;
                    const isCurrent = index === currentStepIndex;
                    const isPending = index > currentStepIndex;

                    return (
                      <div key={status} className="flex flex-col items-center space-y-1.5 flex-1 text-center">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center border transition-all ${
                          isDone 
                            ? "bg-amber-500 border-amber-500 text-slate-950 font-bold" 
                            : isCurrent 
                            ? "bg-white border-amber-500 text-amber-500 ring-4 ring-amber-500/10 font-bold" 
                            : "bg-white border-gray-200 text-gray-400"
                        }`}>
                          {isDone ? (
                            <CheckCircle2 className="w-5 h-5 text-slate-950" />
                          ) : (
                            <CircleDot className="w-4 h-4" />
                          )}
                        </div>
                        <span className={`text-[10px] font-bold tracking-tight font-mono ${
                          isCurrent ? "text-amber-600 font-extrabold" : "text-gray-400"
                        }`}>
                          {status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Update actions */}
              <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                <span className="text-xs text-gray-400 font-mono">Project Actions:</span>
                <div className="flex gap-2.5">
                  {currentStepIndex < statuses.length - 1 && (
                    <Button 
                      onClick={() => handleUpdateStatus(project.id, statuses[currentStepIndex + 1])}
                      className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-1.5 px-3.5 h-8 rounded-lg shadow-sm flex items-center gap-1.5"
                    >
                      <Play className="w-3.5 h-3.5 text-slate-950" />
                      <span>Promote to: {statuses[currentStepIndex + 1]}</span>
                    </Button>
                  )}
                  {project.status !== "Commissioned" && (
                    <Button 
                      onClick={() => handleUpdateStatus(project.id, "Commissioned")}
                      className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold border border-emerald-200 py-1.5 px-3.5 h-8 rounded-lg"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      Instant Commission
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {projects.length === 0 && (
          <div className="text-center p-8 bg-white border border-gray-200 rounded-2xl text-gray-400 font-mono">
            No active project operations registered.
          </div>
        )}
      </div>
    </div>
  );
}
