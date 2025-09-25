"use client";

import HeaderCard from "@/components/profile/HeaderCard";
import ProfileTabs from "@/components/profile/ProfileTabs";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#F3F7F8] p-4 md:p-6">
      {/* This should always stay fixed at the top */}
      <HeaderCard />  

      {/* Tabs with switchable content */}
      <div className="mt-4">
        <ProfileTabs />
      </div>
    </main>
  );
}
