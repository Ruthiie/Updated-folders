"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Sample Data
const upcomingTrainings = [
  {
    title: "Aggressive behaviour",
    date: "12 Jan 2025",
    facilitator: "Facility Training",
    conductedBy: "Tabisa Booi",
    status: "In Progress",
  },
  {
    title: "Aggressive behaviour",
    date: "12 Jan 2025",
    facilitator: "Facility Training",
    conductedBy: "Tabisa Booi",
    status: "Not Started",
  },
  {
    title: "Anxiousness, Panic Attack",
    date: "12 Jan 2025",
    facilitator: "Badisa Training",
    conductedBy: "Tabisa Booi",
    status: "Not Started",
  },
];

const pastTrainings = [
  {
    name: "Painful dry mouth",
    facilitator: "Facility Training",
    conductedBy: "Tabisa Booi",
    startDate: "1-Mar-2026",
    endDate: "5-Mar-2026",
    expiryDate: "1-Mar-2027",
    status: "Attended",
  },
  {
    name: "Oedema",
    facilitator: "Facility Training",
    conductedBy: "Tabisa Booi",
    startDate: "12-Feb-2026",
    endDate: "23-Feb-2026",
    expiryDate: "12-Feb-2027",
    status: "Attended",
  },
  {
    name: "Hypertension",
    facilitator: "Facility Training",
    conductedBy: "Tabisa Booi",
    startDate: "10-Jun-2026",
    endDate: "10-Jun-2026",
    expiryDate: "10-Jun-2027",
    status: "Attended",
  },
  {
    name: "Weight loss",
    facilitator: "Badisa Head Office",
    conductedBy: "Tabisa Booi",
    startDate: "1-Mar-2026",
    endDate: "1-Mar-2026",
    expiryDate: "1-Mar-2027",
    status: "Attended",
  },
];

export default function TrainingRecordsTab() {
  return (
    <Card className="border border-[#DDE5EA] bg-white rounded-xl p-5 shadow-none">
      <CardContent className="pt-0">

        {/* Search + Filter */}
        <div className="flex justify-end items-center mb-4 gap-2">
          <Input
            type="text"
            placeholder="Search name..."
            className="w-[200px] h-[36px] text-sm"
          />
          <Button className="bg-[#0F6E8C] text-white h-[36px] px-4">Filter</Button>
        </div>

        {/* Upcoming Training */}
        <h3 className="bg-[#DFF3F7] text-[#0F6E8C] font-semibold px-3 py-2 rounded-t-md">
          Upcoming Training
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {upcomingTrainings.map((training, idx) => (
            <Card key={idx} className="border border-gray-200 rounded-lg shadow-sm">
              <CardContent className="p-4">
                <h4 className="font-semibold text-[#1a1a1a] mb-1">
                  {training.title}
                </h4>
                <p className="text-sm text-gray-600">Date: {training.date}</p>
                <p className="text-sm text-gray-600">
                  Training Facilitator: {training.facilitator}
                </p>
                <p className="text-sm text-gray-600">
                  Conducted by: {training.conductedBy}
                </p>

                {/* Status Badge */}
                <div className="mt-2">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      training.status === "In Progress"
                        ? "bg-yellow-400 text-white"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {training.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Past Training Records */}
        <h3 className="bg-[#DFF3F7] text-[#0F6E8C] font-semibold px-3 py-2 rounded-t-md mt-6">
          Past Training Records
        </h3>
        <div className="mt-4 overflow-x-auto rounded-lg border border-[#E8F2F5]">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#DFF3F7] text-[#0F6E8C]">
                <th className="px-4 py-2 text-left font-medium">Training Name</th>
                <th className="px-4 py-2 text-left font-medium">Training Facilitator</th>
                <th className="px-4 py-2 text-left font-medium">Conducted By</th>
                <th className="px-4 py-2 text-left font-medium">Start Date</th>
                <th className="px-4 py-2 text-left font-medium">End Date</th>
                <th className="px-4 py-2 text-left font-medium">Training Expiry Date</th>
                <th className="px-4 py-2 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {pastTrainings.map((t, i) => (
                <tr key={i} className="border-t border-[#E8EFF2]">
                  <td className="px-4 py-3">{t.name}</td>
                  <td className="px-4 py-3">{t.facilitator}</td>
                  <td className="px-4 py-3">{t.conductedBy}</td>
                  <td className="px-4 py-3">{t.startDate}</td>
                  <td className="px-4 py-3">{t.endDate}</td>
                  <td className="px-4 py-3">{t.expiryDate}</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
