"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import PersonalDetailsCard from "./PersonalDetailsCard";
import BankDetailsCard from "./BankDetailsCard";
import EmergencyContactCard from "./EmergencyContactCard";
import LeaveManagementTab from "./LeaveManagementTab";
import DocumentsTab from "./DocmentsTab";
import DisciplinaryRecordsTab from "./DisciplinaryRecordsTab";
import TrainingRecordTab from "./TrainingRecordTab";

export default function ProfileTabs() {
  return (
    <Tabs defaultValue="personal" className="w-full">
      {/* Tab headers */}
      <TabsList
        className="
          w-full justify-start gap-6 md:gap-8
          h-auto bg-transparent rounded-none p-0
          border-b border-[#DDE5EA]
        "
      >
        <TabsTrigger
          value="personal" 
          className="
            rounded-none px-0 pb-2 pt-0
            text-[14px] font-medium text-[#51636F]
            border-b border-transparent
            data-[state=active]:text-[#0F6E8C]
            data-[state=active]:border-b-2 data-[state=active]:border-[#0F6E8C]
            hover:text-[#0F6E8C]
            focus:outline-none focus:ring-0 focus:ring-offset-0
          "
        >
          Personal Details
        </TabsTrigger>

        <TabsTrigger 
          value="leave" 
          className="
            rounded-none px-0 pb-2 pt-0
            text-[14px] font-medium text-[#51636F]
            border-b border-transparent
            data-[state=active]:text-[#0F6E8C]
            data-[state=active]:border-b-2 data-[state=active]:border-[#0F6E8C]
            hover:text-[#0F6E8C]
          "
        >
          Leave Management
        </TabsTrigger>

        <TabsTrigger 
          value="training"  
          className="
          rounded-none px-0 pb-2 pt-0
            text-[14px] font-medium text-[#51636F]
            border-b border-transparent
            data-[state=active]:text-[#0F6E8C]
            data-[state=active]:border-b-2 data-[state=active]:border-[#0F6E8C]
            hover:text-[#0F6E8C]
          "
        >
          Training Records
        </TabsTrigger>

        <TabsTrigger 
          value="documents"   
          className="
            rounded-none px-0 pb-2 pt-0
            text-[14px] font-medium text-[#51636F]
            border-b border-transparent
            data-[state=active]:text-[#0F6E8C]
            data-[state=active]:border-b-2 data-[state=active]:border-[#0F6E8C]
            hover:text-[#0F6E8C]
          "
        >
          Documents
        </TabsTrigger>

        <TabsTrigger  
          value="disciplinary"  
          className="
            rounded-none px-0 pb-2 pt-0
            text-[14px] font-medium text-[#51636F]
            border-b border-transparent
            data-[state=active]:text-[#0F6E8C]
            data-[state=active]:border-b-2 data-[state=active]:border-[#0F6E8C]
            hover:text-[#0F6E8C]
          "
        >
          Disciplinary Records
        </TabsTrigger>
      </TabsList>

      {/* Personal Details Tab */}
      <TabsContent value="personal" className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PersonalDetailsCard />
          <div className="flex flex-col gap-4">
            <BankDetailsCard />
            <EmergencyContactCard />
          </div>
        </div>
      </TabsContent>

      {/* Leave Management Tab */}
      <TabsContent value="leave" className="mt-4">
        <LeaveManagementTab />
      </TabsContent>

      {/* Training */}
      <TabsContent value="training" className="mt-4">
        <TrainingRecordTab/>
      </TabsContent>

      {/* Documents */}
      <TabsContent value="documents" className="mt-4">
        < DocumentsTab/>
      </TabsContent>

      {/* Disciplinary */}
      <TabsContent value="disciplinary" className="mt-4">
        <DisciplinaryRecordsTab/>
      </TabsContent>
    </Tabs>
  );
}
