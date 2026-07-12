"use client";

import React, { useState, useEffect } from "react";
import { CheckSquare, Square, User, Wrench, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mockDb } from "@/lib/supabase";

export default function InstallationsPage() {
  const [installations, setInstallations] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [installers, setInstallers] = useState<any[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setInstallations(mockDb.getInstallations());
    setProjects(mockDb.getProjects());
    setLeads(mockDb.getLeads());
    setInstallers(mockDb.getEmployees().filter((e: any) => e.role === "Solar Installer"));
  };

  const handleToggleCheck = (installationId: string, itemKey: string) => {
    const updated = installations.map((inst) => {
      if (inst.id === installationId) {
        const newChecklist = {
          ...inst.check_list,
          [itemKey]: !inst.check_list[itemKey]
        };

        // Check if all items in checklist are true
        const allCompleted = Object.values(newChecklist).every((val) => val === true);
        const newStatus = allCompleted ? "Completed" : "In Progress";

        // If completed, update project status to "Installed"
        if (allCompleted) {
          const updatedProjects = mockDb.getProjects().map((p: any) =>
            p.id === inst.project_id ? { ...p, status: "Installed" } : p
          );
          mockDb.saveProjects(updatedProjects);
          setProjects(updatedProjects);
        }

        return {
          ...inst,
          check_list: newChecklist,
          status: newStatus
        };
      }
      return inst;
    });

    mockDb.saveInstallations(updated);
    setInstallations(updated);
  };

  const handleAssignInstaller = (installationId: string, installerId: string) => {
    const updated = installations.map((inst) =>
      inst.id === installationId ? { ...inst, installer_id: installerId } : inst
    );
    mockDb.saveInstallations(updated);
    setInstallations(updated);
  };

  return (
    <div className="space-y-6 font-sans">
      <div>
        <h1 className="text-3xl font-bold font-serif text-slate-900">Installation Controls</h1>
        <p className="text-gray-500 text-sm">Assign technicians and complete electrical/structural quality checklists.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {installations.map((inst) => {
          const project = projects.find((p) => p.id === inst.project_id);
          if (!project) return null;
          const lead = leads.find((l) => l.id === project.lead_id);
          if (!lead) return null;

          const assignedInstaller = installers.find((i) => i.id === inst.installer_id);

          return (
            <div key={inst.id} className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 space-y-5 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div className="space-y-0.5">
                  <h3 className="font-extrabold text-slate-900 text-lg">{lead.client_name}</h3>
                  <p className="text-xs text-gray-400 font-mono">Project Ref: {project.id}</p>
                </div>
                <span className={`text-[10px] font-bold font-mono uppercase px-2.5 py-0.5 rounded-full border ${
                  inst.status === "Completed"
                    ? "bg-emerald-50 border-emerald-200 text-emerald-800 animate-pulse"
                    : "bg-amber-50 border-amber-200 text-amber-800"
                }`}>
                  {inst.status}
                </span>
              </div>

              {/* Installer Assignment */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-gray-500" />
                  <span className="text-sm font-semibold text-gray-700">Installer Assigned:</span>
                </div>
                <select
                  value={inst.installer_id || ""}
                  onChange={(e) => handleAssignInstaller(inst.id, e.target.value)}
                  className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-xs focus:outline-none"
                >
                  <option value="">Select installer...</option>
                  {installers.map((installer) => (
                    <option key={installer.id} value={installer.id}>
                      {installer.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Checklist */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-500 text-xs uppercase tracking-wider font-mono">Sign-off Checklist</h4>
                
                <div className="grid grid-cols-1 gap-2.5">
                  {[
                    { key: "roofMountsSecure", label: "Structural: Roof Mounts & Rails Securing Checks" },
                    { key: "panelsWired", label: "Electrical: Solar Panel Wiring & MC4 Connectors" },
                    { key: "inverterMounted", label: "Control: Solar Inverter Mounting & Earthing" },
                    { key: "netMeteringConnected", label: "Grid: Net Metering Device Hookup Feasibility" }
                  ].map((item) => {
                    const isChecked = inst.check_list[item.key];
                    return (
                      <button
                        key={item.key}
                        onClick={() => handleToggleCheck(inst.id, item.key)}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left ${
                          isChecked 
                            ? "bg-amber-50 border-amber-200 text-amber-900 font-bold" 
                            : "bg-white border-gray-200 text-gray-600 hover:bg-slate-50"
                        }`}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-amber-500 flex-shrink-0" />
                        ) : (
                          <Square className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                        <span className="text-sm font-medium leading-tight">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Checklist Sign-off notice */}
              {inst.status === "Completed" && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-2.5 text-xs font-bold font-mono uppercase tracking-wider">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>QC Passed & Auto-promoted to Installed</span>
                </div>
              )}
            </div>
          );
        })}
        {installations.length === 0 && (
          <div className="col-span-2 text-center p-8 bg-white border border-gray-200 rounded-2xl text-gray-400 font-mono">
            No active installations logged in the system.
          </div>
        )}
      </div>
    </div>
  );
}
