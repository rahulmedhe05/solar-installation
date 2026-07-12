"use client";

import React, { useState, useEffect } from "react";
import { Plus, FileText, CheckCircle2, XCircle, Printer, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { mockDb } from "@/lib/supabase";

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Form states
  const [leadId, setLeadId] = useState("");
  const [systemSize, setSystemSize] = useState<number>(3);
  const [panelType, setPanelType] = useState("Mono PERC");
  const [price, setPrice] = useState<number>(0);
  const [subsidy, setSubsidy] = useState<number>(0);
  const [netPrice, setNetPrice] = useState<number>(0);

  // Preview state
  const [previewQuote, setPreviewQuote] = useState<any>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setQuotes(mockDb.getQuotes());
    setLeads(mockDb.getLeads());
  };

  // Pricing calculator based on system size and panel type
  useEffect(() => {
    let pricePerKw = 60000;
    if (systemSize >= 3) pricePerKw = 55000;
    if (systemSize >= 5) pricePerKw = 50000;
    if (systemSize >= 10) pricePerKw = 45000;

    let multiplier = 1;
    if (panelType === "Bifacial") multiplier = 1.15; // 15% extra for bifacial
    if (panelType === "Polycrystalline") multiplier = 0.85; // 15% discount for poly

    const grossPrice = Math.round(systemSize * pricePerKw * multiplier);

    // PM Surya Ghar Yojana Subsidy rules
    let subsidyAmt = 0;
    if (systemSize >= 1) {
      if (systemSize === 1) {
        subsidyAmt = 30000;
      } else if (systemSize === 2) {
        subsidyAmt = 60000;
      } else {
        subsidyAmt = 78000; // max cap for 3kW and above
      }
    }

    setPrice(grossPrice);
    setSubsidy(subsidyAmt);
    setNetPrice(grossPrice - subsidyAmt);
  }, [systemSize, panelType]);

  const handleCreateQuote = (e: React.FormEvent) => {
    e.preventDefault();

    const newQuote = {
      id: "quote-" + Date.now(),
      lead_id: leadId,
      system_size_kw: systemSize,
      price: price,
      subsidy_amount: subsidy,
      net_price: netPrice,
      panel_type: panelType,
      status: "Draft",
      created_at: new Date().toISOString()
    };

    // Transition lead status to "Quote Sent"
    const updatedLeads = mockDb.getLeads().map((l: any) =>
      l.id === leadId ? { ...l, status: "Quote Sent" } : l
    );
    mockDb.saveLeads(updatedLeads);

    const updatedQuotes = [...quotes, newQuote];
    mockDb.saveQuotes(updatedQuotes);
    setQuotes(updatedQuotes);
    setIsOpen(false);

    // Reset Form
    setLeadId("");
    setSystemSize(3);
    setPanelType("Mono PERC");
  };

  const handleUpdateStatus = (quoteId: string, newStatus: string) => {
    const updatedQuotes = quotes.map((q) =>
      q.id === quoteId ? { ...q, status: newStatus } : q
    );
    mockDb.saveQuotes(updatedQuotes);
    setQuotes(updatedQuotes);

    // If accepted, auto-create a Project
    if (newStatus === "Accepted") {
      const quote = quotes.find((q) => q.id === quoteId);
      if (quote) {
        // Transition lead to "Won"
        const updatedLeads = mockDb.getLeads().map((l: any) =>
          l.id === quote.lead_id ? { ...l, status: "Won" } : l
        );
        mockDb.saveLeads(updatedLeads);

        // Add project
        const projects = mockDb.getProjects();
        const newProject = {
          id: "proj-" + Date.now(),
          lead_id: quote.lead_id,
          quotation_id: quote.id,
          status: "Signed",
          start_date: new Date().toISOString().split('T')[0],
          end_date: ""
        };
        const updatedProjects = [...projects, newProject];
        mockDb.saveProjects(updatedProjects);

        // Add installation job
        const installations = mockDb.getInstallations();
        const newInstallation = {
          id: "inst-" + Date.now(),
          project_id: newProject.id,
          installer_id: "",
          check_list: { roofMountsSecure: false, panelsWired: false, inverterMounted: false, netMeteringConnected: false },
          photos: [],
          status: "In Progress"
        };
        mockDb.saveInstallations([...installations, newInstallation]);
      }
    }
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-slate-900">Quotation Console</h1>
          <p className="text-gray-500 text-sm">Generate pricing quotes with automated PM Surya Ghar subsidies.</p>
        </div>

        {/* Generate Quote Trigger */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 px-4 rounded-xl shadow-lg shadow-amber-500/10 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              <span>Generate Quote</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold font-serif">Calculate & Generate Quote</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateQuote} className="space-y-4 mt-4 text-sm">
              <div className="space-y-2">
                <Label htmlFor="leadQuoteSelect">Select Pipeline Lead *</Label>
                <select
                  id="leadQuoteSelect"
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
                  <Label htmlFor="systemSize">System Size (kW) *</Label>
                  <Input
                    id="systemSize"
                    type="number"
                    min={1}
                    max={100}
                    value={systemSize}
                    onChange={(e) => setSystemSize(Number(e.target.value))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="panelType">Panel Cell Technology</Label>
                  <select
                    id="panelType"
                    value={panelType}
                    onChange={(e) => setPanelType(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                  >
                    <option value="Mono PERC">Mono PERC (High Efficiency)</option>
                    <option value="Bifacial">Bifacial (Dual-sided Gen)</option>
                    <option value="Polycrystalline">Polycrystalline (Budget)</option>
                  </select>
                </div>
              </div>

              {/* Calculator Summary Table */}
              <div className="border border-amber-200 bg-amber-50/50 rounded-2xl p-4 space-y-2.5">
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider font-mono">Costing Breakdown Summary</h4>
                <div className="flex justify-between text-sm text-slate-600 font-medium">
                  <span>Gross Material & Labor Cost:</span>
                  <span className="font-bold">₹{price.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm text-emerald-600 font-medium">
                  <span>PM Surya Ghar Subsidy:</span>
                  <span className="font-bold">- ₹{subsidy.toLocaleString('en-IN')}</span>
                </div>
                <hr className="border-amber-200" />
                <div className="flex justify-between text-base font-bold text-slate-900">
                  <span>Net Price Payable:</span>
                  <span className="text-amber-600">₹{netPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 mt-4">
                Save & Draft Quote
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* List of Quotes */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider font-mono">
                <th className="p-4 pl-6">Client Name</th>
                <th className="p-4">Size & Panel</th>
                <th className="p-4">Pricing Calc</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right pr-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm">
              {quotes.map((quote) => {
                const lead = leads.find((l) => l.id === quote.lead_id);
                if (!lead) return null;

                return (
                  <tr key={quote.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-4 pl-6 font-bold text-gray-900">{lead.client_name}</td>
                    <td className="p-4">
                      <div className="space-y-0.5">
                        <div className="font-bold text-gray-800">{quote.system_size_kw} kW System</div>
                        <div className="text-xs text-gray-400 font-mono">{quote.panel_type || "Mono PERC"}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-0.5 font-medium text-xs">
                        <div>Gross: ₹{Number(quote.price).toLocaleString('en-IN')}</div>
                        <div className="text-emerald-600">Subsidy: -₹{Number(quote.subsidy_amount).toLocaleString('en-IN')}</div>
                        <div className="font-bold text-sm text-slate-900 mt-0.5">Net: ₹{Number(quote.net_price).toLocaleString('en-IN')}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <select
                        value={quote.status}
                        onChange={(e) => handleUpdateStatus(quote.id, e.target.value)}
                        className={`text-xs font-bold font-mono uppercase border rounded-full px-3 py-1 focus:outline-none ${
                          quote.status === "Accepted"
                            ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                            : quote.status === "Rejected"
                            ? "bg-red-50 border-red-200 text-red-800"
                            : "bg-slate-50 border-slate-200 text-slate-700"
                        }`}
                      >
                        <option value="Draft">Draft</option>
                        <option value="Sent">Sent</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="p-4 text-right pr-6">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            onClick={() => setPreviewQuote({ quote, lead })}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 font-bold border border-slate-200 p-1.5 h-8 rounded-lg"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        {previewQuote && (
                          <DialogContent className="sm:max-w-[650px] font-sans">
                            <DialogHeader>
                              <DialogTitle className="text-xl font-bold font-serif text-amber-500">Official Solar Quotation</DialogTitle>
                            </DialogHeader>
                            {/* PDF Invoice Mock Layout */}
                            <div className="mt-4 border border-slate-200 p-8 rounded-2xl bg-white space-y-6 shadow-sm">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-black text-xl text-slate-900">TARUN & CO.</h3>
                                  <p className="text-xs text-slate-500">Solar Energy Solutions, Vadodara</p>
                                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">Email: support@tarunco.in</p>
                                </div>
                                <div className="text-right">
                                  <h4 className="font-bold text-xs uppercase tracking-wider font-mono text-amber-600">Quotation Invoice</h4>
                                  <p className="text-xs text-slate-400 font-mono mt-1">Ref: {previewQuote.quote.id}</p>
                                  <p className="text-xs text-slate-400 font-mono">{new Date(previewQuote.quote.created_at).toLocaleDateString('en-IN')}</p>
                                </div>
                              </div>

                              <hr className="border-slate-100" />

                              <div className="grid grid-cols-2 gap-4 text-xs">
                                <div>
                                  <span className="font-bold text-slate-400 uppercase tracking-wider block">Prepared For:</span>
                                  <p className="font-bold text-slate-800 text-sm mt-1">{previewQuote.lead.client_name}</p>
                                  <p className="text-slate-500 mt-0.5">{previewQuote.lead.address}</p>
                                  <p className="text-slate-400 font-mono mt-0.5">{previewQuote.lead.mobile}</p>
                                </div>
                              </div>

                              {/* Quotation Table */}
                              <table className="w-full text-left text-xs border-collapse">
                                <thead>
                                  <tr className="bg-slate-50 border-b border-slate-200 font-bold text-slate-500 uppercase font-mono">
                                    <th className="p-3">Description</th>
                                    <th className="p-3 text-right">System Size</th>
                                    <th className="p-3 text-right">Gross Price</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="border-b border-slate-100">
                                    <td className="p-3 font-medium">Solar PV Rooftop Power Plant Installation ({previewQuote.quote.panel_type || "Mono PERC"} Cell Technology)</td>
                                    <td className="p-3 text-right font-mono">{previewQuote.quote.system_size_kw} kW</td>
                                    <td className="p-3 text-right font-mono">₹{Number(previewQuote.quote.price).toLocaleString('en-IN')}</td>
                                  </tr>
                                </tbody>
                              </table>

                              <div className="flex justify-end">
                                <div className="w-64 space-y-2 text-xs border border-slate-100 p-4 rounded-xl bg-slate-50/50">
                                  <div className="flex justify-between text-slate-500">
                                    <span>Material Cost:</span>
                                    <span className="font-mono">₹{Number(previewQuote.quote.price).toLocaleString('en-IN')}</span>
                                  </div>
                                  <div className="flex justify-between text-emerald-600 font-medium">
                                    <span>PM Surya Ghar Subsidy:</span>
                                    <span className="font-mono">-₹{Number(previewQuote.quote.subsidy_amount).toLocaleString('en-IN')}</span>
                                  </div>
                                  <hr className="border-slate-200" />
                                  <div className="flex justify-between text-sm font-bold text-slate-800">
                                    <span>Total Payable:</span>
                                    <span className="font-mono text-amber-600">₹{Number(previewQuote.quote.net_price).toLocaleString('en-IN')}</span>
                                  </div>
                                </div>
                              </div>

                              <div className="text-[10px] text-slate-400 text-center leading-relaxed">
                                Note: This is an automatically generated feasibility quotation based on standard solar installation schedules for Gujarat (UGVCL/DGVCL). Subject to final site approval.
                              </div>
                            </div>
                          </DialogContent>
                        )}
                      </Dialog>
                    </td>
                  </tr>
                );
              })}
              {quotes.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center p-8 text-gray-400 font-mono">
                    No quotations generated yet.
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
