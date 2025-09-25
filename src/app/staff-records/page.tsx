"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Staff = {
  id: number;
  name: string;
  employeeId: string;
  contact: string;
  department: string;
  status: "On Duty" | "On Leave" | "Off Duty";
};

const DEPARTMENTS = [
  "Nursing",
  "General",
  "Finance",
  "HR",
  "Kitchen",
  "Laundry",
  "Maintenance",
  "Gardening",
] as const;

const STAFF: Staff[] = [
  { id: 1, name: "Ester Howard", employeeId: "BTH06-11679", contact: "21894030685", department: "Nursing", status: "On Duty" },
  { id: 2, name: "Thabo Mokoena", employeeId: "BTH06-35452", contact: "21894030685", department: "Nursing", status: "On Leave" },
  { id: 3, name: "Daniel Ndidoo", employeeId: "BTH06-75422", contact: "21894030683", department: "Nursing", status: "On Duty" },
];

export default function StaffRecordsPage() {
  const [query, setQuery] = useState("");
  const [selectedDepts, setSelectedDepts] = useState<Set<string>>(new Set());

  function toggleDept(d: string) {
    setSelectedDepts((prev) => {
      const next = new Set(prev);
      if (next.has(d)) next.delete(d);
      else next.add(d);
      return next;
    });
  }
  function clearDepts() {
    setSelectedDepts(new Set());
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return STAFF.filter((s) => {
      const deptMatch = selectedDepts.size === 0 || selectedDepts.has(s.department);
      const queryMatch =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.employeeId.toLowerCase().includes(q) ||
        s.contact.toLowerCase().includes(q);
      return deptMatch && queryMatch;
    });
  }, [query, selectedDepts]);

  return (
    <div className="min-h-screen bg-[#F3F7F8] p-6">
      {/* Title above the white card */}
      <div className="max-w-7xl mx-auto mb-3">
        <h2 className="text-[20px] font-semibold text-[#334651]">Staff Records</h2>
      </div>

      {/* White card */}
      <div className="max-w-7xl mx-auto bg-white rounded-md shadow-sm">
        {/* Top area: filters + search */}
        <div className="px-6 py-4 border-b border-[#E8EFF2]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            {/* checkboxes row (left) */}
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={selectedDepts.size === 0}
                  onChange={clearDepts}
                  className="h-3 w-3"
                />
                <span className="text-sm text-[#51636F]">All</span>
              </label>

              {DEPARTMENTS.map((d) => (
                <label key={d} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedDepts.has(d)}
                    onChange={() => toggleDept(d)}
                    className="h-3 w-3"
                  />
                  <span className="text-sm text-[#51636F]">{d}</span>
                </label>
              ))}
            </div>

            {/* search (right) */}
            <div className="flex items-center gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search name..."
                className="h-9 w-64 rounded-md border border-[#DDE5EA] px-3 text-sm outline-none focus:ring-2 focus:ring-[#BEE5EF]"
              />
            </div>
          </div>
        </div>

        {/* Table container */}
        <div className="px-6 py-4">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              {/* STATIC header — no hover changes */}
              <thead>
                <tr className="bg-[#DFF3F7]">
                  <th className="text-left px-4 py-3 text-black font-medium text-sm">Name</th>
                  <th className="text-left px-4 py-3 text-black font-medium text-sm">Employee ID</th>
                  <th className="text-left px-4 py-3 text-black font-medium text-sm">Contact No.</th>
                  <th className="text-left px-4 py-3 text-black font-medium text-sm">Department</th>
                  <th className="text-left px-4 py-3 text-black font-medium text-sm">Details</th>
                  <th className="text-left px-4 py-3 text-black font-medium text-sm">Current Status</th>
                  <th className="text-left px-4 py-3 text-black font-medium text-sm">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((row) => (
                  <tr key={row.id} className="border-t border-[#E8EFF2]">
                    <td className="px-4 py-3">
                      {/* avatar initials + link */}
                      <Link href={`/profile/${row.id}`} className="inline-flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-[#E8F2F5] flex items-center justify-center text-xs font-medium text-[#0F6E8C]">
                          {initials(row.name)}
                        </div>
                        <span className="text-sm text-[#334651]">{row.name}</span>
                      </Link>
                    </td>

                    <td className="px-4 py-3 text-sm text-[#51636F]">{row.employeeId}</td>
                    <td className="px-4 py-3 text-sm text-[#51636F]">{row.contact}</td>
                    <td className="px-4 py-3 text-sm text-[#51636F]">{row.department}</td>

                    <td className="px-4 py-3">
                      <Link href={`/profile/${row.id}`}>
                        <button className="h-7 px-3 rounded-md border border-[#DDE5EA] text-sm bg-white hover:bg-gray-50">
                          Details
                        </button>
                      </Link>
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                          row.status === "On Duty" ? "bg-[#0F6E8C] text-white" : "bg-[#E94B5E] text-white"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <button
                        aria-label="actions"
                        className="h-8 w-8 rounded-md border border-[#DDE5EA] bg-white text-sm"
                      >
                        ⋯
                      </button>
                    </td>
                  </tr>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-[#6B7E8A]">
                      No staff match your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* helpers */
function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
