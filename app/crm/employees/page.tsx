"use client";

import React, { useState, useEffect } from "react";
import { Users, ClipboardList, Plus, Calendar, Check, X, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { mockDb } from "@/lib/supabase";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<any[]>([]);
  const [attendance, setAttendance] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [todayDate, setTodayDate] = useState("");

  // Employee Form states
  const [name, setName] = useState("");
  const [role, setRole] = useState("Solar Installer");
  const [salary, setSalary] = useState<number>(25000);
  const [joiningDate, setJoiningDate] = useState("");

  // Attendance logging temp state
  const [attendanceLogs, setAttendanceLogs] = useState<Record<string, string>>({});

  useEffect(() => {
    loadData();
    setTodayDate(new Date().toISOString().split('T')[0]);
  }, []);

  const loadData = () => {
    const empData = mockDb.getEmployees();
    const attData = mockDb.getAttendance();
    setEmployees(empData);
    setAttendance(attData);

    // Load today's logs if they exist
    const today = new Date().toISOString().split('T')[0];
    const todayLogs: Record<string, string> = {};
    attData
      .filter((a: any) => a.date === today)
      .forEach((a: any) => {
        todayLogs[a.employee_id] = a.status;
      });
    setAttendanceLogs(todayLogs);
  };

  const handleCreateEmployee = (e: React.FormEvent) => {
    e.preventDefault();

    const newEmp = {
      id: "emp-" + Date.now(),
      name,
      role,
      salary,
      joining_date: joiningDate || new Date().toISOString().split('T')[0]
    };

    const updated = [...employees, newEmp];
    mockDb.saveEmployees(updated);
    setEmployees(updated);
    setIsOpen(false);

    // Reset Form
    setName("");
    setRole("Solar Installer");
    setSalary(25000);
    setJoiningDate("");
  };

  const handleMarkAttendance = (employeeId: string, status: string) => {
    const updatedLogs = {
      ...attendanceLogs,
      [employeeId]: status
    };
    setAttendanceLogs(updatedLogs);

    // Save to database
    const attList = mockDb.getAttendance();
    const index = attList.findIndex((a: any) => a.employee_id === employeeId && a.date === todayDate);

    if (index > -1) {
      attList[index].status = status;
    } else {
      attList.push({
        id: "att-" + Date.now() + "-" + employeeId.slice(-4),
        employee_id: employeeId,
        date: todayDate,
        status: status
      });
    }

    mockDb.saveAttendance(attList);
    setAttendance(attList);
  };

  return (
    <div className="space-y-8 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif text-slate-900">Personnel & Operations</h1>
          <p className="text-gray-500 text-sm">Manage staff records, daily attendance registries, and monthly payrolls.</p>
        </div>

        {/* Create Employee Trigger */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 px-4 rounded-xl shadow-lg shadow-amber-500/10 flex items-center gap-2">
              <Plus className="w-5 h-5" />
              <span>Hire Employee</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[450px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold font-serif">Add New Staff Employee</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreateEmployee} className="space-y-4 mt-4 text-sm">
              <div className="space-y-2">
                <Label htmlFor="empName">Full Name *</Label>
                <Input
                  id="empName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="e.g. Ketan Trivedi"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="empRole">Designation / Role</Label>
                  <select
                    id="empRole"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none"
                  >
                    <option value="Solar Installer">Solar Installer</option>
                    <option value="Sales Manager">Sales Manager</option>
                    <option value="Support Executive">Support Executive</option>
                    <option value="General Admin">General Admin</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empSalary">Salary (Monthly INR) *</Label>
                  <Input
                    id="empSalary"
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="joiningDate">Joining Date</Label>
                <Input
                  id="joiningDate"
                  type="date"
                  value={joiningDate}
                  onChange={(e) => setJoiningDate(e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 mt-4">
                Add Staff
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Employee List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold font-serif text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-500" />
            <span>Staff Directory</span>
          </h2>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider font-mono">
                    <th className="p-4 pl-6">Name</th>
                    <th className="p-4">Designation</th>
                    <th className="p-4">Monthly Salary</th>
                    <th className="p-4 pr-6">Hired On</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {employees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-4 pl-6 font-bold text-gray-900">{emp.name}</td>
                      <td className="p-4 text-gray-600 font-medium">{emp.role}</td>
                      <td className="p-4 font-mono font-bold text-slate-800">₹{Number(emp.salary).toLocaleString('en-IN')}</td>
                      <td className="p-4 pr-6 text-gray-400 font-mono text-xs">{emp.joining_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Col: Attendance Logger */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold font-serif text-slate-900 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-amber-500" />
            <span>Daily Attendance</span>
          </h2>

          <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm space-y-4">
            <div className="flex justify-between items-center text-xs font-mono font-bold text-gray-400 border-b border-gray-100 pb-3">
              <span>Date Register:</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {todayDate}</span>
            </div>

            <div className="space-y-3.5">
              {employees.map((emp) => {
                const status = attendanceLogs[emp.id] || "";

                return (
                  <div key={emp.id} className="flex justify-between items-center gap-3">
                    <div className="overflow-hidden">
                      <p className="font-bold text-gray-800 text-sm truncate">{emp.name}</p>
                      <p className="text-[10px] text-gray-400 font-mono">{emp.role}</p>
                    </div>

                    <div className="flex border border-gray-200 rounded-lg overflow-hidden shrink-0">
                      {[
                        { code: "Present", label: "P", color: "bg-emerald-500 text-white" },
                        { code: "Absent", label: "A", color: "bg-red-500 text-white" },
                        { code: "Leave", label: "L", color: "bg-blue-500 text-white" }
                      ].map((opt) => {
                        const isSel = status === opt.code;
                        return (
                          <button
                            key={opt.code}
                            onClick={() => handleMarkAttendance(emp.id, opt.code)}
                            className={`w-9 h-8 text-xs font-bold transition-all border-r border-gray-200 last:border-r-0 ${
                              isSel ? opt.color : "bg-white text-gray-500 hover:bg-slate-50"
                            }`}
                            title={opt.code}
                          >
                            {opt.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
