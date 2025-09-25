"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import KV from "./KV";
import Field from "./Field";

export default function EmergencyContactCard() {
  return (
    <Card className="border border-[#DDE5EA] bg-white rounded-xl p-5 shadow-none">
      <div className="flex items-center justify-between border-b border-[#DDE5EA] pb-2">
        <h2 className="text-[18px] font-semibold text-[#334651]">
          Emergency Contact Details
        </h2>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-[#0F6E8C] hover:bg-[#0D627D] text-white rounded-md h-9 px-4 shadow-sm">
              Edit Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Emergency Contact</DialogTitle>
            </DialogHeader>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <Field
                className="md:col-span-2"
                label="Name and Surname"
                defaultValue="John Anderson"
              />
              <Field label="Relationship" defaultValue="Husband" />
              <Field label="Contact Number" defaultValue="121212121212" />

              <div className="md:col-span-2 flex justify-end gap-2 mt-2">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-[#0F6E8C] hover:bg-[#0D627D] text-white">
                  Save
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-y-3 text-[14px]">
        <KV k="Name and Surname" v="John Anderson" />
        <KV k="Relationship" v="Husband" />
        <KV k="Contact Number" v="121212121212" />
      </div>
    </Card>
  );
}
