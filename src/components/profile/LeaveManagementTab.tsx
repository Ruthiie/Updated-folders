"use client";

import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* ---- Main Component ---- */
export default function LeaveManagementTab() {
  const balances = [
    { title: "Annual Leave", available: 4, total: 35, color: "bg-blue-300", softColor: "bg-blue-50" },
    { title: "Sick Leave", available: 7, total: 60, color: "bg-green-300", softColor: "bg-green-50" },
    { title: "Maternity Leave", available: 2, total: 120, color: "bg-yellow-300", softColor: "bg-yellow-50" },
    { title: "Parental Leave", available: 1, total: 10, color: "bg-purple-300", softColor: "bg-purple-50" },
    { title: "Adoption Leave", available: 0, total: 70, color: "bg-pink-300", softColor: "bg-pink-50" },
    { title: "Commissioning Parental", available: 4, total: 70, color: "bg-indigo-300", softColor: "bg-indigo-50" },
    { title: "Family Responsibility", available: 4, total: 3, color: "bg-orange-300", softColor: "bg-orange-50" },
    { title: "Study Leave", available: 4, total: 40, color: "bg-teal-300", softColor: "bg-teal-50" },
    { title: "Special Leave", available: 4, total: 10, color: "bg-red-300", softColor: "bg-red-50" },
    { title: "Time-off in Lieu (TOIL)", available: 4, total: 18, color: "bg-gray-300", softColor: "bg-gray-50" },
  ];

  return (
    <div className="space-y-6">
      {/* Leave Balance */}
      <Card className="border border-[#DDE5EA] bg-white rounded-xl p-5 shadow-none">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-semibold text-[#334651]">Leave Balance</h2>
          <Button className="bg-[#0F6E8C] hover:bg-[#0D627D] text-white rounded-md h-9 px-4 shadow-sm">
            Apply Leave
          </Button>
        </div>

        {/* Content as Carousel */}
        <CardContent className="pt-4 relative">
          <Carousel 
            plugins={[
              Autoplay({ delay: 3000 }),
            ]}
          >
            <CarouselContent className="-ml-2 flex ">
              {balances.map((item, idx) => (
                <CarouselItem key={idx} className="basis-1/2 md:basis-1/4 lg:basis-1/5 pl-2">
                  <LeaveBalanceCard {...item} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden" />
            <CarouselNext className="hidden" />
          </Carousel>
        </CardContent>
      </Card>

      {/* Recent Leaves (unchanged) */}
      <Card className="border border-[#DDE5EA] bg-white rounded-xl p-5 shadow-none">
        <div className="flex items-center justify-between border-b border-[#DDE5EA] pb-2">
          <h2 className="text-[18px] font-semibold text-[#334651]">My Recent Leaves</h2>
        </div>

        <CardContent className="pt-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2">Leave type</th>
                <th className="p-2">Start Date</th>
                <th className="p-2">End Date</th>
                <th className="p-2">Days</th>
                <th className="p-2">Status</th>
                <th className="p-2">Reasons</th>
                <th className="p-2">Supporting Doc</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <LeaveRow type="Annual Leave" start="28/03/2025" end="1/04/2025" days={5} status="Pending" reason="Fall down" doc="View/Download" />
              <LeaveRow type="Sick leave" start="28/03/2025" end="1/04/2025" days={3} status="Rejected" reason="Fall down" doc="View/Download" />
              <LeaveRow type="Sick leave" start="28/03/2025" end="2/04/2025" days={5} status="Approved" reason="Fall down" doc="View/Download" />
              <LeaveRow type="Sick leave" start="28/03/2025" end="29/03/2025" days={1} status="Approved" reason="Fall down" doc="View/Download" />
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

/* ---- Subcomponents ---- */

function LeaveBalanceCard({
  title,
  available,
  total,
  color,
  softColor,
}: {
  title: string;
  available: number;
  total: number;
  color: string;
  softColor: string;
}) {
  return (
    <Card className={`w-[200px] h-[120px] rounded-lg shadow-sm border border-gray-200 overflow-hidden ${softColor}`}>
      {/* Colored Header */}
      <div className={`${color} text-center py-2 text-sm font-semibold text-[#1a1a1a]`}>
        {title}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center mt-2">
        <p className="text-xl font-bold">
          {available}
          <span className="text-gray-500 text-sm font-normal">/{total}</span>
        </p>
        <a
          href="#"
          className="text-xs mt-1 text-[#0F6E8C] underline underline-offset-2 hover:text-[#0D627D]"
        >
          Currently Available
        </a>
      </div>
    </Card>
  );
}

function LeaveRow({ type, start, end, days, status, reason, doc }: any) {
  const statusColor =
    status === "Pending"
      ? "bg-yellow-100 text-yellow-800"
      : status === "Approved"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";

  return (
    <tr className="border-b">
      <td className="p-2">{type}</td>
      <td className="p-2">{start}</td>
      <td className="p-2">{end}</td>
      <td className="p-2">{days}</td>
      <td className="p-2">
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusColor}`}>
          {status}
        </span>
      </td>
      <td className="p-2">{reason}</td>
      <td className="p-2 text-blue-600 cursor-pointer">{doc}</td>
      <td className="p-2">
        {status === "Pending" && (
          <Button variant="destructive" size="sm">
            Withdraw
          </Button>
        )}
      </td>
    </tr>
  );
}
