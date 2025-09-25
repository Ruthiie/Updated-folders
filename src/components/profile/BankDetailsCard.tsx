"use client";

import { Card } from "@/components/ui/card";
import KV from "./KV";

export default function BankDetailsCard() {
  return (
    <Card className="border border-[#DDE5EA] bg-white rounded-xl p-5 shadow-none">
      <h2 className="text-[18px] font-semibold text-[#334651] border-b border-[#DDE5EA] pb-2">
        Bank Details
      </h2>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-y-3 text-[14px]">
        <KV k="Bank Name" v="Standard Bank" />
        <KV k="Account Type" v="Savings" />
        <KV k="Account Holder’s Name" v="Abena G. Peters" />
        <KV k="Account Branch" v="Cape Town" />
        <KV k="Account Number" v="121212121212" />
        <KV k="Branch Code" v="121212" />
        <KV k="Own/Joint/Third Party" v="Own" />
      </div>
    </Card>
  );
}
