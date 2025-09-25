"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type DocRow = {
  type: string;
  uploadedOn: string;
  uploadedBy: string;
  href?: string;
};

const seed: DocRow[] = [
  { type: "Appointment Letter", uploadedOn: "01-Mar-2026", uploadedBy: "HR Admin" },
  { type: "ID Proof", uploadedOn: "12-Feb-2026", uploadedBy: "Abena Peters" },
  { type: "Medical Certificate", uploadedOn: "10-Jun-2026", uploadedBy: "HR Admin" },
  { type: "PF Registration Form", uploadedOn: "01-Mar-2026", uploadedBy: "HR Admin" },
  { type: "Contract Agreement", uploadedOn: "12-Feb-2026", uploadedBy: "HR Admin" },
  { type: "Resume", uploadedOn: "10-Jun-2026", uploadedBy: "Abena Peters" },
];

export default function DocumentsTab() {
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    const key = q.trim().toLowerCase();
    if (!key) return seed;
    return seed.filter(
      r =>
        r.type.toLowerCase().includes(key) ||
        r.uploadedBy.toLowerCase().includes(key) ||
        r.uploadedOn.toLowerCase().includes(key)
    );
  }, [q]);

  return (
    <Card className="border border-[#DDE5EA] bg-white rounded-xl p-5 shadow-none">
      {/* Toolbar */}
      <div className="flex items-center justify-end gap-3">
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search name..."
          className="h-9 w-[220px] rounded-md border-[#D5DEE4] focus-visible:ring-[#0F6E8C]/20"
        />
        <Button className="bg-[#0F6E8C] hover:bg-[#0D627D] text-white rounded-md h-9 px-4 shadow-sm">
          Upload Document
        </Button>
      </div>

      {/* Table */}
      <CardContent className="pt-4">
        <div className="overflow-x-auto rounded-lg border border-[#DDE5EA]">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#DFF3F7] text-[#0F6E8C]">
                <th className="px-4 py-2 text-left font-medium first:rounded-tl-lg">Document Type</th>
                <th className="px-4 py-2 text-left font-medium">Uploaded On</th>
                <th className="px-4 py-2 text-left font-medium">Uploaded By</th>
                <th className="px-4 py-2 text-left font-medium last:rounded-tr-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-[#E8EFF2]">
                  <td className="px-4 py-3">{r.type}</td>
                  <td className="px-4 py-3">{r.uploadedOn}</td>
                  <td className="px-4 py-3">{r.uploadedBy}</td>
                  <td className="px-4 py-3">
                    <button className="text-[#0F6E8C] hover:text-[#0D627D] underline underline-offset-2">
                      View/Download
                    </button>
                  </td>
                </tr>
              ))}

              {rows.length === 0 && (
                <tr>
                  <td className="px-4 py-6 text-center text-[#6B7E8A]" colSpan={4}>
                    No documents found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
