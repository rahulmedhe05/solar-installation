"use client";

import React, { useState, useEffect } from "react";
import { Plus, Receipt, CheckCircle, XCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { mockDb } from "@/lib/supabase";

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState("Sales");

  // Form states
  const [category, setCategory] = useState("Transport");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    loadData();
    const stored = localStorage.getItem("crm_user");
    if (stored) {
      setUserRole(JSON.parse(stored).role);
    }
  }, []);

  const loadData = () => {
    setExpenses(mockDb.getExpenses());
  };

  const handleCreateExpense = (e: React.FormEvent) => {
    e.preventDefault();

    const newExpense = {
      id: "exp-" + Date.now(),
      category,
      amount,
      date: date || new Date().toISOString().split('T')[0],
      description,
      receipt_url: "",
      status: "Pending"
    };

    const updated = [...expenses, newExpense];
    mockDb.saveExpenses(updated);
    setExpenses(updated);
    setIsOpen(false);

    // Reset Form
    setCategory("Transport");
    setAmount(0);
    setDate("");
    setDescription("");
  };

  const handleUpdateStatus = (expenseId: string, newStatus: string) => {
    const updated = expenses.map((exp) =>
      exp.id === expenseId ? { ...exp, status: newStatus } : exp
    );
    mockDb.saveExpenses(updated);
    setExpenses(updated);
  };

  const categories = ["Transport", "Material Purchase", "Vendor Payment", "Office Supplies", "Marketing", "Others"];

  return (
    <div className="space-y-6 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-slate-900">Expenses Tracker</h1>
          <p className="text-gray-500 text-sm">Log and approve material procurement, travel, and marketing costs.</p>
        </div>

        {/* Log Expense Trigger */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 px-4 rounded-xl shadow-lg shadow-amber-500/10 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              <span>Log Expense</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[450px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold font-serif">Record Operations Expense</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateExpense} className="space-y-4 mt-4 text-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expCat">Category</Label>
                  <select
                    id="expCat"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expAmount">Amount (INR) *</Label>
                  <Input
                    id="expAmount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expDate">Expense Date</Label>
                <Input
                  id="expDate"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expDesc">Description / Vendor Details</Label>
                <Input
                  id="expDesc"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. buying 20m cabling for solar install..."
                />
              </div>

              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 mt-4">
                Record Expense
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Expenses Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider font-mono">
                <th className="p-4 pl-6">Category</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Date</th>
                <th className="p-4">Description</th>
                <th className="p-4">Status</th>
                {userRole === "Admin" && <th className="p-4 pr-6 text-right">Actions</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {expenses.map((exp) => (
                <tr key={exp.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="p-4 pl-6 font-bold text-gray-900">{exp.category}</td>
                  <td className="p-4 font-mono font-bold text-slate-800">₹{Number(exp.amount).toLocaleString('en-IN')}</td>
                  <td className="p-4 font-mono text-xs text-gray-500">{exp.date}</td>
                  <td className="p-4 text-gray-600 font-medium max-w-xs truncate">{exp.description || "N/A"}</td>
                  <td className="p-4">
                    <span className={`text-[10px] font-bold font-mono uppercase px-2.5 py-0.5 rounded-full border flex items-center gap-1 w-fit ${
                      exp.status === "Approved"
                        ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                        : exp.status === "Rejected"
                        ? "bg-red-50 border-red-200 text-red-800"
                        : "bg-amber-50 border-amber-200 text-amber-800 animate-pulse"
                    }`}>
                      {exp.status === "Approved" ? (
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                      ) : exp.status === "Rejected" ? (
                        <XCircle className="w-3 h-3 text-red-600" />
                      ) : (
                        <Clock className="w-3 h-3 text-amber-600" />
                      )}
                      <span>{exp.status}</span>
                    </span>
                  </td>
                  {userRole === "Admin" && (
                    <td className="p-4 pr-6 text-right space-x-2">
                      {exp.status === "Pending" && (
                        <>
                          <Button
                            onClick={() => handleUpdateStatus(exp.id, "Approved")}
                            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold border border-emerald-200 py-1 px-2.5 h-7 text-xs rounded-lg"
                          >
                            Approve
                          </Button>
                          <Button
                            onClick={() => handleUpdateStatus(exp.id, "Rejected")}
                            className="bg-red-50 hover:bg-red-100 text-red-800 font-bold border border-red-200 py-1 px-2.5 h-7 text-xs rounded-lg"
                          >
                            Reject
                          </Button>
                        </>
                      )}
                    </td>
                  )}
                </tr>
              ))}
              {expenses.length === 0 && (
                <tr>
                  <td colSpan={userRole === "Admin" ? 6 : 5} className="text-center p-8 text-gray-400 font-mono">
                    No operational expenses recorded.
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
