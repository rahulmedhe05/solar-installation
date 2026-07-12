"use client";

import React, { useState, useEffect } from "react";
import { Plus, MessageSquare, Send, Copy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { mockDb } from "@/lib/supabase";

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  
  // Create state
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [variables, setVariables] = useState<string[]>([]);

  // Send test state
  const [testLeadId, setTestLeadId] = useState("");
  const [testTemplate, setTestTemplate] = useState<any>(null);
  const [generatedText, setGeneratedText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setTemplates(mockDb.getTemplates());
    setLeads(mockDb.getLeads());
  };

  const handleCreateTemplate = (e: React.FormEvent) => {
    e.preventDefault();

    // Parse variables out of text matching {{variableName}}
    const matches = text.match(/\{\{([^}]+)\}\}/g);
    const parsedVars = matches ? matches.map(m => m.replace(/\{\{|\}\}/g, '').trim()) : [];

    const newTemplate = {
      id: "tmp-" + Date.now(),
      name,
      text,
      variables: parsedVars
    };

    const updated = [...templates, newTemplate];
    mockDb.saveTemplates(updated);
    setTemplates(updated);
    setIsOpen(false);

    // Reset Form
    setName("");
    setText("");
    setVariables([]);
  };

  // Generate test WhatsApp message content
  useEffect(() => {
    if (!testTemplate || !testLeadId) {
      setGeneratedText("");
      return;
    }

    const lead = leads.find((l) => l.id === testLeadId);
    if (!lead) return;

    let output = testTemplate.text;
    
    // Replace standard variables
    output = output.replace(/\{\{name\}\}/gi, lead.client_name);
    output = output.replace(/\{\{address\}\}/gi, lead.address);
    output = output.replace(/\{\{date\}\}/gi, new Date().toLocaleDateString('en-IN'));
    output = output.replace(/\{\{status\}\}/gi, lead.status);

    setGeneratedText(output);
  }, [testLeadId, testTemplate, leads]);

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSendWhatsApp = () => {
    const lead = leads.find((l) => l.id === testLeadId);
    if (!lead) return;
    
    const formattedPhone = lead.mobile.replace(/[^0-9]/g, "");
    const waUrl = `https://wa.me/91${formattedPhone}?text=${encodeURIComponent(generatedText)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-slate-900">WhatsApp Notification Templates</h1>
          <p className="text-gray-500 text-sm">Create and test automated messaging templates for lead and project status alerts.</p>
        </div>

        {/* Create Template Trigger */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 px-4 rounded-xl shadow-lg shadow-amber-500/10 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              <span>Add Template</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[450px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold font-serif">Create Message Template</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateTemplate} className="space-y-4 mt-4 text-sm">
              <div className="space-y-2">
                <Label htmlFor="tmpName">Template Title *</Label>
                <Input
                  id="tmpName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="e.g. Project Installation Alert"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tmpText">Template Message *</Label>
                <Textarea
                  id="tmpText"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  required
                  placeholder="e.g. Hello {{name}}, your installation status is: {{status}}."
                  rows={5}
                />
                <span className="text-[10px] text-gray-400 font-mono block leading-relaxed mt-1">
                  Supported variables: Use {"{{name}}"}, {"{{address}}"}, {"{{date}}"}, or {"{{status}}"} inside your text.
                </span>
              </div>

              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 mt-4">
                Create Template
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Grid of templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((tmp) => (
          <div key={tmp.id} className="bg-white border border-gray-200 shadow-sm rounded-2xl p-5 space-y-4 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 border-b border-gray-100 pb-2.5">
                <MessageSquare className="w-5 h-5 text-amber-500" />
                <h4 className="font-extrabold text-gray-900 text-base">{tmp.name}</h4>
              </div>

              <p className="text-sm text-gray-600 bg-slate-50 p-4 rounded-xl border border-slate-100 leading-relaxed font-mono whitespace-pre-wrap">
                {tmp.text}
              </p>

              {tmp.variables.length > 0 && (
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">Bound Vars:</span>
                  {tmp.variables.map((v: string) => (
                    <span key={v} className="text-[10px] font-bold font-mono px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md border border-slate-200">
                      {v}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Test Trigger */}
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  onClick={() => {
                    setTestTemplate(tmp);
                    setTestLeadId("");
                  }}
                  className="w-full mt-4 bg-slate-100 hover:bg-amber-500 text-slate-800 hover:text-slate-950 font-bold border border-slate-200 hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/10 active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Test Send Template
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold font-serif text-slate-900">Test Send Notification</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4 text-sm">
                  <div className="space-y-2">
                    <Label htmlFor="testLeadSelect">Select Target Lead *</Label>
                    <select
                      id="testLeadSelect"
                      value={testLeadId}
                      onChange={(e) => setTestLeadId(e.target.value)}
                      className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                    >
                      <option value="">Choose target lead...</option>
                      {leads.map((lead) => (
                        <option key={lead.id} value={lead.id}>
                          {lead.client_name} - {lead.mobile}
                        </option>
                      ))}
                    </select>
                  </div>

                  {generatedText && (
                    <div className="space-y-2">
                      <Label>Preview Message Body</Label>
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 leading-relaxed font-mono whitespace-pre-wrap text-gray-700 text-xs">
                        {generatedText}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button 
                          onClick={handleCopyMessage}
                          className="flex-1 bg-white border border-gray-200 hover:bg-slate-50 text-gray-700 font-bold"
                        >
                          {isCopied ? <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                          <span>{isCopied ? "Copied!" : "Copy Text"}</span>
                        </Button>
                        <Button 
                          onClick={handleSendWhatsApp}
                          className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
                        >
                          <Send className="w-4 h-4 mr-2" />
                          Send WhatsApp
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
}
