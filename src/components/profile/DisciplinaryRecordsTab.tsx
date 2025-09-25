"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type Row = {
  type: string;
  uploadedOn: string;
  uploadedBy: string;
};

const seed: Row[] = [
  { type: "Disciplinary Records A", uploadedOn: "01-Mar-2026", uploadedBy: "HR Admin" },
  { type: "Disciplinary Records B", uploadedOn: "12-Feb-2026", uploadedBy: "Abena Peters" },
];

export default function DisciplinaryRecordsTab() {
  return (
    <Card className="border border-[#DDE5EA] bg-white rounded-xl p-5 shadow-none">
      <CardContent className="pt-0">
        <div className="overflow-x-auto rounded-lg border border-[#E8F2F5]">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#DFF3F7] text-[#0F6E8C]">
                <th className="px-4 py-2 text-left font-medium">Document Type</th>
                <th className="px-4 py-2 text-left font-medium">Uploaded On</th>
                <th className="px-4 py-2 text-left font-medium">Uploaded By</th>
                <th className="px-4 py-2 text-left font-medium">Action</th>
              </tr>
            </thead>

            <tbody>
              {seed.map((r, i) => (
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
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
