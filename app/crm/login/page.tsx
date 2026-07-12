"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Sun, ShieldAlert, KeyRound, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CRMLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Admin");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Setup mock login logic
    if (email && password) {
      const name = email.split("@")[0];
      const displayName = name.charAt(0).toUpperCase() + name.slice(1);
      
      const userData = {
        name: displayName,
        role: role,
        email: email
      };
      
      localStorage.setItem("crm_user", JSON.stringify(userData));
      router.push("/crm");
    } else {
      setError("Please fill in all the details.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Decorative Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="flex justify-center">
          <div className="h-14 w-14 rounded-2xl bg-amber-500 flex items-center justify-center shadow-2xl shadow-amber-500/30">
            <Sun className="w-8 h-8 text-slate-950" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white tracking-tight font-serif">
          Tarun & Co. Solar CRM
        </h2>
        <p className="mt-2 text-center text-sm text-slate-400 font-mono">
          Enter credentials to access the console
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-slate-900/60 backdrop-blur-xl py-8 px-4 border border-slate-800 shadow-2xl rounded-2xl sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 bg-red-950/40 border border-red-800/60 rounded-xl flex items-center gap-2 text-red-400 text-sm">
                <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-slate-300 font-mono mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-500" />
                </div>
                <Input
                  type="email"
                  placeholder="name@tarunco.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-amber-500 focus:ring-amber-500/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 font-mono mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <KeyRound className="h-5 w-5 text-slate-500" />
                </div>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="pl-10 bg-slate-950 border-slate-800 text-white placeholder-slate-500 focus:border-amber-500 focus:ring-amber-500/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-300 font-mono mb-2">
                Select Your Role (For Testing)
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
              >
                <option value="Admin">Admin (Access Everything)</option>
                <option value="Sales">Sales Executive</option>
                <option value="Installer">Installer (Checklist updates)</option>
                <option value="Support">Support Agent</option>
              </select>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl shadow-lg shadow-amber-500/10 active:scale-[0.99] transition-all"
            >
              {isSubmitting ? "Signing in..." : "Access CRM"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
