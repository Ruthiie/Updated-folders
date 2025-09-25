"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import Line from "./Line";

export default function HeaderCard() {
  return (
    <Card className="border border-[#DDE5EA] bg-white rounded-xl p-4 md:p-5 shadow-none">
      <div className="flex items-start gap-4 md:gap-6 relative">
        {/* avatar */}
        <div className="relative shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-4 ring-[#E8EFF2]">
          <Image
            src="/Assets/background.jpeg.jpeg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        {/* details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1 w-full text-[14px] leading-6">
          <Line label="Name" value="Abena Peters" />
          <Line label="Employee ID" value="NUR-10234" />
          <Line label="Email ID" value="abenapeters@badisa.com" />
          <Line label="Department" value="Nursing" />
          <Line label="Mobile Number" value="+1 (555) 987-6543" />
          <Line label="Designation" value="Head Nurse" />
          <Line label="Years of Service" value="20 years" />
          <Line label="Reporting Manager" value="Roberta Peters" />
        </div>

        {/* kebab menu */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-[#6B7E8A] hover:bg-[#F3F7F8]"
        >
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>
    </Card>
  );
}
